# Contributing

## Requirements

- Node >= 18
- pnpm
- VS Code or Cursor

## Setup

```shell
pnpm install
pnpm build
```

## Testing

Press F5 in VS Code/Cursor to launch the Extension Development Host with the theme loaded.

## Project structure

- `src/` — Extension source (TypeScript, compiled with tsgo)
- `src/generator/` — 4-layer theme generator (palettes → semantic → derived → output)
- `scripts/product-icons/` — Product icon build pipeline (Iconify → SVGO → WOFF)
- `scripts/file-icons/` — File icon build pipeline (Iconify → SVGO → SVG, brand + mono)
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

The file icon build pipeline is in `scripts/file-icons/`. Brand colors are mapped in `scripts/file-icons/brand-colors.ts`. Two variants are generated: brand-colored and monochrome.
