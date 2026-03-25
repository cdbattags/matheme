import {workspace, window, QuickPickItem, env} from 'vscode';

interface FontPreset {
  name: string;
  fontFamily: string;
  fallback: string;
  fontSize: number;
  lineHeight: number;
  ligatures: boolean | string;
  installCmd: {
    brew?: string;
    apt?: string;
    url: string;
  };
}

const FONT_PRESETS: FontPreset[] = [
  {
    name: 'JetBrains Mono',
    fontFamily: 'JetBrains Mono',
    fallback: 'Menlo, Monaco, monospace',
    fontSize: 14,
    lineHeight: 1.6,
    ligatures: true,
    installCmd: {
      brew: 'brew install --cask font-jetbrains-mono',
      apt: 'sudo apt install fonts-jetbrains-mono',
      url: 'https://www.jetbrains.com/lp/mono/',
    },
  },
  {
    name: 'Monaspace Neon',
    fontFamily: 'Monaspace Neon',
    fallback: 'Menlo, Monaco, monospace',
    fontSize: 14,
    lineHeight: 1.6,
    ligatures: "'calt', 'liga', 'dlig', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06', 'ss07', 'ss08'",
    installCmd: {
      brew: 'brew install --cask font-monaspace',
      url: 'https://monaspace.githubnext.com/',
    },
  },
  {
    name: 'Fira Code',
    fontFamily: 'Fira Code',
    fallback: 'Menlo, Monaco, monospace',
    fontSize: 14,
    lineHeight: 1.5,
    ligatures: true,
    installCmd: {
      brew: 'brew install --cask font-fira-code',
      apt: 'sudo apt install fonts-firacode',
      url: 'https://github.com/tonsky/FiraCode',
    },
  },
  {
    name: 'Cascadia Code',
    fontFamily: 'Cascadia Code',
    fallback: 'Consolas, monospace',
    fontSize: 14,
    lineHeight: 1.5,
    ligatures: true,
    installCmd: {
      brew: 'brew install --cask font-cascadia-code',
      url: 'https://github.com/microsoft/cascadia-code',
    },
  },
  {
    name: 'Berkeley Mono',
    fontFamily: 'Berkeley Mono',
    fallback: 'Menlo, Monaco, monospace',
    fontSize: 13,
    lineHeight: 1.6,
    ligatures: true,
    installCmd: {
      url: 'https://berkeleygraphics.com/typefaces/berkeley-mono/',
    },
  },
  {
    name: 'Dank Mono',
    fontFamily: 'Dank Mono',
    fallback: 'Menlo, Monaco, monospace',
    fontSize: 14,
    lineHeight: 1.6,
    ligatures: true,
    installCmd: {
      url: 'https://philpl.gumroad.com/l/dank-mono',
    },
  },
  {
    name: 'Iosevka',
    fontFamily: 'Iosevka',
    fallback: 'Menlo, Monaco, monospace',
    fontSize: 15,
    lineHeight: 1.5,
    ligatures: true,
    installCmd: {
      brew: 'brew install --cask font-iosevka',
      apt: 'sudo apt install fonts-iosevka',
      url: 'https://typeof.net/Iosevka/',
    },
  },
  {
    name: 'Comic Mono',
    fontFamily: 'Comic Mono',
    fallback: 'Comic Sans MS, monospace',
    fontSize: 14,
    lineHeight: 1.5,
    ligatures: false,
    installCmd: {
      brew: 'brew install --cask font-comic-mono',
      url: 'https://dtinth.github.io/comic-mono-font/',
    },
  },
];

const RESET_KEY = 'Reset to VS Code defaults';

async function offerInstall(preset: FontPreset): Promise<boolean> {
  const platform = process.platform;
  const cmd = platform === 'darwin' ? preset.installCmd.brew
    : platform === 'linux' ? preset.installCmd.apt
    : undefined;

  if (cmd) {
    const action = await window.showInformationMessage(
      `${preset.name} may not be installed. Install via terminal?`,
      'Install', 'Open download page', 'Use anyway',
    );

    if (action === 'Install') {
      const terminal = window.createTerminal('Font Install');
      terminal.show();
      terminal.sendText(cmd);
      await window.showInformationMessage(
        `Installing ${preset.name}... Restart VS Code after installation completes.`,
        'OK',
      );
      return true;
    }

    if (action === 'Open download page') {
      await env.openExternal(await import('vscode').then(v => v.Uri.parse(preset.installCmd.url)));
      return true;
    }

    return action === 'Use anyway';
  }

  const action = await window.showInformationMessage(
    `${preset.name} needs to be installed manually.`,
    'Open download page', 'Use anyway',
  );

  if (action === 'Open download page') {
    await env.openExternal(await import('vscode').then(v => v.Uri.parse(preset.installCmd.url)));
    return false;
  }

  return action === 'Use anyway';
}

export const command = async (): Promise<void> => {
  const items: QuickPickItem[] = [
    ...FONT_PRESETS.map(p => ({
      label: p.name,
      description: `${p.fontSize}px / ${p.lineHeight} line-height${p.ligatures ? ' / ligatures' : ''}`,
      detail: p.fontFamily,
    })),
    {label: '', kind: -1} as QuickPickItem,
    {label: RESET_KEY, description: 'Clear font settings'},
  ];

  const pick = await window.showQuickPick(items, {
    placeHolder: 'Choose a font preset',
    matchOnDescription: true,
    matchOnDetail: true,
  });

  if (!pick) {
    return;
  }

  const config = workspace.getConfiguration();

  if (pick.label === RESET_KEY) {
    await Promise.all([
      config.update('editor.fontFamily', undefined, true),
      config.update('editor.fontSize', undefined, true),
      config.update('editor.lineHeight', undefined, true),
      config.update('editor.fontLigatures', undefined, true),
    ]);
    await window.showInformationMessage('Material Theme: font settings reset to defaults.');
    return;
  }

  const preset = FONT_PRESETS.find(p => p.name === pick.label);
  if (!preset) {
    return;
  }

  const shouldApply = await offerInstall(preset);
  if (!shouldApply) {
    return;
  }

  const fontFamily = `'${preset.fontFamily}', ${preset.fallback}`;

  await Promise.all([
    config.update('editor.fontFamily', fontFamily, true),
    config.update('editor.fontSize', preset.fontSize, true),
    config.update('editor.lineHeight', preset.lineHeight, true),
    config.update('editor.fontLigatures', preset.ligatures, true),
  ]);

  await window.showInformationMessage(`Material Theme: applied ${preset.name} font preset.`);
};
