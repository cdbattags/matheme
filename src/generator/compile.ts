import {RawPalette, ThemeOutput} from './types';
import {buildSemantic} from './semantic';
import {buildDerived} from './derived';
import {getTokenColors} from './token-colors';
import {getUIColors} from './ui-colors';
import {getSemanticTokenColors} from './semantic-tokens';

export interface CompileOptions {
  isHC?: boolean;
  tier?: 1 | 2 | 3;
}

function buildThemeName(palette: RawPalette, isHC: boolean): string {
  if (isHC) {
    return palette.name + '-High-Contrast';
  }
  return palette.name;
}

export function compileTheme(palette: RawPalette, options: CompileOptions = {}): ThemeOutput {
  const isHC = options.isHC ?? false;
  const tier = options.tier ?? 3;

  const semantic = buildSemantic(palette, isHC);
  const derived = buildDerived(semantic, isHC);

  const name = buildThemeName(palette, isHC);
  const tokenColors = getTokenColors(semantic);
  const colors = getUIColors(semantic, derived, tier);
  const semanticTokenColors = getSemanticTokenColors(semantic);

  return {
    name,
    type: palette.type,
    semanticHighlighting: true,
    semanticTokenColors,
    tokenColors,
    colors,
  };
}
