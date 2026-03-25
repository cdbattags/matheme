import {workspace, window, QuickPickItem} from 'vscode';

interface EditorPreset {
  label: string;
  description: string;
  settings: Record<string, unknown>;
}

const PRESETS: EditorPreset[] = [
  {
    label: 'Minimal',
    description: 'Distraction-free: minimap off, breadcrumbs off, reduced chrome',
    settings: {
      'editor.minimap.enabled': false,
      'breadcrumbs.enabled': false,
      'editor.glyphMargin': false,
      'editor.folding': false,
      'editor.renderLineHighlight': 'none',
      'editor.overviewRulerBorder': false,
      'editor.hideCursorInOverviewRuler': true,
      'editor.scrollbar.vertical': 'hidden',
      'editor.scrollbar.horizontal': 'hidden',
      'workbench.activityBar.location': 'hidden',
      'workbench.statusBar.visible': true,
      'window.commandCenter': false,
      'editor.stickyScroll.enabled': false,
    },
  },
  {
    label: 'Focused',
    description: 'Zen-like: smooth animations, sticky scroll, guides on',
    settings: {
      'editor.minimap.enabled': false,
      'breadcrumbs.enabled': true,
      'editor.glyphMargin': true,
      'editor.folding': true,
      'editor.renderLineHighlight': 'gutter',
      'editor.cursorBlinking': 'smooth',
      'editor.cursorSmoothCaretAnimation': 'on',
      'editor.smoothScrolling': true,
      'editor.stickyScroll.enabled': true,
      'editor.guides.bracketPairs': 'active',
      'editor.bracketPairColorization.enabled': true,
      'workbench.list.smoothScrolling': true,
      'workbench.activityBar.location': 'default',
      'window.commandCenter': true,
    },
  },
  {
    label: 'Full Chrome',
    description: 'Everything visible: minimap, breadcrumbs, all guides and decorations',
    settings: {
      'editor.minimap.enabled': true,
      'editor.minimap.renderCharacters': false,
      'breadcrumbs.enabled': true,
      'editor.glyphMargin': true,
      'editor.folding': true,
      'editor.renderLineHighlight': 'all',
      'editor.renderWhitespace': 'selection',
      'editor.guides.bracketPairs': true,
      'editor.bracketPairColorization.enabled': true,
      'editor.stickyScroll.enabled': true,
      'editor.overviewRulerBorder': true,
      'workbench.activityBar.location': 'default',
      'workbench.statusBar.visible': true,
      'window.commandCenter': true,
      'editor.scrollbar.vertical': 'auto',
      'editor.scrollbar.horizontal': 'auto',
    },
  },
];

export const command = async (): Promise<void> => {
  const items: QuickPickItem[] = PRESETS.map(p => ({
    label: p.label,
    description: p.description,
  }));

  const pick = await window.showQuickPick(items, {
    placeHolder: 'Choose an editor preset',
  });

  if (!pick) {
    return;
  }

  const preset = PRESETS.find(p => p.label === pick.label);
  if (!preset) {
    return;
  }

  const config = workspace.getConfiguration();
  const updates = Object.entries(preset.settings).map(([key, value]) =>
    config.update(key, value, true),
  );

  try {
    await Promise.all(updates);
    await window.showInformationMessage(`Material Theme: applied "${preset.label}" preset.`);
  } catch (error) {
    await window.showErrorMessage(`Material Theme: failed to apply preset — ${String(error)}`);
  }
};
