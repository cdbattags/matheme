import {SemanticPalette, DerivedColors} from './types';
import {opacity} from './color';

// ---------------------------------------------------------------------------
// Tier 1: Parity with community-themes/*.json (~185 keys)
// ---------------------------------------------------------------------------

function getTier1(s: SemanticPalette, d: DerivedColors): Record<string, string> {
  const isDark = s.type === 'dark';
  const highlightSubtle = isDark ? d.highlightBg30 : d.highlightBg50;

  return {
    'focusBorder': d.whiteAlpha00,
    'editorCursor.foreground': s.caret,
    'editorRuler.foreground': s.guides,
    'scrollbar.shadow': d.canvasTransparent,
    'editorLink.activeForeground': s.fg,
    'selection.background': s.accent,
    'progressBar.background': s.accent,
    'textLink.foreground': s.accent,
    'textLink.activeForeground': s.fg,
    'widget.shadow': d.shadow,
    'button.background': d.buttonBg,
    'debugToolBar.background': s.canvas,
    'pickerGroup.foreground': s.accent,
    'inputOption.activeBackground': d.fgAlpha30,
    'inputOption.activeBorder': d.fgAlpha30,

    'editorLineNumber.foreground': s.lineNumbers,
    'editorLineNumber.activeForeground': s.fgSidebar,
    'editorBracketMatch.border': opacity(s.caret, '50'),
    'editorBracketMatch.background': s.canvas,
    'editorWhitespace.foreground': d.fgAlpha40,

    'editorOverviewRuler.findMatchForeground': s.accent,
    'editorOverviewRuler.border': s.canvas,
    'editorOverviewRuler.errorForeground': d.dangerAlpha40,
    'editorOverviewRuler.infoForeground': d.infoAlpha40,
    'editorOverviewRuler.warningForeground': d.warningAlpha40,

    'editorInfo.foreground': d.infoAlpha70,
    'editorWarning.foreground': d.warningAlpha70,
    'editorError.foreground': d.dangerAlpha70,

    'editorHoverWidget.background': s.canvas,
    'editorHoverWidget.border': s.border,
    'editorIndentGuide.background': d.guidesAlpha70,
    'editorIndentGuide.activeBackground': s.guides,

    'editorGroupHeader.tabsBackground': s.canvas,
    'editorGroup.border': d.shadow,

    'editorGutter.modifiedBackground': d.infoAlpha60,
    'editorGutter.addedBackground': d.successAlpha60,
    'editorGutter.deletedBackground': d.dangerAlpha60,

    'editor.background': s.canvas,
    'editor.foreground': s.fg,
    'editor.lineHighlightBackground': d.lineHighlight,
    'editor.selectionBackground': d.selectionBg,
    'editor.selectionHighlightBackground': d.selectionHighlight,
    'editor.findMatchBackground': d.findMatchBg,
    'editor.findMatchHighlightBackground': d.findMatchHighlightBg,
    'editor.findMatchBorder': s.accent,
    'editor.findMatchHighlightBorder': d.matchHighlightBorder,

    'tab.activeBorder': s.accent,
    'tab.activeModifiedBorder': s.fgSidebar,
    'tab.unfocusedActiveBorder': s.fgMuted,
    'tab.activeForeground': s.fgActive,
    'tab.inactiveForeground': s.fgSidebar,
    'tab.inactiveBackground': s.canvas,
    'tab.unfocusedActiveForeground': s.fg,
    'tab.border': s.canvas,

    'statusBar.noFolderBackground': s.canvas,
    'statusBar.border': d.chromeBorder,
    'statusBar.background': s.canvasChrome,
    'statusBar.foreground': s.fgStatusbar,
    'statusBar.debuggingBackground': s.magenta,
    'statusBar.debuggingForeground': d.debugFg,
    'statusBarItem.hoverBackground': d.commentsAlpha20,
    'statusBarItem.remoteForeground': d.fgOnAccent,
    'statusBarItem.remoteBackground': s.accent,

    'activityBar.background': s.canvasChrome,
    'activityBar.border': d.chromeBorder,
    'activityBar.foreground': s.fg,
    'activityBarBadge.background': s.accent,
    'activityBarBadge.foreground': d.fgOnAccent,

    'titleBar.activeBackground': s.canvasChrome,
    'titleBar.activeForeground': s.fg,
    'titleBar.inactiveBackground': s.canvasChrome,
    'titleBar.inactiveForeground': s.fgSidebar,
    'titleBar.border': d.chromeBorder,

    'sideBar.background': s.canvasChrome,
    'sideBar.foreground': s.fgSidebar,
    'sideBar.border': d.chromeBorder,
    'sideBarTitle.foreground': s.fg,
    'sideBarSectionHeader.background': s.canvasChrome,
    'sideBarSectionHeader.border': d.chromeBorder,

    'input.background': s.canvasInput,
    'input.foreground': s.fgInput,
    'input.placeholderForeground': d.fgAlpha60,
    'input.border': s.border,
    'inputValidation.errorBorder': d.dangerAlpha50,
    'inputValidation.infoBorder': d.infoAlpha50,
    'inputValidation.warningBorder': d.warningAlpha50,

    'dropdown.background': s.canvas,
    'dropdown.border': s.border,

    'list.hoverForeground': s.fgListHover,
    'list.hoverBackground': s.canvasChrome,
    'list.activeSelectionBackground': s.canvasChrome,
    'list.activeSelectionForeground': s.accent,
    'list.inactiveSelectionForeground': s.accent,
    'list.inactiveSelectionBackground': highlightSubtle,
    'list.focusBackground': d.fgAlpha20,
    'list.focusForeground': s.fg,
    'list.highlightForeground': s.accent,

    'terminal.ansiWhite': s.white,
    'terminal.ansiBlack': s.black,
    'terminal.ansiBlue': s.blue,
    'terminal.ansiCyan': s.cyan,
    'terminal.ansiGreen': s.green,
    'terminal.ansiMagenta': s.magenta,
    'terminal.ansiRed': s.danger,
    'terminal.ansiYellow': s.warning,
    'terminal.ansiBrightWhite': s.white,
    'terminal.ansiBrightBlack': s.fgMuted,
    'terminal.ansiBrightBlue': s.blue,
    'terminal.ansiBrightCyan': s.cyan,
    'terminal.ansiBrightGreen': s.green,
    'terminal.ansiBrightMagenta': s.magenta,
    'terminal.ansiBrightRed': s.danger,
    'terminal.ansiBrightYellow': s.warning,
    'terminalCursor.foreground': s.warning,
    'terminalCursor.background': s.black,

    'scrollbarSlider.background': d.fgAlpha20,
    'scrollbarSlider.hoverBackground': d.fgAlpha10,
    'scrollbarSlider.activeBackground': s.accent,

    'editorSuggestWidget.background': s.canvas,
    'editorSuggestWidget.foreground': s.fg,
    'editorSuggestWidget.highlightForeground': s.accent,
    'editorSuggestWidget.selectedBackground': d.highlightBg50,
    'editorSuggestWidget.border': s.border,

    'editorWidget.background': s.canvasChrome,
    'editorWidget.resizeBorder': s.accent,
    'editorWidget.border': '',
    'editorMarkerNavigation.background': d.fgAlpha05,

    'panel.border': d.chromeBorder,
    'panel.background': s.canvasChrome,
    'panel.dropBackground': s.fg,
    'panelTitle.inactiveForeground': s.fg,
    'panelTitle.activeForeground': s.fgActive,
    'panelTitle.activeBorder': s.accent,

    'diffEditor.insertedTextBackground': d.successAlpha15,
    'diffEditor.insertedLineBackground': d.successAlpha10,
    'diffEditor.removedTextBackground': d.dangerAlpha20,
    'diffEditor.removedLineBackground': d.dangerAlpha10,

    'notifications.background': s.canvas,
    'notifications.foreground': s.fg,
    'notificationLink.foreground': s.accent,

    'badge.background': d.highlightBg30,
    'badge.foreground': s.fgMuted,

    'extensionButton.prominentBackground': d.successAlpha90,
    'extensionButton.prominentHoverBackground': s.success,

    'peekView.border': d.shadow,
    'peekViewEditor.background': d.fgAlpha05,
    'peekViewTitle.background': d.fgAlpha05,
    'peekViewResult.background': d.fgAlpha05,
    'peekViewEditorGutter.background': d.fgAlpha05,
    'peekViewTitleDescription.foreground': d.fgAlpha60,
    'peekViewResult.matchHighlightBackground': d.peekMatchHighlight,
    'peekViewEditor.matchHighlightBackground': d.peekMatchHighlight,

    'gitDecoration.deletedResourceForeground': d.dangerAlpha90,
    'gitDecoration.conflictingResourceForeground': d.warningAlpha90,
    'gitDecoration.modifiedResourceForeground': d.infoAlpha90,
    'gitDecoration.untrackedResourceForeground': d.successAlpha90,
    'gitDecoration.ignoredResourceForeground': d.sidebarFgAlpha90,
    'peekViewResult.selectionBackground': d.sidebarFgAlpha70,

    'breadcrumb.background': s.canvas,
    'breadcrumb.foreground': s.fgSidebar,
    'breadcrumb.focusForeground': s.fg,
    'breadcrumb.activeSelectionForeground': s.accent,
    'breadcrumbPicker.background': s.canvasChrome,

    'menu.background': s.canvas,
    'menu.foreground': s.fg,
    'menu.selectionBackground': d.highlightBg50,
    'menu.selectionForeground': s.accent,
    'menu.selectionBorder': highlightSubtle,
    'menu.separatorBackground': s.fg,
    'menubar.selectionBackground': highlightSubtle,
    'menubar.selectionForeground': s.accent,
    'menubar.selectionBorder': highlightSubtle,

    'settings.dropdownForeground': s.fg,
    'settings.dropdownBackground': s.canvasChrome,
    'settings.numberInputForeground': s.fg,
    'settings.numberInputBackground': s.canvasChrome,
    'settings.textInputForeground': s.fg,
    'settings.textInputBackground': s.canvasChrome,
    'settings.headerForeground': s.accent,
    'settings.modifiedItemIndicator': s.accent,
    'settings.checkboxBackground': s.canvasChrome,
    'settings.checkboxForeground': s.fg,

    'listFilterWidget.background': highlightSubtle,
    'listFilterWidget.outline': highlightSubtle,
    'listFilterWidget.noMatchesOutline': highlightSubtle,

    'tree.indentGuidesStroke': s.guides,
  };
}

