/**
 * Appends a hex alpha byte to a 6-digit hex color.
 * opacity('#FF5370', 0x40) => '#FF537040'
 * opacity('#FF5370', '40') => '#FF537040'
 */
export function opacity(hex: string, alpha: number | string): string {
  const base = hex.slice(0, 7);
  if (typeof alpha === 'string') {
    return base + alpha;
  }
  return base + alpha.toString(16).padStart(2, '0');
}

function parseHex(hex: string): { r: number; g: number; b: number } {
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function srgbToLinear(c: number): number {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

/**
 * Returns relative luminance (0-1) per WCAG 2.0.
 */
export function luminance(hex: string): number {
  const { r, g, b } = parseHex(hex);
  return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);
}

/**
 * Returns black or white depending on which has better contrast against the given color.
 */
export function contrastFg(hex: string): string {
  return luminance(hex) > 0.179 ? '#000000' : '#ffffff';
}
