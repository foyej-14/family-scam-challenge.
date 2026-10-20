# Work Card 02: First Visible Version

## Goal

Build the layout and the `## Visual recipe` from `design.md` — header, hero, rows, colour, surfaces, width, type — with the sample data on screen. Nothing interactive yet.

## Inputs

- `build-status.md`
- `build-blueprint.md`
- `design.md`
- `architecture.md`

## Files likely touched

- `src/App.jsx`
- `src/messages.js` (ten sample messages)
- `src/players.js` (seed players)
- CSS files
- `build-status.md`

## Instructions for the coding agent

1. Read `build-status.md`, `build-blueprint.md`, `architecture.md` and `design.md` first. Follow the `## Visual recipe` in `design.md` card by card; it wins where it differs from the style.
2. Add the ten sample messages in `src/messages.js`, ids 1–10 in order, each `{ id, sender, text, correct, reasons }`, exactly as in `project-brief.md` sample data. No real links or phone numbers.
3. Add the seed players in `src/players.js`: Mak Cik Ros (Scam on 1 and 6, Legit on the rest), Adik (1–6, all Scam), Pak Long (1–3: Legit, Legit, Scam).
4. Build the static layout: header (app name, one-line purpose, `Sample data` in small muted text), hero (family total at 48px+ in the accent colour, the `3 players, 19 of 30 answered` line, and the stacked bar split 6, 4, 2 with a name + mark per player), the player list (add form area at the top, then rows), and the 997 footer line.
5. Each row: colour mark, bold nickname, `N right` on the right, and under them a bar with `N of 10` and `N left`. A player with all ten answered shows `Finished`, a full grey bar and no Play button.
6. Apply the exact colours, tinted background, one-list-not-cards, thin line dividers, tabular numbers and type sizes from `design.md`.
7. Show the correct seed figures: Mak Cik Ros `6 right` / `6 of 10`… (**note:** Mak Cik Ros is `6 right`, `10 of 10`, Finished), Adik `4 right`, `6 of 10`, `4 left`, Pak Long `2 right`, `3 of 10`, `7 left`. These may be typed in for this card; Card 03 works them out in code.

## What not to do

- Do not wire up Play, Scam/Legit, Next message, Add or Remove yet: this card is the static look only.
- Do not add `localStorage` yet.
- Do not add emoji, extra libraries, shadows on rows, boxes around sections, or fake logos/stats.
- Do not change the sample data.

## Done when

- The page shows the header, hero, all three seed player rows and the 997 footer, matching `design.md`.
- Colours, spacing, type and the stacked bar match the `## Visual recipe`.
- The layout is correct at wide width (hero beside the list) and at phone width (one column).

## Verification steps

- Header shows app name, one-line purpose and `Sample data`.
- Hero shows the figure `12` at 48px+, the line `3 players, 19 of 30 answered`, and a stacked bar with three slices labelled for Mak Cik Ros, Adik and Pak Long.
- Rows are one list split by thin lines (not a card each): each has a colour mark, bold name, `N right`, a bar with `N of 10` and `N left`.
- Mak Cik Ros's row shows `6 right`, `10 of 10`, `Finished`, a full grey bar and no Play button.
- Adik shows `4 right`, `6 of 10`, `4 left`; Pak Long shows `2 right`, `3 of 10`, `7 left`.
- The footer line reads exactly: `Lost money to a scam? Call the National Scam Response Centre at 997.`
- No emoji anywhere; no shadow on rows; the page background is tinted with the accent, not plain white.

Design check: header, hero, rows, colour, surfaces, width and type follow the `## Visual recipe` in `design.md`; one list not cards; nothing cut off at phone width.

## Localhost test before continuing

After this card, the learner should test:

- The page opens on localhost and shows the header, the big `12`, and the three player rows.
- Mak Cik Ros's row shows `Finished` and a full grey bar with no Play button.
- The 997 line is at the bottom of the page.
- At phone width the page is one column and no text or bar is cut off.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after the static layout matches `design.md`. Do not start Card 03.

## Status
Done