// ---------------------------------------------------------------------------
// Tier 2: High-Impact Additions (~100 keys)
// ---------------------------------------------------------------------------

function getTier2(s: SemanticPalette, d: DerivedColors): Record<string, string> {
  return {
    'editorBracketHighlight.foreground1': s.yellow,
    'editorBracketHighlight.foreground2': s.purple,
    'editorBracketHighlight.foreground3': s.cyan,
    'editorBracketHighlight.foreground4': s.green,
    'editorBracketHighlight.foreground5': s.orange,
    'editorBracketHighlight.foreground6': s.blue,
    'editorBracketHighlight.unexpectedBracket.foreground': s.danger,
    'editorBracketPairGuide.activeBackground1': opacity(s.yellow, '60'),
    'editorBracketPairGuide.activeBackground2': opacity(s.purple, '60'),
    'editorBracketPairGuide.activeBackground3': opacity(s.cyan, '60'),
    'editorBracketPairGuide.activeBackground4': opacity(s.green, '60'),
    'editorBracketPairGuide.activeBackground5': opacity(s.orange, '60'),
    'editorBracketPairGuide.activeBackground6': opacity(s.blue, '60'),
    'editorBracketPairGuide.background1': opacity(s.yellow, '30'),
    'editorBracketPairGuide.background2': opacity(s.purple, '30'),
    'editorBracketPairGuide.background3': opacity(s.cyan, '30'),
    'editorBracketPairGuide.background4': opacity(s.green, '30'),
    'editorBracketPairGuide.background5': opacity(s.orange, '30'),
    'editorBracketPairGuide.background6': opacity(s.blue, '30'),

    'editorInlayHint.foreground': d.fgAlpha60,
    'editorInlayHint.background': d.fgAlpha05,
    'editorInlayHint.typeForeground': d.fgAlpha60,
    'editorInlayHint.typeBackground': d.fgAlpha05,
    'editorInlayHint.parameterForeground': d.fgAlpha60,
    'editorInlayHint.parameterBackground': d.fgAlpha05,

    'minimap.findMatchHighlight': s.accent,
    'minimap.selectionHighlight': d.selectionBg,
    'minimap.errorHighlight': d.dangerAlpha70,
    'minimap.warningHighlight': d.warningAlpha70,
    'minimap.selectionOccurrenceHighlight': d.selectionBg,
    'minimapSlider.background': d.fgAlpha20,
    'minimapSlider.hoverBackground': d.fgAlpha30,
    'minimapSlider.activeBackground': d.fgAlpha40,
    'minimapGutter.addedBackground': d.successAlpha60,
    'minimapGutter.modifiedBackground': d.infoAlpha60,
    'minimapGutter.deletedBackground': d.dangerAlpha60,

    'editorStickyScroll.background': s.canvas,
    'editorStickyScrollHover.background': d.fgAlpha05,
    'editorStickyScroll.shadow': d.shadow,

    'commandCenter.foreground': s.fg,
    'commandCenter.background': s.canvas,
    'commandCenter.border': s.border,
    'commandCenter.activeBackground': d.fgAlpha05,
    'commandCenter.activeForeground': s.fg,
    'commandCenter.activeBorder': s.accent,
    'commandCenter.inactiveForeground': s.fgSidebar,
    'commandCenter.inactiveBorder': s.border,
    'commandCenter.debuggingBackground': opacity(s.magenta, '30'),

    'debugIcon.breakpointForeground': s.danger,
    'debugIcon.breakpointDisabledForeground': d.dangerAlpha50,
    'debugIcon.breakpointUnverifiedForeground': d.warningAlpha70,
    'debugIcon.startForeground': s.success,
    'debugIcon.pauseForeground': s.warning,
    'debugIcon.stopForeground': s.danger,
    'debugIcon.disconnectForeground': s.danger,
    'debugIcon.restartForeground': s.success,
    'debugIcon.stepOverForeground': s.info,
    'debugIcon.stepIntoForeground': s.info,
    'debugIcon.stepOutForeground': s.info,
    'debugIcon.stepBackForeground': s.info,
    'debugIcon.continueForeground': s.success,

    'debugTokenExpression.name': s.purple,
    'debugTokenExpression.value': s.fg,
    'debugTokenExpression.string': s.green,
    'debugTokenExpression.boolean': s.orange,
    'debugTokenExpression.number': s.orange,
    'debugTokenExpression.error': s.danger,

    'debugConsole.infoForeground': s.info,
    'debugConsole.warningForeground': s.warning,
    'debugConsole.errorForeground': s.danger,
    'debugConsole.sourceForeground': s.fg,

    'symbolIcon.arrayForeground': s.orange,
    'symbolIcon.booleanForeground': s.orange,
    'symbolIcon.classForeground': s.yellow,
    'symbolIcon.colorForeground': s.cyan,
    'symbolIcon.constantForeground': s.orange,
    'symbolIcon.constructorForeground': s.blue,
    'symbolIcon.enumeratorForeground': s.yellow,
    'symbolIcon.enumeratorMemberForeground': s.cyan,
    'symbolIcon.eventForeground': s.yellow,
    'symbolIcon.fieldForeground': s.red,
    'symbolIcon.fileForeground': s.fg,
    'symbolIcon.folderForeground': s.fg,
    'symbolIcon.functionForeground': s.blue,
    'symbolIcon.interfaceForeground': s.yellow,
    'symbolIcon.keyForeground': s.cyan,
    'symbolIcon.keywordForeground': s.purple,
    'symbolIcon.methodForeground': s.blue,
    'symbolIcon.moduleForeground': s.fg,
    'symbolIcon.namespaceForeground': s.yellow,
    'symbolIcon.nullForeground': s.danger,
    'symbolIcon.numberForeground': s.orange,
    'symbolIcon.objectForeground': s.yellow,
    'symbolIcon.operatorForeground': s.cyan,
    'symbolIcon.packageForeground': s.orange,
    'symbolIcon.propertyForeground': s.red,
    'symbolIcon.referenceForeground': s.orange,
    'symbolIcon.snippetForeground': s.fg,
    'symbolIcon.stringForeground': s.green,
    'symbolIcon.structForeground': s.yellow,
    'symbolIcon.textForeground': s.fg,
    'symbolIcon.typeParameterForeground': s.yellow,
    'symbolIcon.unitForeground': s.orange,
    'symbolIcon.variableForeground': s.red,

    'merge.currentHeaderBackground': opacity(s.success, '30'),
    'merge.currentContentBackground': opacity(s.success, '15'),
    'merge.incomingHeaderBackground': opacity(s.info, '30'),
    'merge.incomingContentBackground': opacity(s.info, '15'),
    'merge.border': s.border,
    'merge.commonHeaderBackground': d.fgAlpha20,
    'merge.commonContentBackground': d.fgAlpha10,

    'scmGraph.historyItemGroupLocal': s.info,
    'scmGraph.historyItemGroupRemote': s.success,
    'scmGraph.historyItemGroupBase': s.warning,
    'scmGraph.historyItemGroupHoverLabelForeground': s.fgActive,
    'scmGraph.foreground1': s.info,
    'scmGraph.foreground2': s.success,
    'scmGraph.foreground3': s.warning,
    'scmGraph.foreground4': s.purple,
  };
}

