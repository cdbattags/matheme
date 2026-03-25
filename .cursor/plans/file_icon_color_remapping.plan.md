---
name: File Icon Color Remapping
overview: Add brand-authentic colors and a monochrome variant to the Matheme file icon theme. Brand mode replaces Catppuccin palette colors with official technology brand colors. Mono mode uses a single neutral accent. Both are registered as separate VS Code icon themes.
todos:
  - id: create-brand-colors
    content: Create scripts/file-icons/brand-colors.ts with brand color mapping for all 391 file icons
    status: completed
  - id: update-build-colors
    content: Update build.ts with color replacement logic and dual output (brand + mono)
    status: completed
  - id: update-packaging
    content: Update package.json, .vscodeignore, .gitignore for dual icon themes
    status: completed
  - id: rebuild-test
    content: Rebuild and package VSIX, verify both icon themes work
    status: completed
isProject: false
---

# File Icon Color Remapping

## How the Catppuccin SVGs Work

Each SVG uses 1-2 stroke colors from the Catppuccin Macchiato palette:

- Blue `#8aadf4` -- TypeScript, general code
- Yellow `#eed49f` -- JavaScript, Python (secondary)
- Peach `#f5a97f` -- Rust, config files
- Sapphire `#7dc4e4` -- Go, Docker
- Green `#a6da95` -- Node, Vue, code symbols
- Red `#ed8796` -- Ruby, errors
- Mauve `#c6a0f6` -- Purple-branded (Elixir, etc.)
- Flamingo `#f0c6c6` -- Pink-branded
- Teal `#8bd5ca` -- Teal-branded
- Subtext `#cad3f5` -- Default file, folders (structural)

## Implementation

### 1. Brand Color Map

New file [scripts/file-icons/brand-colors.ts](scripts/file-icons/brand-colors.ts) with a mapping of icon name to brand color(s):

```typescript
export const brandColors: Record<string, { primary: string; secondary?: string }> = {
  'typescript': { primary: '#3178C6' },
  'javascript': { primary: '#F7DF1E' },
  'python': { primary: '#3776AB', secondary: '#FFD43B' },
  'rust': { primary: '#DEA584' },
  'go': { primary: '#00ADD8' },
  // ... all file icons that have a known brand color
};
```

Icons without a brand entry keep their Catppuccin color as-is (it already looks intentional for generic files/configs).

### 2. Color Replacement in build.ts

Update [scripts/file-icons/build.ts](scripts/file-icons/build.ts):

- Define the Catppuccin Macchiato palette as a constant
- For each SVG, detect which Catppuccin colors are present
- **Brand mode**: replace the dominant Catppuccin color with `brandColors[name].primary`, secondary with `brandColors[name].secondary` or a derived shade
- **Mono mode**: replace ALL Catppuccin colors with a single neutral accent (`#A0A0B8`)
- Write brand SVGs to `fileicons/icons/` and mono SVGs to `fileicons/icons-mono/`

### 3. Two Icon Themes in package.json

Register both themes in [package.json](package.json):

```json
"iconThemes": [
  {
    "id": "material-file-icons",
    "label": "Matheme File Icons",
    "path": "./fileicons/material-file-icon-theme.json"
  },
  {
    "id": "material-file-icons-mono",
    "label": "Matheme File Icons (Mono)",
    "path": "./fileicons/material-file-icon-theme-mono.json"
  }
]
```

Build generates two theme JSONs -- identical associations, different `iconPath` prefixes (`./icons/` vs `./icons-mono/`).

### 4. Color Replacement Logic

The replacement is straightforward since each SVG has a small number of hex colors:

1. Parse all hex colors in the SVG (`#rrggbb` pattern)
2. Look up the icon name in `brandColors`
3. If found: replace the first Catppuccin palette match with `primary`, second with `secondary`
4. If not found: keep original Catppuccin colors (they already look intentional)
5. For mono: replace ALL palette colors with the mono accent

### 5. Files Changed

- **New**: `scripts/file-icons/brand-colors.ts` -- brand color mapping for all file icons
- **Modified**: `scripts/file-icons/build.ts` -- add color replacement, dual output
- **Modified**: `package.json` -- register second icon theme
- **Modified**: `.vscodeignore` -- include `fileicons/icons-mono/`
- **Modified**: `.gitignore` -- add `fileicons/icons-mono/`, `fileicons/material-file-icon-theme-mono.json`
