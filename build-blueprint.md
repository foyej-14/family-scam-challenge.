# Build Blueprint

## Source Files

- `project-brief.md`
- `architecture.md`
- `design.md`

## Project Identity

- Name: **Family Scam Challenge**
- One-line purpose: A browser-local family scam challenge played as a game.
- Course: AI Builder Foundations — one evening: Spec, Build, Check. Four work cards. No GitHub, Vercel or deploy tonight.

## Build Shape

**Browser-local tool.** The main value is creating and changing one kind of data — players and their answers — kept in the same browser after a refresh.

## Version-One Promise

The app runs on localhost and lets a family add players by nickname, press **Play** to answer each player's next message as **Scam** or **Legit**, see **Right** or **Wrong** with the correct answer and the reasons, and read each player's right count, progress and the family total — all worked out from the sample data, all kept after a browser refresh.

## Scope Lock

### Now

- Add a player by nickname; answer messages as that player; remove a player.
- Ten sample messages, fixed order 1 to 10, never shuffled; each player answers each once.
- **Scam** / **Legit** buttons; **Right** / **Wrong** feedback with the correct answer and reasons; **Next message**.
- Each player row: nickname, `N right`, progress bar with `N of 10`, `N left` (or `Finished` + full grey bar + no Play).
- Hero: family total (right answers of all players added together), `N players, X of Y answered`, stacked bar.
- Footer line: `Lost money to a scam? Call the National Scam Response Centre at 997.`
- `localStorage` save + refresh persistence.

### Later

- More message sets, player colours chosen by the family, single-player reset.
- Publishing (Build & Ship, the paid cohort).

### Never (tonight)

- Accounts, payments, database, backend, live data, multi-user sync.
- Judging a real message a user pastes in.
- Real bank/courier/shop names, real phone numbers, real links.
- Timer, shuffled messages, percentage/grade/label scores.

## Architecture Summary

- Vite + React, plain CSS, browser `localStorage`. No backend, auth, database, payment, live API or secret keys.
- One screen: header, hero, add form + player list, answer view (on **Play**), 997 footer.
- One data type: **Player** `{ id, nickname, answers: { messageId: 'scam'|'legit' }, createdAt }`.
- Ten messages are fixed sample data in code: `{ id, sender, text, correct, reasons[] }`, ids 1–10.
- All figures come from stored answers; nothing typed into the page by hand.
- App lives in this project folder, beside `START_HERE.md`.

## Data / State / Storage Rules

- `localStorage` key: `family-scam-challenge.players.v1` (single key, whole players array as JSON).
- On load: read key; if empty/unreadable, use the seed players.
- On any change (add / answer / remove): write the whole array back.
- Seed players: Mak Cik Ros (all ten; Scam on 1 and 6, Legit on the rest), Adik (1–6, all Scam), Pak Long (1–3: Legit, Legit, Scam).
- Worked-out rules: right = answers matching `correct`; answered = keys in `answers`; `left` = 10 − answered; Finished when answered = 10; hero = sum of right answers; hero line = `<players> players, <total answered> of <players × 10> answered`; stacked bar = each player's right answers as a share of the hero figure.
- Seed figures (must match): Mak Cik Ros `6 right`, `10 of 10`, Finished; Adik `4 right`, `6 of 10`, `4 left`; Pak Long `2 right`, `3 of 10`, `7 left`; hero `12`, `3 players, 19 of 30 answered`, bar split 6, 4, 2.
- Next message = lowest unanswered id (so always in order 1 to 10).

## Design Direction Summary

- **Borrow:** the calm productivity mood — one accent colour used sparingly, quiet spacing, rows as one list split by thin lines, hierarchy by size and weight, soft tinted page background.
- **Do not copy:** any real brand, logo, colour scheme, icon set, copy or layout grid; no fake logos/testimonials/stats; no real names, numbers or links.
- Accent `#0f766e`; tinted background `#f4f8f7`; white surface; row palette teal/amber/blue/purple/rose; **Right** accent, **Wrong** `#b91c1c`.
- The learner's own thing: made for **them and their aunt** — calm, steady, readable at a glance.
- Follow the `## Visual recipe` in `design.md` card by card; it wins wherever it differs from the style.

## Implementation Rules

- Plain CSS only; no new library; inline SVG or no icon, never an emoji.
- `font-variant-numeric: tabular-nums` on all figures.
- Bars grow from 0 on load with a CSS transition; nothing else moves.
- Labels as text beside every figure (`6 right`, `6 of 10`, `4 left`); colour never the only signal.
- Keyboard reachable controls with a visible focus outline; nickname input has a visible label.
- Mobile: one column, nothing cut off, buttons ~44px high.
- Sample data only; the app never judges a real pasted message.

## File and Folder Expectations

- Keep unchanged: `START_HERE.md`, `project-brief.md`, `architecture.md`, `design.md`, `build-blueprint.md`, `build-status.md`, `prompts/`, `templates/`, `work-cards/`.
- Created by Card 01 beside `START_HERE.md`: `index.html`, `package.json`, `vite.config.js`, `src/` (entry, components, `messages.js`, `players.js`, CSS).
- Scaffold in a temp `app-temp` folder, move contents up (hidden files included), delete `app-temp`. Never use `--overwrite` or "Remove existing files".

## Work Card Plan

1. **01 Project skeleton** — the Vite + React app in this folder; app name as a header and one line under it.
2. **02 First visible version** — the layout and the `## Visual recipe` from `design.md` (header, hero, rows, colour, surfaces, width, type) with the sample data on screen; nothing interactive yet.
3. **03 Core behaviour** — add a player, answer a message (mark it), remove a player, all in memory; a refresh may lose changes until Card 04, and the card's test says so.
4. **04 Save or polish** — save with `localStorage`, the refresh proof, the empty state, phone width, and the final check of every line of the `## Visual recipe`.

## Review Mirror

Optional tonight, `prompts/07-review-mirror.md`, not a work card.

## Proof Ladder

- The app running on localhost, improved your way. No GitHub or Vercel.

## 60-Second Explanation Template

"I built **Family Scam Challenge**, a browser-local game for my family — my aunt especially, and me. You add each person by nickname, then press **Play** on a row to answer that person's next message as **Scam** or **Legit**. It tells you **Right** or **Wrong**, shows the correct answer and the reasons, and keeps going in order 1 to 10. Every player row shows their right answers, a bar with `N of 10` and how many are `left`, or `Finished`. The big figure is the family's right answers added together, with a line like `3 players, 19 of 30 answered`. It all stays after a refresh, and there is a line at the bottom pointing to the National Scam Response Centre at 997."

## Guardrails for the Coding Agent

- Read `build-status.md`, `build-blueprint.md`, and the current work card before editing.
- Implement only the current work card; do not jump ahead.
- Stop after verification; update `build-status.md` after each work card.
- Do not add backend/auth/database/API unless this blueprint explicitly allows it.
- Do not add secrets or keys to code.
- Do not invent claims, testimonials, logos, or real numbers.
- Apply the browser-local tool guardrails: one data type, add one real sample item, update/mark it, delete it, save with `localStorage`, refresh proof, empty state, mobile check.
- No action the brief does not have (no pay, apply or add beyond adding a player); the page keeps the family figure as the most prominent thing.
- Figures only, worked out from the sample data: never advise, rate or recommend, and never compute interest.
- If a legacy file uses `Build Mode`, treat it as `Build Shape` without stopping.
- Do not start Ship (Git, GitHub, Vercel, deploy) tonight.