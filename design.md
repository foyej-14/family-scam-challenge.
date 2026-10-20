# Design Direction

## Design Inspiration URL

Fallback 4: Calm productivity app

## What We Borrow

- Calm, uncluttered surface: one accent colour used sparingly, generous spacing, quiet grey text for secondary lines.
- Rows as a single list split by thin lines, not a card per row.
- Clear hierarchy by size and weight: one big number (the hero), bold names in rows, quiet supporting text.
- Soft, low-contrast page tint rather than plain white, so the layout feels settled.

## What We Do Not Copy

- No real app's brand, logo, colour scheme, icons, copy or layout grid is copied: only the calm mood and quiet spacing are borrowed.
- No fake logos, no fake testimonials, no invented stats (every figure here is worked out from the sample data and labelled `Sample data`).
- No real bank, courier or shop names, real phone numbers or real links anywhere.

## Visual Mood

Calm, steady and reassuring — a kitchen-table family game, not a security warning. Quiet and confident, never alarming, never playful-cluttered. Made for my aunt, and for me: readable at a glance by someone who is not confident with phones.

## Layout Rules

- One page. At most two areas stand out from the tinted page background: the hero and the list.
- The add-player form sits at the top of the list, not in its own box.
- On a screen wider than 900px: hero beside the list (two columns), list on the right and wider.
- On a phone: one column — header, hero, add form, list — stacked in that order.
- Header at the top: app name, one-line purpose under it, `Sample data` in small muted text.
- Footer line at the bottom: the fixed 997 National Scam Response Centre line.
- No box inside a box; never a border and a shadow on the same element; no shadow on rows.

## Color / Contrast Rules

- One accent colour: calm teal-green `#0f766e` (AA on a light tinted background).
- Page background: the accent tinted very lightly, `#f4f8f7`.
- Surface for hero and list: `#ffffff` with a thin `#dfe7e5` divider only (no border plus shadow).
- Text: near-black `#1b2a28`; secondary text `#5c6b69`.
- Row palette (five colours, each AA on white), used for the row mark and its slice of the hero bar:
  1. `#0f766e` teal (accent)
  2. `#b45309` amber
  3. `#1d4ed8` blue
  4. `#7e22ce` purple
  5. `#9f1239` rose
- Feedback colours: **Right** uses the accent `#0f766e`; **Wrong** uses `#b91c1c`. Both are words, not just colour, so the meaning does not depend on colour.
- Finished rows are muted: text `#8a9795`, bar `#d7dedd`.

## Typography Feel

- One clean sans-serif family (system stack: `-apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, sans-serif`).
- Numbers use `font-variant-numeric: tabular-nums` so figures line up in rows and the hero.
- Emphasis comes from size and weight only: hero figure 48px+ in the accent colour; names bold; supporting text smaller and muted.
- No pill around plain text, no box around text; the only boxes in a row are its controls (Play, Remove, input).

## Component Style

- Header: app name (bold, ~20px), one-line purpose under it, `Sample data` small and muted.
- Hero: short label, the main figure (right answers of all players added together) at 48px+ in the accent colour, the line `N players, X of Y answered` under it, then a stacked bar with one colour per player, and under the bar each player's name and amount beside a small mark in their colour.
- Rows: one list, split by thin lines. Each row: a small colour mark, the nickname in bold, `N right` on the right, and under them a progress bar for answered out of 10 with the text `N of 10` and the words `N left` beside it.
- Controls in a row: a **Play** button (accent) and a **Remove** button (quiet, text-like). A Finished row shows `Finished` in place of `N left`, a full grey bar, and no Play button.
- Add form: nickname input and an **Add player** button at the top of the list.
- Answer view: sender in bold, the message text, then two buttons **Scam** and **Legit**; after a press it shows **Right** or **Wrong**, the correct answer, the reasons as a short list, then **Next message**.
- Inputs and buttons: one clear focus outline; buttons meet AA contrast; no icon-only buttons.

## Mobile Rules

