import {workspace, Disposable} from 'vscode';
import {TodoHighlighter} from './todo-highlights';
import {ScopeDimmer} from './scope-dimming';

export class DecorationManager implements Disposable {
  private todoHighlighter: TodoHighlighter | undefined;
  private scopeDimmer: ScopeDimmer | undefined;
  private disposables: Disposable[] = [];

  constructor() {
    this.applySettings();

    this.disposables.push(
      workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration('materialTheme.decorations')) {
          this.applySettings();
        }
      }),
    );
  }

  private applySettings(): void {
    const config = workspace.getConfiguration('materialTheme.decorations');
    const todoEnabled = config.get<boolean>('todoHighlights', false);
    const scopeEnabled = config.get<boolean>('scopeDimming', false);

    if (todoEnabled && !this.todoHighlighter) {
      this.todoHighlighter = new TodoHighlighter();
    } else if (!todoEnabled && this.todoHighlighter) {
      this.todoHighlighter.dispose();
      this.todoHighlighter = undefined;
    }

    if (scopeEnabled && !this.scopeDimmer) {
      this.scopeDimmer = new ScopeDimmer();
    } else if (!scopeEnabled && this.scopeDimmer) {
      this.scopeDimmer.dispose();
      this.scopeDimmer = undefined;
    }
  }

  dispose(): void {
    this.todoHighlighter?.dispose();
    this.scopeDimmer?.dispose();
    for (const d of this.disposables) {
      d.dispose();
    }
  }
}
