import {SemanticPalette} from './types';

export function getSemanticTokenColors(s: SemanticPalette): Record<string, string | {foreground: string; fontStyle?: string}> {
  return {
    'variable.readonly': s.red,
    'variable.declaration': s.fg,
    'variable.defaultLibrary': s.danger,
    'parameter': s.danger,
    'property': s.fg,
    'property.readonly': s.red,
    'property.declaration': s.fg,
    'enumMember': s.orange,
    'type': s.yellow,
    'type.defaultLibrary': s.yellow,
    'interface': s.yellow,
    'namespace': s.yellow,
    'class': s.yellow,
    'class.defaultLibrary': s.yellow,
    'function': s.blue,
    'function.declaration': s.blue,
    'function.defaultLibrary': s.blue,
    'method': s.blue,
    'method.declaration': s.blue,
    'macro': s.purple,
    'keyword': s.purple,
    '*.deprecated': {foreground: s.fgMuted, fontStyle: 'strikethrough'},
  };
}
