import {SemanticPalette, TokenColorRule} from './types';

export function getTokenColors(s: SemanticPalette): Array<{settings: {background: string; foreground: string}} | TokenColorRule> {
  const jsonBase = 'source.json meta.structure.dictionary.json';
  const jsonNest = ' meta.structure.dictionary.value.json meta.structure.dictionary.json';
  const jsonProp = ' support.type.property-name.json';

  function jsonScope(depth: number): string {
    return jsonBase + jsonNest.repeat(depth) + jsonProp;
  }

  return [
    {
      settings: {
        background: s.canvas,
        foreground: s.white,
      },
    },
    {
      name: 'Comment',
      scope: ['comment', 'punctuation.definition.comment', 'string.quoted.docstring'],
      settings: {fontStyle: 'italic', foreground: s.fgMuted},
    },
    {
      name: 'Variables',
      scope: ['variable', 'string constant.other.placeholder'],
      settings: {foreground: s.fg},
    },
    {
      name: 'PHP Constants',
      scope: ['constant.other.php'],
      settings: {foreground: s.yellow},
    },
    {
      name: 'Colors',
      scope: ['constant.other.color'],
      settings: {foreground: s.white},
    },
    {
      name: 'Invalid',
      scope: ['invalid', 'invalid.illegal'],
      settings: {foreground: s.danger},
    },
    {
      name: 'Invalid deprecated',
      scope: ['invalid.deprecated'],
      settings: {foreground: s.purple},
    },
    {
      name: 'Keyword, Storage',
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: {foreground: s.purple},
    },
    {
      name: 'Keyword, Storage',
      scope: ['Keyword', 'Storage'],
      settings: {fontStyle: 'italic'},
    },
    {
      name: 'Operator, Misc',
      scope: [
        'keyword.control', 'constant.other.color', 'punctuation.definition.tag',
        'punctuation', 'punctuation.separator.inheritance.php',
        'punctuation.definition.tag.html', 'punctuation.definition.tag.begin.html',
        'punctuation.definition.tag.end.html', 'punctuation.section.embedded',
        'keyword.other.template', 'keyword.other.substitution',
      ],
      settings: {foreground: s.cyan},
    },
    {
      name: 'Keyword Control',
      scope: ['keyword.control'],
      settings: {fontStyle: 'italic'},
    },
    {
      name: 'Tag',
      scope: ['entity.name.tag', 'meta.tag.sgml', 'markup.deleted.git_gutter'],
      settings: {foreground: s.red},
    },
    {
      name: 'Function, Special Method',
      scope: ['entity.name.function', 'variable.function', 'support.function', 'keyword.other.special-method'],
      settings: {foreground: s.blue},
    },
    {
      name: 'C-related Block Level Variables',
      scope: ['source.cpp meta.block variable.other'],
      settings: {foreground: s.red},
    },
    {
      name: 'Variables constant',
      scope: ['variable.other.constant'],
      settings: {foreground: s.red},
    },
    {
      name: 'Other Variable, String Link',
      scope: ['support.other.variable', 'string.other.link'],
      settings: {foreground: s.red},
    },
    {
      name: 'Number, Constant, Function Argument, Tag Attribute, Embedded',
      scope: [
        'constant.numeric', 'constant.language', 'support.constant',
        'constant.character', 'constant.escape', 'keyword.other.unit', 'keyword.other',
      ],
      settings: {foreground: s.orange},
    },
    {
      name: 'Number, Constant, Function Argument, Tag Attribute, Embedded',
      scope: ['variable.parameter.function.language.special', 'variable.parameter'],
      settings: {foreground: s.danger},
    },
    {
      name: 'String, Symbols, Inherited Class, Markup Heading',
      scope: [
        'string', 'constant.other.symbol', 'constant.other.key',
        'entity.other.inherited-class', 'markup.heading', 'markup.inserted.git_gutter',
        'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
      ],
      settings: {fontStyle: 'normal', foreground: s.green},
    },
    {
      name: 'Class, Support',
      scope: [
        'entity.name', 'support.type', 'support.class',
        'support.orther.namespace.use.php', 'meta.use.php', 'support.other.namespace.php',
        'markup.changed.git_gutter', 'support.type.sys-types',
      ],
      settings: {foreground: s.yellow},
    },
    {
      name: 'Entity Types',
      scope: ['support.type'],
      settings: {foreground: s.paleblue},
    },
    {
      name: 'CSS Class and Support',
      scope: [
        'source.css support.type.property-name', 'source.sass support.type.property-name',
        'source.scss support.type.property-name', 'source.less support.type.property-name',
        'source.stylus support.type.property-name', 'source.postcss support.type.property-name',
      ],
      settings: {foreground: s.paleblue},
    },
    {
      name: 'Sub-methods',
      scope: ['entity.name.module.js', 'variable.import.parameter.js', 'variable.other.class.js'],
      settings: {foreground: s.danger},
    },
    {
      name: 'Language methods',
      scope: ['variable.language'],
      settings: {fontStyle: 'italic', foreground: s.danger},
    },
    {
      name: 'entity.name.method.js',
      scope: ['entity.name.method.js'],
      settings: {fontStyle: 'italic', foreground: s.blue},
    },
    {
      name: 'meta.method.js',
      scope: ['meta.class-method.js entity.name.function.js', 'variable.function.constructor'],
      settings: {foreground: s.blue},
    },
    {
      name: 'Attributes',
      scope: ['entity.other.attribute-name'],
      settings: {fontStyle: 'italic', foreground: s.purple},
    },
    {
      name: 'CSS Classes',
      scope: ['entity.other.attribute-name.class'],
      settings: {foreground: s.yellow},
    },
    {
      name: "CSS ID's",
      scope: ['source.sass keyword.control'],
      settings: {foreground: s.blue},
    },
    {
      name: 'Inserted',
      scope: ['markup.inserted'],
      settings: {foreground: s.green},
    },
    {
      name: 'Deleted',
      scope: ['markup.deleted'],
      settings: {foreground: s.danger},
    },
    {
      name: 'Changed',
      scope: ['markup.changed'],
      settings: {foreground: s.purple},
    },
    {
      name: 'Regular Expressions',
      scope: ['string.regexp'],
      settings: {foreground: s.cyan},
    },
    {
      name: 'Escape Characters',
      scope: ['constant.character.escape'],
      settings: {foreground: s.cyan},
    },
    {
      name: 'URL',
      scope: ['*url*', '*link*', '*uri*'],
      settings: {fontStyle: 'underline'},
    },
    {
      name: 'Decorators',
      scope: ['tag.decorator.js entity.name.tag.js', 'tag.decorator.js punctuation.definition.tag.js'],
      settings: {fontStyle: 'italic', foreground: s.blue},
    },
    {
      name: 'ES7 Bind Operator',
      scope: ['source.js constant.other.object.key.js string.unquoted.label.js'],
      settings: {fontStyle: 'italic', foreground: s.danger},
    },
    {
      name: 'JSON Key - Level 0',
      scope: [jsonScope(0)],
      settings: {foreground: s.purple},
    },
    {
      name: 'JSON Key - Level 1',
      scope: [jsonScope(1)],
      settings: {foreground: s.yellow},
    },
    {
      name: 'JSON Key - Level 2',
      scope: [jsonScope(2)],
      settings: {foreground: s.orange},
    },
    {
      name: 'JSON Key - Level 3',
      scope: [jsonScope(3)],
      settings: {foreground: s.danger},
    },
    {
      name: 'JSON Key - Level 4',
      scope: [jsonScope(4)],
      settings: {foreground: s.brown},
    },
    {
      name: 'JSON Key - Level 5',
      scope: [jsonScope(5)],
      settings: {foreground: s.blue},
    },
    {
      name: 'JSON Key - Level 6',
      scope: [jsonScope(6)],
      settings: {foreground: s.red},
    },
    {
      name: 'JSON Key - Level 7',
      scope: [jsonScope(7)],
      settings: {foreground: s.purple},
    },
    {
      name: 'JSON Key - Level 8',
      scope: [jsonScope(8)],
      settings: {foreground: s.green},
    },
    {
      name: 'Markdown - Plain',
      scope: ['text.html.markdown', 'punctuation.definition.list_item.markdown'],
      settings: {foreground: s.fg},
    },
    {
      name: 'Markdown - Markup Raw Inline',
      scope: ['text.html.markdown markup.inline.raw.markdown'],
      settings: {foreground: s.purple},
    },
    {
      name: 'Markdown - Markup Raw Inline Punctuation',
      scope: ['text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown'],
      settings: {foreground: s.invisibles},
    },
    {
      name: 'Markdown - Line Break',
      scope: ['text.html.markdown meta.dummy.line-break'],
      settings: {foreground: ''},
    },
    {
      name: 'Markdown - Heading',
      scope: ['markdown.heading', 'markup.heading | markup.heading entity.name', 'markup.heading.markdown punctuation.definition.heading.markdown'],
      settings: {foreground: s.green},
    },
    {
      name: 'Markup - Italic',
      scope: ['markup.italic'],
      settings: {fontStyle: 'italic', foreground: s.red},
    },
    {
      name: 'Markup - Bold',
      scope: ['markup.bold', 'markup.bold string'],
      settings: {fontStyle: 'bold', foreground: s.red},
    },
    {
      name: 'Markup - Bold-Italic',
      scope: [
        'markup.bold markup.italic', 'markup.italic markup.bold', 'markup.quote markup.bold',
        'markup.bold markup.italic string', 'markup.italic markup.bold string', 'markup.quote markup.bold string',
      ],
      settings: {fontStyle: 'bold', foreground: s.red},
    },
    {
      name: 'Markup - Underline',
      scope: ['markup.underline'],
      settings: {fontStyle: 'underline', foreground: s.orange},
    },
    {
      name: 'Markup - Strike',
      scope: ['markup.strike'],
      settings: {fontStyle: 'strike', foreground: ''},
    },
    {
      name: 'Markdown - Blockquote',
      scope: ['markup.quote punctuation.definition.blockquote.markdown'],
      settings: {foreground: s.invisibles},
    },
    {
      name: 'Markup - Quote',
      scope: ['markup.quote'],
      settings: {fontStyle: 'italic', foreground: ''},
    },
    {
      name: 'Markdown - Link',
      scope: ['string.other.link.title.markdown'],
      settings: {foreground: s.blue},
    },
    {
      name: 'Markdown - Link Description',
      scope: ['string.other.link.description.title.markdown'],
      settings: {foreground: s.purple},
    },
    {
      name: 'Markdown - Link Anchor',
      scope: ['constant.other.reference.link.markdown'],
      settings: {foreground: s.yellow},
    },
    {
      name: 'Markup - Raw Block',
      scope: ['markup.raw.block'],
      settings: {foreground: s.purple},
    },
    {
      name: 'Markdown - Fenced Bode Block Variable',
      scope: ['markup.fenced_code.block.markdown', 'markup.inline.raw.string.markdown'],
      settings: {foreground: s.fg + '90'},
    },
    {
      name: 'Markdown - Fenced Language',
      scope: ['variable.language.fenced.markdown'],
      settings: {foreground: s.invisibles},
    },
    {
      name: 'Markdown - Separator',
      scope: ['meta.separator'],
      settings: {fontStyle: 'bold', foreground: s.invisibles},
    },
    {
      name: 'Markup - Table',
      scope: ['markup.table'],
      settings: {foreground: s.fg},
    },
  ];
}
