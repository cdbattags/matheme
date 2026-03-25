import {workspace} from 'vscode';

class SettingsManager {
  async updateSetting(key: string, value: string): Promise<void> {
    await workspace.getConfiguration().update(`materialTheme.${key}`, value, true);
  }
}

export const settingsManager = new SettingsManager();
