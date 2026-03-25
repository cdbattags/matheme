import {workspace, window, QuickPickItem} from 'vscode';
import {extensionManager} from '../core/extension-manager';
import {settingsManager} from '../core/settings-manager';

const PURGE_KEY = 'Remove accent';
const CUSTOM_KEY = 'Custom hex color...';

const isValidColor = (color: string | null | undefined): boolean =>
  Boolean(color && /^#([0-9A-F]{6}|[0-9A-F]{8})$/i.test(color));

interface AccentProperty {
  alpha: number;
}

function buildAccentOverrides(
  accentColor: string,
  properties: Record<string, AccentProperty>,
): Record<string, string> {
  if (!isValidColor(accentColor)) {
    return {};
  }

  const base = accentColor.slice(0, 7);
  return Object.entries(properties).reduce<Record<string, string>>((acc, [key, prop]) => {
    if (prop.alpha >= 100) {
      acc[key] = base;
    } else {
      const hex = prop.alpha.toString(16).padStart(2, '0');
      acc[key] = `${base}${hex}`;
    }
    return acc;
  }, {});
}

async function pickAccentColor(): Promise<string | undefined> {
  const themeConfig = extensionManager.getConfig();

  const presetItems: QuickPickItem[] = Object.entries(themeConfig.accents).map(([name, hex]) => ({
    label: name,
    description: hex,
  }));

  const specialItems: QuickPickItem[] = [
    {label: CUSTOM_KEY, description: 'Enter a hex color code'},
    {label: PURGE_KEY, description: 'Reset to theme defaults'},
  ];

  const items = [...presetItems, {label: '', kind: -1} as QuickPickItem, ...specialItems];

  const pick = await window.showQuickPick(items, {
    placeHolder: 'Choose an accent color',
    matchOnDescription: true,
  });

  if (!pick) {
    return undefined;
  }

  if (pick.label === PURGE_KEY) {
    return PURGE_KEY;
  }

  if (pick.label === CUSTOM_KEY) {
    const hex = await window.showInputBox({
      prompt: 'Enter a hex color (e.g. #FF4081)',
      placeHolder: '#FF4081',
      validateInput: (value) => {
        if (!value) {
          return null;
        }
        const normalized = value.startsWith('#') ? value : `#${value}`;
        return isValidColor(normalized) ? null : 'Enter a valid hex color (#RRGGBB)';
      },
    });

    if (!hex) {
      return undefined;
    }

    return hex.startsWith('#') ? hex : `#${hex}`;
  }

  return themeConfig.accents[pick.label];
}

export const command = async (): Promise<void> => {
  const pkg = extensionManager.getPackageJSON();
  const currentThemeID = workspace.getConfiguration().get<string>('workbench.colorTheme');
  const isMaterialTheme = Boolean(pkg.contributes.themes.find(theme => theme.label === currentThemeID));

  if (!isMaterialTheme) {
    window.showWarningMessage('Material Theme: accent colors only work with Material Theme variants.');
    return;
  }

  const themeConfig = extensionManager.getConfig();
  const currentCustomizations: Record<string, unknown> =
    workspace.getConfiguration().get('workbench.colorCustomizations') ?? {};

  const accent = await pickAccentColor();

  if (accent === undefined) {
    return;
  }

  let config: Record<string, unknown>;

  if (accent === PURGE_KEY) {
    const {[`[${currentThemeID}]`]: _, ...rest} = currentCustomizations;
    config = rest;
  } else {
    const overrides = buildAccentOverrides(accent, themeConfig.accentsProperties);
    config = {
      ...currentCustomizations,
      [`[${currentThemeID}]`]: overrides,
    };
  }

  try {
    await workspace.getConfiguration().update('workbench.colorCustomizations', config, true);
  } catch (error) {
    await window.showErrorMessage(`Material Theme: failed to apply accent — ${String(error)}`);
    return;
  }

  const accentName = accent === PURGE_KEY
    ? ''
    : Object.entries(themeConfig.accents).find(([_, hex]) => hex === accent)?.[0] ?? accent;

  await settingsManager.updateSetting('accent', accentName);
};
