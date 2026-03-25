import path from 'node:path';
import fs from 'fs-extra';
import {optimize} from 'svgo';
import {fileIconMapping, folderIconMapping} from './mapping';
import {brandColors} from './brand-colors';

const ROOT = path.resolve(__dirname, '../..');
const OUT_DIR = path.join(ROOT, 'fileicons');
const ICONS_DIR = path.join(OUT_DIR, 'icons');
const ICONS_MONO_DIR = path.join(OUT_DIR, 'icons-mono');
const CUSTOM_DIR = path.join(OUT_DIR, 'custom');

const MONO_ACCENT = '#A0A0B8';

const CATPPUCCIN_PALETTE: Record<string, string> = {
  '#f4dbd6': 'rosewater',
  '#f0c6c6': 'flamingo',
  '#f5bde6': 'pink',
  '#c6a0f6': 'mauve',
  '#ed8796': 'red',
  '#ee99a0': 'maroon',
  '#f5a97f': 'peach',
  '#eed49f': 'yellow',
  '#a6da95': 'green',
  '#8bd5ca': 'teal',
  '#91d7e3': 'sky',
  '#7dc4e4': 'sapphire',
  '#8aadf4': 'blue',
  '#b7bdf8': 'lavender',
  '#cad3f5': 'subtext1',
  '#b8c0e0': 'subtext0',
  '#a5adcb': 'overlay2',
  '#939ab7': 'overlay1',
  '#8087a2': 'overlay0',
  '#6e738d': 'surface2',
  '#5b6078': 'surface1',
  '#494d64': 'surface0',
  '#363a4f': 'base',
  '#24273a': 'mantle',
  '#1e2030': 'crust',
};

const PALETTE_HEXES = new Set(Object.keys(CATPPUCCIN_PALETTE));

interface ThemeJson {
  hidesExplorerArrows: boolean;
  file: string;
  folder: string;
  folderExpanded: string;
  rootFolder: string;
  rootFolderExpanded: string;
  iconDefinitions: Record<string, {iconPath: string}>;
  fileExtensions: Record<string, string>;
  fileNames: Record<string, string>;
  folderNames: Record<string, string>;
  folderNamesExpanded: Record<string, string>;
  languageIds: Record<string, string>;
}

function loadIconifySvg(iconRef: string): string | null {
  const [setId, iconName] = iconRef.split(':');
  if (!setId || !iconName) {
    return null;
  }

  let jsonPath: string;
  if (setId === 'catppuccin') {
    jsonPath = path.join(ROOT, 'node_modules/@iconify-json/catppuccin/icons.json');
  } else {
    jsonPath = path.join(ROOT, 'node_modules/@iconify/json/json', `${setId}.json`);
  }

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
      'convertPathData',
      'mergePaths',
    ],
  });
  return result.data;
}

