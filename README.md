# MoiVoyage · branding

The visual and voice brand for MoiVoyage, a bespoke travel assistant that takes
the logistics off the traveller's plate so the trip is about the adventure.

## Status

**Direction chosen: the Atelier.** A house that makes a world per trip. The
passport is the product, each voyage is a page in it with its own template and
narrator, and the house is the cover. The brand book is at the top level of
this repo; the discovery that led to it is in [`discovery/`](./discovery).

## Prototypes

Two trip apps already exist and are the raw material for the brand:

- **The Green Road** (`konstantinbrazhnik/2026-kk-uk`): a two-person,
  three-week trip written as letters, with a storybook drawing per place and a
  narrator called the Seanchaí. The design prototype of MoiVoyage.
- **Daren's Last Ride** (`konstantinbrazhnik/Daren-bach`): a group weekend as a
  1973 rock tour, with laminates, tickets, a dare deck and a critic called
  Lester. The technical proof of concept, built as one engine with a skin on
  top.

## Layout

| Path | What it holds |
|---|---|
| `BRAND.md` | The brand book: the idea, the house/template/voyage architecture and template tiers, the name, the stamp, the passport, the house palette with measured contrast, type, co-branding for partner templates. |
| `VOICE.md` | The house voice, the narrator rules every template obeys, and the copy deck for the twenty most common moments. |
| `TEMPLATES.md` | What a template may and may not change, the manifest shape, how a template is extended for a voyage, the validation gate, and the first two templates. |
| `house/tokens.css` | The house tokens as CSS custom properties. |
| `house/house-sheet.html` | The visual sheet: cover and page mockups, the stamp at every size, the voyage stamp, palette, type. Open it in a browser. |
| `scripts/contrast.mjs` | Measures WCAG contrast for the house palette and prints the table quoted in `BRAND.md`. `node scripts/contrast.mjs`. |
| `discovery/QUESTIONS.md` | The nineteen brand questions, each with the working assumption used to draft the directions. Answer by number. |
| `discovery/brand-directions.html` | The full brief: findings from the prototypes, the questions, and three directions (the Atelier, Moi the companion, the Desk) with palettes, type, phone mockups and voice samples. Open it in a browser. |
