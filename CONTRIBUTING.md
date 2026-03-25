# Contributing

## Requirements

- Node >= 18
- pnpm
- VS Code or Cursor

## Setup

```shell
git submodule update --init --recursive
pnpm install
pnpm build
```

## Testing

Press F5 in VS Code/Cursor to launch the Extension Development Host with the theme loaded.

## Project structure

- `src/` — Extension source (TypeScript, compiled with tsgo)
- `src/generator/` — 4-layer theme generator (palettes → semantic → derived → output)
- `scripts/product-icons/` — Product icon build pipeline (Iconify → SVGO → WOFF)
- `scripts/file-icons/` — File icon build pipeline (vscode-icons + Catppuccin → SVGO → SVG)
- `producticons/` — Generated WOFF font and theme JSON
- `fileicons/` — Generated file icon SVGs and theme JSONs
- `build/` — Compiled extension output (gitignored)

## Adding commands

Commands live in `src/commands/`. Register them in `src/material.theme.config.ts` and declare them in `package.json` under `contributes.commands`.

## Linting

```shell
pnpm lint
pnpm lint:fix
```

## File icons

Two file icon themes are generated:

- **Brand** — uses [vscode-icons](https://github.com/vscode-icons/vscode-icons) SVGs (multi-colored, ~860 file + ~170 folder icons)
- **Mono** — uses Catppuccin icons recolored to a single accent (via `scripts/file-icons/mapping.ts`)

The vscode-icons SVGs live in a git submodule at `vendor/vscode-icons`. When updating the submodule, regenerate the mapping data:

```shell
git submodule update --remote vendor/vscode-icons
pnpm run sync:vscode-icons
pnpm run build:file-icons
```