- One column; the hero stacks above the list; the add form stays at the top of the list.
- Row text and buttons never cut off: `N of 10`, `N left`, **Play** and **Remove** wrap or sit on their own line at narrow widths.
- Buttons are large enough to tap (about 44px high) for someone who is not confident with phones.
- The hero figure and its bar stay readable at phone width; the stacked bar keeps each player's name beside their mark.

## Accessibility Basics

- Body text at least 16px; muted text still meets AA on its background.
- Every figure has a text label beside it (`6 right`, `6 of 10`, `4 left`), never colour alone.
- **Right** / **Wrong** are words, with colour as a support only.
- All controls reachable and usable by keyboard, with a visible focus outline.
- Buttons and inputs have clear labels; the nickname input has a visible label, not placeholder-only.
- Page is readable and usable at phone width.

## Anti-Slop Rules

- No fake logos; no fake testimonials; no invented stats (all figures are worked out from the sample data and marked `Sample data`).
- No "lorem ipsum" in final proof.
- No emoji anywhere on the page; no box around every section; no pill around plain text.
- No timer, no percentage, grade or label for a player's score — only counts and bars.
- Nothing resembling advice, ratings or recommendations about scams: the app shows the sample reasons only.
- Readable on phone width.

## Design Verification Checklist

- [ ] Header shows app name, one-line purpose and `Sample data`.
- [ ] Hero shows the family total at 48px+ in the accent colour, the `N players, X of Y answered` line and the stacked bar with a mark per player.
- [ ] Player rows are one list split by thin lines; each has a colour mark, bold name, `N right`, a bar and `N of 10` with `N left`.
- [ ] A Finished row is muted, says `Finished`, has a full grey bar and no Play button.
- [ ] Answer view shows sender, message, **Scam**/**Legit**, then **Right**/**Wrong**, the correct answer, the reasons, and **Next message**.
- [ ] Calm mood: one accent colour, tinted page background, at most two standout surfaces, no box-in-box, no border-plus-shadow.
- [ ] Phone width: one column, nothing cut off, tappable buttons.
- [ ] No emoji, no fake logos, no invented stats, no real names/numbers/links.

## Visual recipe

The build follows this section card by card. The style above sets the colours, typeface and mood; this section fixes what the page shows and how its surfaces, rows and icons are built, and wins wherever the two differ. For a page that shows rows and a main figure:

- Header: the app name, the one-line purpose under it, and the words `Sample data` in small muted text. A small inline SVG icon or no icon, never an emoji.
- Hero: a short label, the main figure at 48px or larger in the accent colour, one line under it with the count behind it (for example `4 plans in progress`), and a stacked bar showing each counted row's share of the main figure, one colour per row, and under the bar, each counted row's name and amount beside a small mark in its colour.
- Rows: one list, not a box per row. Each row: a small mark in that row's colour, the name in bold, the main amount on the right, and under them a bar for done of total with the text `6 of 12` and the words `6 left` beside it. Rows are split by a thin line. A finished row is muted, says `Finished` in place of `6 left`, and has a full grey bar.
- Colour: one accent colour from the style, plus a five-colour row palette, every colour with AA contrast on its background.
- Surfaces: the page background is tinted lightly with the accent, never plain white or plain grey. At most two areas stand out from it (for example the hero and the list, with any add form at the top of the list). Never a box inside a box, never a border and a shadow on the same thing, no shadow on rows.
- Width: on a screen wider than 900px, use the width (the hero beside the list, or the hero as a full-width band above it). On a phone, one column.
- Type: the style's typeface for words and numbers, with tabular numbers (CSS `font-variant-numeric: tabular-nums`) so figures line up. Emphasis comes from size and weight, not from boxes or pills. The only boxes in a row are its controls (buttons, tick boxes, inputs).
- Motion: bars grow from 0 when the page loads (a CSS transition). Nothing else moves.
- No new library: plain CSS and inline SVG. No emoji anywhere on the page: they look different on every device.

For an app where the learner adds or changes items, use the same row recipe for the items and the hero for the count that matters most.