function findPaletteColors(svg: string): string[] {
  const found: string[] = [];
  const matches = svg.match(/#[0-9a-f]{6}/gi) || [];
  for (const m of matches) {
    const lower = m.toLowerCase();
    if (PALETTE_HEXES.has(lower) && !found.includes(lower)) {
      found.push(lower);
    }
  }
  return found;
}

function recolorBrand(svg: string, name: string): string {
  const brand = brandColors[name];
  if (!brand) {
    return svg;
  }

  const paletteColors = findPaletteColors(svg);
  if (paletteColors.length === 0) {
    return svg;
  }

  let result = svg;
  // Replace the first (dominant) palette color with brand primary
  result = result.replaceAll(paletteColors[0], brand.primary);

  // Replace the second palette color with brand secondary (or a lighter variant of primary)
  if (paletteColors.length >= 2) {
    const secondary = brand.secondary || lighten(brand.primary, 0.3);
    result = result.replaceAll(paletteColors[1], secondary);
  }

  return result;
}

function recolorMono(svg: string): string {
  let result = svg;
  for (const hex of PALETTE_HEXES) {
    result = result.replaceAll(hex, MONO_ACCENT);
  }
  return result;
}

function lighten(hex: string, amount: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const nr = Math.min(255, Math.round(r + (255 - r) * amount));
  const ng = Math.min(255, Math.round(g + (255 - g) * amount));
  const nb = Math.min(255, Math.round(b + (255 - b) * amount));
  return `#${nr.toString(16).padStart(2, '0')}${ng.toString(16).padStart(2, '0')}${nb.toString(16).padStart(2, '0')}`;
}

function loadSvg(name: string, iconRef: string): string | null {
  const customPath = path.join(CUSTOM_DIR, `${name}.svg`);
  if (fs.existsSync(customPath)) {
    return fs.readFileSync(customPath, 'utf-8');
  }
  return loadIconifySvg(iconRef);
}

function writeDualSvg(name: string, iconRef: string): boolean {
  const raw = loadSvg(name, iconRef);
  if (!raw) {
    return false;
  }

  const optimized = optimizeSvg(raw);

  // Brand version
  const brandSvg = recolorBrand(optimized, name);
  fs.writeFileSync(path.join(ICONS_DIR, `${name}.svg`), brandSvg);

  // Mono version
  const monoSvg = recolorMono(optimized);
  fs.writeFileSync(path.join(ICONS_MONO_DIR, `${name}.svg`), monoSvg);

  return true;
}

function buildThemeJson(iconsPrefix: string): ThemeJson {
  return {
    hidesExplorerArrows: false,
    file: '_file',
    folder: '_folder',
    folderExpanded: '_folder-open',
    rootFolder: '_root',
    rootFolderExpanded: '_root-open',
    iconDefinitions: {},
    fileExtensions: {},
    fileNames: {},
    folderNames: {},
    folderNamesExpanded: {},
    languageIds: {},
  };
}

async function build() {
  console.log('Building file icon theme...');

  fs.ensureDirSync(ICONS_DIR);
  fs.emptyDirSync(ICONS_DIR);
  fs.ensureDirSync(ICONS_MONO_DIR);
  fs.emptyDirSync(ICONS_MONO_DIR);

  const brandTheme = buildThemeJson('./icons');
  const monoTheme = buildThemeJson('./icons-mono');

  // Default icons
  const defaults = [
    {name: '_file', ref: 'catppuccin:file'},
    {name: '_folder', ref: 'catppuccin:folder'},
    {name: '_folder-open', ref: 'catppuccin:folder-open'},
    {name: '_root', ref: 'catppuccin:root'},
    {name: '_root-open', ref: 'catppuccin:root-open'},
  ];

  for (const d of defaults) {
    if (writeDualSvg(d.name, d.ref)) {
      brandTheme.iconDefinitions[d.name] = {iconPath: `./icons/${d.name}.svg`};
      monoTheme.iconDefinitions[d.name] = {iconPath: `./icons-mono/${d.name}.svg`};
    }
  }

  // File icons
  let fileCount = 0;
  for (const [name, entry] of Object.entries(fileIconMapping)) {
    if (!writeDualSvg(name, entry.iconRef)) {
      continue;
    }

    brandTheme.iconDefinitions[name] = {iconPath: `./icons/${name}.svg`};
    monoTheme.iconDefinitions[name] = {iconPath: `./icons-mono/${name}.svg`};
    fileCount++;

    if (entry.fileExtensions) {
      for (const ext of entry.fileExtensions) {
        brandTheme.fileExtensions[ext] = name;
        monoTheme.fileExtensions[ext] = name;
      }
    }

    if (entry.fileNames) {
      for (const fn of entry.fileNames) {
        brandTheme.fileNames[fn] = name;
        monoTheme.fileNames[fn] = name;
      }
    }

    if (entry.languageIds) {
      for (const lid of entry.languageIds) {
        brandTheme.languageIds[lid] = name;
        monoTheme.languageIds[lid] = name;
      }
    }
  }

  // Folder icons
  let folderCount = 0;
  for (const [name, entry] of Object.entries(folderIconMapping)) {
    const closedName = `folder-${name}`;
    const openName = `folder-${name}-open`;

    const closedOk = writeDualSvg(closedName, entry.iconRef);
    const openOk = writeDualSvg(openName, entry.iconRefOpen);

    if (!closedOk) {
      continue;
    }

    brandTheme.iconDefinitions[closedName] = {iconPath: `./icons/${closedName}.svg`};
    monoTheme.iconDefinitions[closedName] = {iconPath: `./icons-mono/${closedName}.svg`};
    if (openOk) {
      brandTheme.iconDefinitions[openName] = {iconPath: `./icons/${openName}.svg`};
      monoTheme.iconDefinitions[openName] = {iconPath: `./icons-mono/${openName}.svg`};
    }
    folderCount++;

    for (const fn of entry.folderNames) {
      brandTheme.folderNames[fn] = closedName;
      monoTheme.folderNames[fn] = closedName;
      brandTheme.folderNamesExpanded[fn] = openOk ? openName : closedName;
      monoTheme.folderNamesExpanded[fn] = openOk ? openName : closedName;
    }
  }

  // Write both theme JSONs
  fs.writeJsonSync(
    path.join(OUT_DIR, 'matheme-file-icon-theme.json'),
    brandTheme,
    {spaces: 2},
  );
  fs.writeJsonSync(
    path.join(OUT_DIR, 'matheme-file-icon-theme-mono.json'),
    monoTheme,
    {spaces: 2},
  );

  const svgCount = fs.readdirSync(ICONS_DIR).filter(f => f.endsWith('.svg')).length;
  const brandMapped = Object.keys(brandColors).filter(k => brandTheme.iconDefinitions[k]).length;
  console.log(`  ${fileCount} file icons, ${folderCount} folder icons`);
  console.log(`  ${svgCount} SVGs per variant (x2 = ${svgCount * 2} total)`);
  console.log(`  ${brandMapped} icons with brand colors applied`);
  console.log(`  ${Object.keys(brandTheme.fileExtensions).length} file extension mappings`);
  console.log(`  ${Object.keys(brandTheme.fileNames).length} file name mappings`);
  console.log(`  ${Object.keys(brandTheme.folderNames).length} folder name mappings`);
  console.log(`  ${Object.keys(brandTheme.languageIds).length} language ID mappings`);
  console.log('Done.');
}

build().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
