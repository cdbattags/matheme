# Matheme Product Icons

Custom product icon theme for VS Code / Cursor.

## Building the icon font

The build pipeline is fully automated via `pnpm run build:icons` (runs `scripts/product-icons/build.ts`).

It extracts SVGs from Iconify JSON, optimizes with SVGO, and generates `matheme-product-icons.woff` + `matheme-product-icon-theme.json`.

## Icon sources

Curated from open-source icon sets:

- [Phosphor Icons](https://phosphoricons.com/) (MIT)
- [Carbon Icons](https://carbondesignsystem.com/elements/icons/library/) (Apache 2.0)
- [Material Symbols](https://fonts.google.com/icons) (Apache 2.0)
- [Tabler Icons](https://tabler.io/icons) (MIT)
- [Lucide](https://lucide.dev/) (ISC)
