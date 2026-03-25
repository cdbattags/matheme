import * as fs from 'fs-extra';
import * as path from 'path';
import {palettes} from './palettes';
import {compileTheme, CompileOptions} from './compile';

const BUILD_FOLDER = path.resolve(__dirname, '../../build/themes');

interface GenerateOptions {
  outDir?: string;
  tier?: 1 | 2 | 3;
  variants?: string[];
}

export async function generateAll(options: GenerateOptions = {}): Promise<void> {
  const outDir = options.outDir ?? BUILD_FOLDER;
  const tier = options.tier ?? 1;
  const selectedVariants = options.variants ?? Object.keys(palettes);

  await fs.mkdirp(outDir);

  for (const variant of selectedVariants) {
    const palette = palettes[variant];
    if (!palette) {
      console.error(`Unknown variant: ${variant}`);
      continue;
    }

    const compileOpts: CompileOptions = {tier};

    const theme = compileTheme(palette, {...compileOpts, isHC: false});
    const themePath = path.join(outDir, `${theme.name}.json`);
    await fs.writeJSON(themePath, theme, {spaces: 2});
    console.log(`  wrote ${theme.name}`);

    const hcTheme = compileTheme(palette, {...compileOpts, isHC: true});
    const hcPath = path.join(outDir, `${hcTheme.name}.json`);
    await fs.writeJSON(hcPath, hcTheme, {spaces: 2});
    console.log(`  wrote ${hcTheme.name}`);
  }
}
