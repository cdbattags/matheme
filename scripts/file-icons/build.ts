import path from 'node:path';
import fs from 'fs-extra';
import {optimize} from 'svgo';
import {vsciFiles, type VsciFileEntry, vsciFolders} from './vsci-data';
import {fileIconMapping, folderIconMapping} from './mapping';

const ROOT = path.resolve(__dirname, '../..');
const OUT_DIR = path.join(ROOT, 'fileicons');
const ICONS_DIR = path.join(OUT_DIR, 'icons');
const ICONS_MONO_DIR = path.join(OUT_DIR, 'icons-mono');
const CUSTOM_DIR = path.join(OUT_DIR, 'custom');
const VSCI_ICONS = path.join(ROOT, 'vendor/vscode-icons/icons');

const MONO_ACCENT = '#A0A0B8';

// Custom file entries not covered by vscode-icons
const CUSTOM_FILES: VsciFileEntry[] = [
  {icon: 'cloud', extensions: ['cloud'], fileNames: [], languageIds: []},
  {icon: 'cloudf', extensions: ['cloudf'], fileNames: [], languageIds: []},
];

const CATPPUCCIN_PALETTE = new Set([
  '#f4dbd6', '#f0c6c6', '#f5bde6', '#c6a0f6', '#ed8796', '#ee99a0',
  '#f5a97f', '#eed49f', '#a6da95', '#8bd5ca', '#91d7e3', '#7dc4e4',
  '#8aadf4', '#b7bdf8', '#cad3f5', '#b8c0e0', '#a5adcb', '#939ab7',
  '#8087a2', '#6e738d', '#5b6078', '#494d64', '#363a4f', '#24273a',
  '#1e2030',
]);

interface ThemeJson {
  hidesExplorerArrows: boolean;
  file: string;
  folder: string;
  folderExpanded: string;
  rootFolder: string;
  rootFolderExpanded: string;
  iconDefinitions: Record<string, {iconPath: string}>;
  fileExtensions: Record<string, string>;
  fileNames: Record<string, string>;
  folderNames: Record<string, string>;
  folderNamesExpanded: Record<string, string>;
  languageIds: Record<string, string>;
}

function optimizeSvg(svg: string): string {
  return optimize(svg, {plugins: ['preset-default', 'convertPathData', 'mergePaths']}).data;
}

function recolorMono(svg: string): string {
  let result = svg;
  for (const hex of CATPPUCCIN_PALETTE) {
    result = result.replaceAll(hex, MONO_ACCENT);
  }
  return result;
}

function loadIconifySvg(iconRef: string): string | null {
  const [setId, iconName] = iconRef.split(':');
  if (!setId || !iconName) {
    return null;
  }

  let jsonPath: string;
  if (setId === 'catppuccin') {
    jsonPath = path.join(ROOT, 'node_modules/@iconify-json/catppuccin/icons.json');
  } else {
    jsonPath = path.join(ROOT, 'node_modules/@iconify/json/json', `${setId}.json`);
  }

  if (!fs.existsSync(jsonPath)) {
    return null;
  }

  const json = fs.readJsonSync(jsonPath);
  const icon = json.icons[iconName];
  if (!icon) {
    return null;
  }

  const width = icon.width || json.width || 24;
  const height = icon.height || json.height || 24;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">${icon.body}</svg>`;
}

function makeThemeJson(): ThemeJson {
  return {
    hidesExplorerArrows: false,
    file: '_file',
    folder: '_folder',
    folderExpanded: '_folder-open',
    rootFolder: '_root',
    rootFolderExpanded: '_root-open',
    iconDefinitions: {},
    fileExtensions: {},
    fileNames: {},
    folderNames: {},
    folderNamesExpanded: {},
    languageIds: {},
  };
}

// ---------------------------------------------------------------------------
// Brand theme: vscode-icons SVGs (already multi-colored)
// ---------------------------------------------------------------------------
function buildBrandTheme(): ThemeJson {
  console.log('Building brand theme (vscode-icons)...');
  const theme = makeThemeJson();

  fs.ensureDirSync(ICONS_DIR);
  fs.emptyDirSync(ICONS_DIR);

  function copyVsci(srcName: string, destName: string): boolean {
    const customPath = path.join(CUSTOM_DIR, `${destName}.svg`);
    let svg: string;
    if (fs.existsSync(customPath)) {
      svg = fs.readFileSync(customPath, 'utf-8');
    } else {
      const srcPath = path.join(VSCI_ICONS, srcName);
      if (!fs.existsSync(srcPath)) {
        return false;
      }
      svg = fs.readFileSync(srcPath, 'utf-8');
    }
    fs.writeFileSync(path.join(ICONS_DIR, `${destName}.svg`), optimizeSvg(svg));
    return true;
  }

  const defaults: Array<{dest: string; src: string}> = [
    {dest: '_file', src: 'default_file.svg'},
    {dest: '_folder', src: 'default_folder.svg'},
    {dest: '_folder-open', src: 'default_folder_opened.svg'},
    {dest: '_root', src: 'default_root_folder.svg'},
    {dest: '_root-open', src: 'default_root_folder_opened.svg'},
  ];

  for (const d of defaults) {
    if (copyVsci(d.src, d.dest)) {
      theme.iconDefinitions[d.dest] = {iconPath: `./icons/${d.dest}.svg`};
    }
  }

  let fileCount = 0;
  for (const entry of [...vsciFiles, ...CUSTOM_FILES]) {
    const svgSrc = `file_type_${entry.icon}.svg`;
    if (!copyVsci(svgSrc, entry.icon)) {
      continue;
    }
    theme.iconDefinitions[entry.icon] = {iconPath: `./icons/${entry.icon}.svg`};
    fileCount++;

    for (const ext of entry.extensions) {
      theme.fileExtensions[ext] = entry.icon;
    }
    for (const fn of entry.fileNames) {
      theme.fileNames[fn] = entry.icon;
    }
    for (const lid of entry.languageIds) {
      theme.languageIds[lid] = entry.icon;
    }
  }

  let folderCount = 0;
  for (const entry of vsciFolders) {
    const closedSrc = `folder_type_${entry.icon}.svg`;
    const openSrc = `folder_type_${entry.icon}_opened.svg`;
    const closedDest = `folder-${entry.icon}`;
    const openDest = `folder-${entry.icon}-open`;

    if (!copyVsci(closedSrc, closedDest)) {
      continue;
    }
    theme.iconDefinitions[closedDest] = {iconPath: `./icons/${closedDest}.svg`};

    const hasOpen = copyVsci(openSrc, openDest);
    if (hasOpen) {
      theme.iconDefinitions[openDest] = {iconPath: `./icons/${openDest}.svg`};
    }
    folderCount++;

    for (const fn of entry.folderNames) {
      theme.folderNames[fn] = closedDest;
      theme.folderNamesExpanded[fn] = hasOpen ? openDest : closedDest;
    }
  }

  const svgCount = fs.readdirSync(ICONS_DIR).filter(f => f.endsWith('.svg')).length;
  console.log(`  ${fileCount} file icons, ${folderCount} folder icons (${svgCount} SVGs)`);
  return theme;
}

