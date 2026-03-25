import {
  window,
  workspace,
  TextEditorDecorationType,
  Range,
  Position,
  Disposable,
} from 'vscode';

const DIM_OPACITY = '0.5';

export class ScopeDimmer implements Disposable {
  private dimDecoration: TextEditorDecorationType;
  private disposables: Disposable[] = [];
  private updateTimeout: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    this.dimDecoration = window.createTextEditorDecorationType({
      opacity: DIM_OPACITY,
    });

    this.disposables.push(
      window.onDidChangeTextEditorSelection(() => this.scheduleUpdate()),
      window.onDidChangeActiveTextEditor(editor => {
        if (editor) {
          this.scheduleUpdate();
        }
      }),
      workspace.onDidChangeTextDocument(event => {
        const editor = window.activeTextEditor;
        if (editor && event.document === editor.document) {
          this.scheduleUpdate();
        }
      }),
    );

    this.scheduleUpdate();
  }

  private scheduleUpdate(): void {
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }
    this.updateTimeout = setTimeout(() => this.update(), 150);
  }

  private update(): void {
    const editor = window.activeTextEditor;
    if (!editor) {
      return;
    }

    const document = editor.document;
    const text = document.getText();

    const scopeRange = this.findEnclosingScope(text, document.offsetAt(editor.selection.active));

    if (!scopeRange) {
      editor.setDecorations(this.dimDecoration, []);
      return;
    }

    const scopeStart = document.positionAt(scopeRange.start);
    const scopeEnd = document.positionAt(scopeRange.end);

    const dimRanges: Range[] = [];

    if (scopeStart.line > 0) {
      dimRanges.push(new Range(new Position(0, 0), new Position(scopeStart.line, 0)));
    }

    const lastLine = document.lineCount - 1;
    if (scopeEnd.line < lastLine) {
      dimRanges.push(new Range(
        new Position(scopeEnd.line + 1, 0),
        new Position(lastLine, document.lineAt(lastLine).text.length),
      ));
    }

    editor.setDecorations(this.dimDecoration, dimRanges);
  }

  private findEnclosingScope(text: string, offset: number): {start: number; end: number} | null {
    let depth = 0;
    let scopeStart = -1;

    for (let i = offset; i >= 0; i--) {
      if (text[i] === '}') {
        depth++;
      }
      if (text[i] === '{') {
        if (depth === 0) {
          scopeStart = i;
          break;
        }
        depth--;
      }
    }

    if (scopeStart === -1) {
      return null;
    }

    depth = 0;
    for (let i = scopeStart; i < text.length; i++) {
      if (text[i] === '{') {
        depth++;
      }
      if (text[i] === '}') {
        depth--;
        if (depth === 0) {
          const lineStart = text.lastIndexOf('\n', scopeStart - 1) + 1;
          return {start: lineStart, end: i + 1};
        }
      }
    }

    return null;
  }

  dispose(): void {
    this.dimDecoration.dispose();
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }
    for (const d of this.disposables) {
      d.dispose();
    }
  }
}
