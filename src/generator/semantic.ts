import {RawPalette, SemanticPalette} from './types';

export function buildSemantic(p: RawPalette, isHC: boolean): SemanticPalette {
  const isDark = p.type === 'dark';
  const sidebarFg = isHC ? p.hc.sidebarForeground : p.sidebarForeground;
  const comments = isHC && p.hc.comments ? p.hc.comments : p.comments;

  const canvas = isHC && !isDark ? p.hc.backgroundAlt : p.background;
  const canvasChrome = isHC && isDark ? p.hc.backgroundAlt : p.background;

  const chromeBorderBase = isHC ? p.hc.chromeBorderBase : p.background;
  const chromeBorder = chromeBorderBase + '60';

  return {
    accent: p.accent,
    danger: p.danger,
    warning: p.warning,
    info: p.info,
    success: p.success,

    fg: p.foreground,
    fgInput: p.inputForeground,
    fgMuted: comments,
    fgSidebar: sidebarFg,
    fgStatusbar: isHC ? p.statusbarForeground : p.statusbarForeground,
    fgActive: isDark ? '#FFFFFF' : '#000000',
    fgListHover: p.listHoverForeground,

    canvas,
    canvasChrome,
    canvasInput: p.inputBackground,
    highlightBase: p.highlightBase,

    border: isDark ? '#FFFFFF10' : '#00000010',
    chromeBorder,
    guides: p.guides,
    lineNumbers: p.lineNumbers,
    caret: p.caret,
    findHighlight: p.findHighlight,

    selectionBase: p.selectionBase,
    selectionAlpha: p.selectionAlpha,
    buttonBase: p.buttonBase,
    buttonAlpha: p.buttonAlpha,

    red: p.red,
    orange: p.orange,
    yellow: p.yellow,
    green: p.green,
    cyan: p.cyan,
    blue: p.blue,
    paleblue: p.paleblue,
    purple: p.purple,
    brown: p.brown,
    magenta: p.magenta,
    invisibles: p.invisibles,

    white: isDark ? '#ffffff' : '#FFFFFF',
    black: '#000000',
    type: p.type,
  };
}