// ---------------------------------------------------------------------------
// Tier 3: Cursor/AI and Niche (~175 keys)
// ---------------------------------------------------------------------------

function getTier3(s: SemanticPalette, d: DerivedColors): Record<string, string> {
  return {
    'chat.requestBackground': d.fgAlpha05,
    'chat.requestBorder': s.border,
    'chat.slashCommandBackground': d.fgAlpha10,
    'chat.slashCommandForeground': s.accent,
    'chat.avatarBackground': s.canvasChrome,
    'chat.avatarForeground': s.fg,

    'inlineChat.background': s.canvas,
    'inlineChat.border': s.border,
    'inlineChat.shadow': d.shadow,
    'inlineChatInput.background': s.canvasInput,

    'editorGhostText.foreground': d.fgAlpha40,
    'editorGhostText.background': d.fgAlpha05,

    'testing.iconPassed': s.success,
    'testing.iconFailed': s.danger,
    'testing.iconErrored': s.danger,
    'testing.iconQueued': s.warning,
    'testing.iconUnset': s.fgSidebar,
    'testing.iconSkipped': s.fgSidebar,
    'testing.runAction': s.success,
    'testing.peekBorder': s.info,
    'testing.peekHeaderBackground': opacity(s.info, '15'),
    'testing.message.info.decorationForeground': s.fg,
    'testing.message.info.lineBackground': d.fgAlpha05,
    'testing.message.error.decorationForeground': s.danger,
    'testing.message.error.lineBackground': opacity(s.danger, '10'),

    'notebook.cellBorderColor': s.border,
    'notebook.cellEditorBackground': s.canvas,
    'notebook.cellHoverBackground': d.fgAlpha05,
    'notebook.cellInsertionIndicator': s.accent,
    'notebook.cellStatusBarItemHoverBackground': d.fgAlpha10,
    'notebook.cellToolbarSeparator': s.border,
    'notebook.focusedCellBorder': s.accent,
    'notebook.focusedEditorBorder': s.accent,
    'notebook.inactiveFocusedCellBorder': d.fgAlpha20,
    'notebook.outputContainerBackgroundColor': d.fgAlpha05,
    'notebook.selectedCellBackground': d.fgAlpha05,
    'notebook.selectedCellBorder': s.border,
    'notebook.symbolHighlightBackground': d.selectionBg,
    'notebookScrollbarSlider.background': d.fgAlpha20,
    'notebookScrollbarSlider.hoverBackground': d.fgAlpha30,
    'notebookScrollbarSlider.activeBackground': s.accent,
    'notebookStatusRunningIcon.foreground': s.accent,
    'notebookStatusSuccessIcon.foreground': s.success,
    'notebookStatusErrorIcon.foreground': s.danger,

    'quickInput.background': s.canvas,
    'quickInput.foreground': s.fg,
    'quickInputList.focusBackground': d.fgAlpha10,
    'quickInputList.focusForeground': s.fg,
    'quickInputList.focusIconForeground': s.accent,
    'quickInputTitle.background': d.fgAlpha05,

    'terminalCommandDecoration.defaultBackground': s.fgSidebar,
    'terminalCommandDecoration.successBackground': s.success,
    'terminalCommandDecoration.errorBackground': s.danger,

    'welcomePage.tileBackground': s.canvasChrome,
    'welcomePage.tileBorder': s.border,
    'welcomePage.tileHoverBackground': d.fgAlpha05,
    'welcomePage.progress.foreground': s.accent,
    'walkThrough.embeddedEditorBackground': s.canvas,

    'extensionIcon.starForeground': s.warning,
    'extensionIcon.verifiedForeground': s.success,
    'extensionIcon.preReleaseForeground': s.warning,
    'extensionIcon.sponsorForeground': s.danger,

    'banner.background': s.canvasChrome,
    'banner.foreground': s.fg,
    'banner.iconForeground': s.accent,

    'keybindingLabel.background': d.fgAlpha10,
    'keybindingLabel.foreground': s.fg,
    'keybindingLabel.border': d.fgAlpha20,
    'keybindingLabel.bottomBorder': d.fgAlpha20,

    'checkbox.background': s.canvasChrome,
    'checkbox.foreground': s.fg,
    'checkbox.border': s.border,
    'checkbox.selectBackground': s.canvasInput,
    'checkbox.selectBorder': s.border,

    'radio.activeBackground': s.accent,
    'radio.activeForeground': d.fgOnAccent,
    'radio.activeBorder': s.accent,
    'radio.inactiveBackground': s.canvasChrome,
    'radio.inactiveForeground': s.fg,
    'radio.inactiveBorder': s.border,
    'radio.inactiveHoverBackground': d.fgAlpha05,

    'mergeEditor.change.background': opacity(s.info, '15'),
    'mergeEditor.change.word.background': opacity(s.info, '30'),
    'mergeEditor.conflict.handledUnfocused.border': opacity(s.success, '30'),
    'mergeEditor.conflict.handledFocused.border': s.success,
    'mergeEditor.conflict.handled.minimapOverViewRuler': s.success,
    'mergeEditor.conflict.unhandledUnfocused.border': opacity(s.warning, '30'),
    'mergeEditor.conflict.unhandledFocused.border': s.warning,
    'mergeEditor.conflict.unhandled.minimapOverViewRuler': s.warning,
    'mergeEditor.conflictingLines.background': opacity(s.warning, '15'),
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function getUIColors(s: SemanticPalette, d: DerivedColors, tier: 1 | 2 | 3 = 3): Record<string, string> {
  const colors = getTier1(s, d);

  if (tier >= 2) {
    Object.assign(colors, getTier2(s, d));
  }

  if (tier >= 3) {
    Object.assign(colors, getTier3(s, d));
  }

  return colors;
}
