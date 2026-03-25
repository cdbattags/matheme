export interface RawPalette {
  name: string;
  variant: string;
  type: 'dark' | 'light';

  background: string;
  foreground: string;
  inputForeground: string;
  comments: string;
  sidebarForeground: string;
  statusbarForeground: string;
  lineNumbers: string;
  guides: string;
  inputBackground: string;
  listHoverForeground: string;
  highlightBase: string;

  accent: string;
  caret: string;
  findHighlight: string;

  selectionBase: string;
  selectionAlpha: string;
  buttonBase: string;
  buttonAlpha: string;

  danger: string;
  warning: string;
  info: string;
  success: string;

  red: string;
  orange: string;
  yellow: string;
  green: string;
  cyan: string;
  blue: string;
  paleblue: string;
  purple: string;
  brown: string;
  magenta: string;
  invisibles: string;

  hc: {
    backgroundAlt: string;
    sidebarForeground: string;
    chromeBorderBase: string;
    comments?: string;
  };
}

export interface SemanticPalette {
  accent: string;
  danger: string;
  warning: string;
  info: string;
  success: string;

  fg: string;
  fgInput: string;
  fgMuted: string;
  fgSidebar: string;
  fgStatusbar: string;
  fgActive: string;
  fgListHover: string;

  canvas: string;
  canvasChrome: string;
  canvasInput: string;
  highlightBase: string;

  border: string;
  chromeBorder: string;
  guides: string;
  lineNumbers: string;
  caret: string;
  findHighlight: string;

  selectionBase: string;
  selectionAlpha: string;
  buttonBase: string;
  buttonAlpha: string;

  red: string;
  orange: string;
  yellow: string;
  green: string;
  cyan: string;
  blue: string;
  paleblue: string;
  purple: string;
  brown: string;
  magenta: string;
  invisibles: string;

  white: string;
  black: string;
  type: 'dark' | 'light';
}

export interface DerivedColors {
  accentAlpha20: string;
  accentAlpha40: string;
  selectionBg: string;
  buttonBg: string;

  fgAlpha05: string;
  fgAlpha10: string;
  fgAlpha20: string;
  fgAlpha30: string;
  fgAlpha40: string;
  fgAlpha60: string;
  fgAlpha90: string;

  dangerAlpha10: string;
  dangerAlpha15: string;
  dangerAlpha20: string;
  dangerAlpha40: string;
  dangerAlpha50: string;
  dangerAlpha60: string;
  dangerAlpha70: string;
  dangerAlpha90: string;

  infoAlpha40: string;
  infoAlpha50: string;
  infoAlpha60: string;
  infoAlpha70: string;
  infoAlpha90: string;

  warningAlpha40: string;
  warningAlpha50: string;
  warningAlpha70: string;
  warningAlpha90: string;

  successAlpha10: string;
  successAlpha15: string;
  successAlpha60: string;
  successAlpha90: string;

  canvasTransparent: string;
  shadow: string;
  blackAlpha20: string;
  blackAlpha30: string;
  blackAlpha50: string;
  blackAlpha60: string;

  whiteAlpha00: string;
  whiteAlpha10: string;
  whiteAlpha30: string;
  whiteAlpha50: string;

  chromeBorder: string;
  guidesAlpha70: string;

  sidebarFgAlpha70: string;
  sidebarFgAlpha90: string;

  commentsAlpha20: string;

  lineHighlight: string;
  selectionHighlight: string;
  matchHighlightBg: string;
  matchHighlightBorder: string;

  peekMatchHighlight: string;

  findMatchBg: string;
  findMatchHighlightBg: string;

  highlightBg30: string;
  highlightBg50: string;

  fgOnAccent: string;
  debugFg: string;
}

export interface ThemeContext {
  palette: RawPalette;
  semantic: SemanticPalette;
  derived: DerivedColors;
  isHC: boolean;
}

export interface TokenColorRule {
  name: string;
  scope: string[];
  settings: {
    foreground?: string;
    fontStyle?: string;
  };
}

export interface ThemeOutput {
  name: string;
  type: 'dark' | 'light';
  semanticHighlighting: boolean;
  semanticTokenColors: Record<string, string | { foreground: string; fontStyle?: string }>;
  tokenColors: Array<{ settings: { background: string; foreground: string } } | TokenColorRule>;
  colors: Record<string, string>;
}
