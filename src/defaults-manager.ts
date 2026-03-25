import {workspace, Disposable} from 'vscode';

interface DefaultsGroup {
  key: string;
  settings: Record<string, unknown>;
}

const DEFAULTS_GROUPS: DefaultsGroup[] = [
  {
    key: 'smoothAnimations',
    settings: {
      'editor.cursorBlinking': 'smooth',
      'editor.cursorSmoothCaretAnimation': 'on',
      'editor.smoothScrolling': true,
      'workbench.list.smoothScrolling': true,
      'terminal.integrated.smoothScrolling': true,
    },
  },
  {
    key: 'bracketGuides',
    settings: {
      'editor.bracketPairColorization.enabled': true,
      'editor.guides.bracketPairs': 'active',
    },
  },
  {
    key: 'minimapOff',
    settings: {
      'editor.minimap.enabled': false,
    },
  },
  {
    key: 'fontDefaults',
    settings: {
      'editor.fontLigatures': true,
      'editor.fontSize': 14,
      'editor.lineHeight': 1.6,
    },
  },
  {
    key: 'editorChrome',
    settings: {
      'editor.stickyScroll.enabled': true,
      'editor.renderWhitespace': 'selection',
      'editor.roundedSelection': true,
      'workbench.tree.indent': 16,
      'window.commandCenter': true,
    },
  },
];

export class DefaultsManager implements Disposable {
  private readonly disposables: Disposable[] = [];

  constructor() {
    this.applyAll();

    this.disposables.push(
      workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration('materialTheme.defaults')) {
          this.applyAll();
        }
      }),
    );
  }

  private applyAll(): void {
    const config = workspace.getConfiguration('materialTheme.defaults');
    const globalConfig = workspace.getConfiguration();

    for (const group of DEFAULTS_GROUPS) {
      const enabled = config.get<boolean>(group.key, false);

      for (const [setting, value] of Object.entries(group.settings)) {
        globalConfig.update(setting, enabled ? value : undefined, true);
      }
    }
  }

  dispose(): void {
    for (const d of this.disposables) {
      d.dispose();
    }
  }
}
