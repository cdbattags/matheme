import {
  commands as Commands,
  ExtensionContext
} from 'vscode';

import * as ThemeCommands from './commands';
import {extensionManager} from './core/extension-manager';
import {DecorationManager} from './decorations';
import {DefaultsManager} from './defaults-manager';

export async function activate(context: ExtensionContext): Promise<void> {
  context.globalState.setKeysForSync([extensionManager.VERSION_KEY]);
  await extensionManager.init(context);

  context.subscriptions.push(
    Commands.registerCommand('materialTheme.setAccent', ThemeCommands.setAccent),
    Commands.registerCommand('materialTheme.setFontPreset', ThemeCommands.setFontPreset),
    Commands.registerCommand('materialTheme.applyEditorPreset', ThemeCommands.applyEditorPreset),
    new DecorationManager(),
    new DefaultsManager(),
  );
}

export function deactivate(): void {}
