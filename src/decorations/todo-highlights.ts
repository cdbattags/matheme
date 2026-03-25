import {
  window,
  workspace,
  TextEditor,
  TextEditorDecorationType,
  DecorationRenderOptions,
  Range,
  Disposable,
} from 'vscode';

interface HighlightPattern {
  regex: RegExp;
  decoration: TextEditorDecorationType;
}

function createDecoration(options: DecorationRenderOptions): TextEditorDecorationType {
  return window.createTextEditorDecorationType(options);
}

const PATTERNS: Array<{keyword: string; options: DecorationRenderOptions}> = [
  {
    keyword: 'TODO',
    options: {
      backgroundColor: 'rgba(255, 200, 100, 0.15)',
      borderRadius: '3px',
      overviewRulerColor: '#FFCB6B',
      after: {contentText: ' ⬕', color: '#FFCB6B80'},
    },
  },
  {
    keyword: 'FIXME',
    options: {
      backgroundColor: 'rgba(255, 83, 112, 0.15)',
      borderRadius: '3px',
      overviewRulerColor: '#FF5370',
      after: {contentText: ' ⚠', color: '#FF537080'},
    },
  },
  {
    keyword: 'HACK',
    options: {
      backgroundColor: 'rgba(199, 146, 234, 0.15)',
      borderRadius: '3px',
      overviewRulerColor: '#C792EA',
      after: {contentText: ' ☠', color: '#C792EA80'},
    },
  },
  {
    keyword: 'NOTE',
    options: {
      backgroundColor: 'rgba(130, 170, 255, 0.10)',
      borderRadius: '3px',
      overviewRulerColor: '#82AAFF',
    },
  },
  {
    keyword: 'BUG',
    options: {
      backgroundColor: 'rgba(247, 140, 108, 0.15)',
      borderRadius: '3px',
      overviewRulerColor: '#F78C6C',
      after: {contentText: ' 🪲', color: '#F78C6C80'},
    },
  },
];

export class TodoHighlighter implements Disposable {
  private patterns: HighlightPattern[] = [];
  private disposables: Disposable[] = [];

  constructor() {
    this.patterns = PATTERNS.map(p => ({
      regex: new RegExp(`\\b(${p.keyword})\\b[:!]?`, 'gi'),
      decoration: createDecoration(p.options),
    }));

    this.disposables.push(
      window.onDidChangeActiveTextEditor(editor => {
        if (editor) {
          this.update(editor);
        }
      }),
      workspace.onDidChangeTextDocument(event => {
        const editor = window.activeTextEditor;
        if (editor && event.document === editor.document) {
          this.update(editor);
        }
      }),
    );

    if (window.activeTextEditor) {
      this.update(window.activeTextEditor);
    }
  }

  update(editor: TextEditor): void {
    const text = editor.document.getText();

    for (const pattern of this.patterns) {
      const ranges: Range[] = [];
      let match: RegExpExecArray | null;

      pattern.regex.lastIndex = 0;
      while ((match = pattern.regex.exec(text)) !== null) {
        const startPos = editor.document.positionAt(match.index);
        const endPos = editor.document.positionAt(match.index + match[0].length);
        ranges.push(new Range(startPos, endPos));
      }

      editor.setDecorations(pattern.decoration, ranges);
    }
  }

  dispose(): void {
    for (const pattern of this.patterns) {
      pattern.decoration.dispose();
    }
    for (const d of this.disposables) {
      d.dispose();
    }
  }
}
