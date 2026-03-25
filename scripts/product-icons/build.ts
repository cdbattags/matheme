import path from 'node:path';
import fs from 'fs-extra';
import {optimize} from 'svgo';
import {iconMapping} from './mapping';

const START_CODEPOINT = 0xE000;
const FONT_NAME = 'matheme-product-icons';
const ROOT = path.resolve(__dirname, '../..');
const OUT_DIR = path.join(ROOT, 'producticons');
const CUSTOM_DIR = path.join(OUT_DIR, 'custom');
const TEMP_DIR = path.join(ROOT, '.temp-icons');

function loadIconifySvg(iconRef: string): string | null {
  const [setId, iconName] = iconRef.split(':');
  if (!setId || !iconName) {
    return null;
  }

  const jsonPath = path.join(ROOT, 'node_modules/@iconify/json/json', `${setId}.json`);
  if (!fs.existsSync(jsonPath)) {
    console.error(`  Icon set not found: ${setId}`);
    return null;
  }

  const json = fs.readJsonSync(jsonPath);
  const icon = json.icons[iconName];
  if (!icon) {
    console.error(`  Icon not found: ${iconRef}`);
    return null;
  }

  const width = icon.width || json.width || 24;
  const height = icon.height || json.height || 24;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">${icon.body}</svg>`;
}

function optimizeSvg(svg: string): string {
  const result = optimize(svg, {
    plugins: [
      'preset-default',
      {
        name: 'removeAttrs',
        params: {attrs: ['fill']},
      },
      {
        name: 'addAttributesToSVGElement',
        params: {attributes: [{fill: 'currentColor'}]},
      },
    ],
  });
  return result.data;
}

function formatUnicode(codepoint: number): string {
  return `\\${codepoint.toString(16)}`;
}

async function build() {
  console.log('Building product icon font...');

  // @ts-expect-error - webfont has no types
  const {webfont} = await import('webfont');

  fs.removeSync(TEMP_DIR);
  fs.ensureDirSync(TEMP_DIR);

  const entries = Object.entries(iconMapping) as [string, string][];

  // Deduplicate: many codicon IDs map to the same source icon.
  const iconRefToCodepoint = new Map<string, number>();
  const codiconToCodepoint = new Map<string, number>();
  const glyphFiles: string[] = [];
  let nextCodepoint = START_CODEPOINT;

  for (const [codiconId, iconRef] of entries) {
    const customPath = path.join(CUSTOM_DIR, `${codiconId}.svg`);
    const isCustom = fs.existsSync(customPath);
    const key = isCustom ? `custom:${codiconId}` : iconRef;

    if (iconRefToCodepoint.has(key)) {
      codiconToCodepoint.set(codiconId, iconRefToCodepoint.get(key)!);
      continue;
    }

    let svg: string | null = null;
    if (isCustom) {
      svg = fs.readFileSync(customPath, 'utf-8');
    } else {
      svg = loadIconifySvg(iconRef);
    }

    if (!svg) {
      continue;
    }

    const optimized = optimizeSvg(svg);
    const codepoint = nextCodepoint++;
    const safeName = codiconId.replace(/[^a-z0-9-]/g, '-');
    const outPath = path.join(TEMP_DIR, `${safeName}.svg`);
    fs.writeFileSync(outPath, optimized);
    glyphFiles.push(outPath);

    iconRefToCodepoint.set(key, codepoint);
    codiconToCodepoint.set(codiconId, codepoint);
  }

  // Map remaining duplicates
  for (const [codiconId, iconRef] of entries) {
    if (!codiconToCodepoint.has(codiconId) && iconRefToCodepoint.has(iconRef)) {
      codiconToCodepoint.set(codiconId, iconRefToCodepoint.get(iconRef)!);
    }
  }

  const uniqueCount = iconRefToCodepoint.size;
  console.log(`  ${codiconToCodepoint.size} codicon IDs, ${uniqueCount} unique glyphs`);

  // Use webfont package (same approach as VS Code official sample)
  console.log('  Generating WOFF with webfont...');
  const result = await webfont({
    files: glyphFiles,
    formats: ['woff'],
    startUnicode: START_CODEPOINT,
    fontName: FONT_NAME,
    normalize: true,
    sort: false,
  });

  const woffPath = path.join(OUT_DIR, `${FONT_NAME}.woff`);
  fs.writeFileSync(woffPath, result.woff, 'binary');
  console.log(`  Wrote ${FONT_NAME}.woff (${fs.statSync(woffPath).size} bytes)`);

  // Remove old TTF if it exists
  const oldTtf = path.join(OUT_DIR, `${FONT_NAME}.ttf`);
  if (fs.existsSync(oldTtf)) {
    fs.removeSync(oldTtf);
  }

  // Write theme JSON
  const themeJson = {
    fonts: [
      {
        id: FONT_NAME,
        src: [{path: `./${FONT_NAME}.woff`, format: 'woff'}],
        weight: 'normal',
        style: 'normal',
      },
    ],
    iconDefinitions: Object.fromEntries(
      [...codiconToCodepoint.entries()].map(([id, cp]) => [
        id,
        {fontCharacter: formatUnicode(cp)},
      ]),
    ),
  };

  fs.writeJsonSync(
    path.join(OUT_DIR, 'matheme-product-icon-theme.json'),
    themeJson,
    {spaces: 2},
  );

  fs.removeSync(TEMP_DIR);

  console.log(`  Wrote matheme-product-icon-theme.json (${codiconToCodepoint.size} definitions)`);
  console.log('Done.');
}

build().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