// ---------------------------------------------------------------------------
// Mono theme: Catppuccin icons recolored to single accent
// ---------------------------------------------------------------------------
function buildMonoTheme(): ThemeJson {
  console.log('Building mono theme (catppuccin)...');
  const theme = makeThemeJson();

  fs.ensureDirSync(ICONS_MONO_DIR);
  fs.emptyDirSync(ICONS_MONO_DIR);

  function writeMonoSvg(name: string, iconRef: string): boolean {
    const customPath = path.join(CUSTOM_DIR, `${name}.svg`);
    let raw: string | null;
    if (fs.existsSync(customPath)) {
      raw = fs.readFileSync(customPath, 'utf-8');
    } else {
      raw = loadIconifySvg(iconRef);
    }
    if (!raw) {
      return false;
    }
    const mono = recolorMono(optimizeSvg(raw));
    fs.writeFileSync(path.join(ICONS_MONO_DIR, `${name}.svg`), mono);
    return true;
  }

  const defaults = [
    {name: '_file', ref: 'catppuccin:file'},
    {name: '_folder', ref: 'catppuccin:folder'},
    {name: '_folder-open', ref: 'catppuccin:folder-open'},
    {name: '_root', ref: 'catppuccin:root'},
    {name: '_root-open', ref: 'catppuccin:root-open'},
  ];

  for (const d of defaults) {
    if (writeMonoSvg(d.name, d.ref)) {
      theme.iconDefinitions[d.name] = {iconPath: `./icons-mono/${d.name}.svg`};
    }
  }

  let fileCount = 0;
  for (const [name, entry] of Object.entries(fileIconMapping)) {
    if (!writeMonoSvg(name, entry.iconRef)) {
      continue;
    }
    theme.iconDefinitions[name] = {iconPath: `./icons-mono/${name}.svg`};
    fileCount++;

    if (entry.fileExtensions) {
      for (const ext of entry.fileExtensions) {
        theme.fileExtensions[ext] = name;
      }
    }
    if (entry.fileNames) {
      for (const fn of entry.fileNames) {
        theme.fileNames[fn] = name;
      }
    }
    if (entry.languageIds) {
      for (const lid of entry.languageIds) {
        theme.languageIds[lid] = name;
      }
    }
  }

  let folderCount = 0;
  for (const [name, entry] of Object.entries(folderIconMapping)) {
    const closedName = `folder-${name}`;
    const openName = `folder-${name}-open`;

    if (!writeMonoSvg(closedName, entry.iconRef)) {
      continue;
    }
    theme.iconDefinitions[closedName] = {iconPath: `./icons-mono/${closedName}.svg`};

    const hasOpen = writeMonoSvg(openName, entry.iconRefOpen);
    if (hasOpen) {
      theme.iconDefinitions[openName] = {iconPath: `./icons-mono/${openName}.svg`};
    }
    folderCount++;

    for (const fn of entry.folderNames) {
      theme.folderNames[fn] = closedName;
      theme.folderNamesExpanded[fn] = hasOpen ? openName : closedName;
    }
  }

  const svgCount = fs.readdirSync(ICONS_MONO_DIR).filter(f => f.endsWith('.svg')).length;
  console.log(`  ${fileCount} file icons, ${folderCount} folder icons (${svgCount} SVGs)`);
  return theme;
}

// ---------------------------------------------------------------------------
async function build() {
  const brandTheme = buildBrandTheme();
  const monoTheme = buildMonoTheme();

  fs.writeJsonSync(path.join(OUT_DIR, 'matheme-file-icon-theme.json'), brandTheme, {spaces: 2});
  fs.writeJsonSync(path.join(OUT_DIR, 'matheme-file-icon-theme-mono.json'), monoTheme, {spaces: 2});

  console.log('Done.');
}

build().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
