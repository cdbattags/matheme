import {SemanticPalette, DerivedColors} from './types';
import {opacity, contrastFg} from './color';

export function buildDerived(s: SemanticPalette, isHC: boolean): DerivedColors {
  const isDark = s.type === 'dark';

  const selectionBg = s.selectionBase + s.selectionAlpha;
  const buttonBg = s.buttonBase + s.buttonAlpha;

  const findMatchHighlightBorderAlpha = isHC ? (isDark ? '50' : '60') : '30';
  const matchHighlightBorder = isDark
    ? '#ffffff' + findMatchHighlightBorderAlpha
    : '#000000' + findMatchHighlightBorderAlpha;

  return {
    accentAlpha20: opacity(s.accent, '20'),
    accentAlpha40: opacity(s.accent, '40'),
    selectionBg,
    buttonBg,

    fgAlpha05: opacity(s.fg, '05'),
    fgAlpha10: opacity(s.fg, '10'),
    fgAlpha20: opacity(s.fg, '20'),
    fgAlpha30: opacity(s.fg, '30'),
    fgAlpha40: opacity(s.fg, '40'),
    fgAlpha60: opacity(s.fg, '60'),
    fgAlpha90: opacity(s.fg, '90'),

    dangerAlpha10: opacity(s.danger, '10'),
    dangerAlpha15: opacity(s.danger, '15'),
    dangerAlpha20: opacity(s.danger, '20'),
    dangerAlpha40: opacity(s.danger, '40'),
    dangerAlpha50: opacity(s.danger, '50'),
    dangerAlpha60: opacity(s.danger, '60'),
    dangerAlpha70: opacity(s.danger, '70'),
    dangerAlpha90: opacity(s.danger, '90'),

    infoAlpha40: opacity(s.info, '40'),
    infoAlpha50: opacity(s.info, '50'),
    infoAlpha60: opacity(s.info, '60'),
    infoAlpha70: opacity(s.info, '70'),
    infoAlpha90: opacity(s.info, '90'),

    warningAlpha40: opacity(s.warning, '40'),
    warningAlpha50: opacity(s.warning, '50'),
    warningAlpha70: opacity(s.warning, '70'),
    warningAlpha90: opacity(s.warning, '90'),

    successAlpha10: opacity(s.success, '10'),
    successAlpha15: opacity(s.success, '15'),
    successAlpha60: opacity(s.success, '60'),
    successAlpha90: opacity(s.success, '90'),

    canvasTransparent: opacity(s.canvas, '00'),
    shadow: isDark ? '#00000030' : '#00000020',
    blackAlpha20: '#00000020',
    blackAlpha30: '#00000030',
    blackAlpha50: '#00000050',
    blackAlpha60: '#00000060',

    whiteAlpha00: '#FFFFFF00',
    whiteAlpha10: '#FFFFFF10',
    whiteAlpha30: '#ffffff30',
    whiteAlpha50: '#ffffff50',

    chromeBorder: s.chromeBorder,
    guidesAlpha70: opacity(s.guides, '70'),

    sidebarFgAlpha70: opacity(s.fgSidebar, '70'),
    sidebarFgAlpha90: opacity(s.fgSidebar, '90'),

    commentsAlpha20: opacity(s.fgMuted, '20'),

    lineHighlight: isDark
      ? '#00000050'
      : opacity(s.highlightBase, '50'),
    selectionHighlight: isDark
      ? opacity(s.findHighlight, '20')
      : opacity(s.caret, '20'),
    matchHighlightBg: isDark ? '#00000050' : '#00000010',
    matchHighlightBorder,

    peekMatchHighlight: selectionBg,

    findMatchBg: isDark ? '#000000' : (isHC ? '#00000040' : '#00000020'),
    findMatchHighlightBg: isDark ? '#00000050' : '#00000010',

    highlightBg30: opacity(s.highlightBase, '30'),
    highlightBg50: opacity(s.highlightBase, '50'),

    fgOnAccent: contrastFg(s.accent),
    debugFg: s.white,
  };
}
