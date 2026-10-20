# Architecture

## Build Shape

**Browser-local tool.** The main value is creating and changing one kind of data — players and their answers — kept in the same browser after a refresh.

## Stack Decision

- Vite + React (JavaScript, `--template react`).
- Plain CSS (no Tailwind this session).
- Browser `localStorage` for persistence.
- No backend, no auth, no database, no payment, no live API, no secret keys.

## Structure Overview

A single-page app in this project folder, beside `START_HERE.md`.

- Fixed sample data: the ten messages and the three seeded players live in the code as plain objects.
- One screen: header, hero (family total), the player list with an add form, the answer view shown when a player presses **Play**, and the 997 footer line.
- All figures come from the stored answers; nothing is typed in by hand.

## Component Map

- `App` — holds players state, loads/saves `localStorage`, lays out the page.
- `Header` — app name, one-line purpose, `Sample data` label.
- `Hero` — main figure (right answers of all players added together), the `N players, X of Y answered` line, and the stacked bar.
- `AddPlayerForm` — nickname input and add button (at the top of the list).
- `PlayerList` / `PlayerRow` — nickname, `N right`, progress bar with `N of 10`, `N left` or `Finished`, **Play** button, **Remove**.
- `AnswerView` — sender, message text, **Scam** / **Legit**, then **Right** / **Wrong** with the correct answer and the reasons, then **Next message**.
- `ScamLine` — the fixed 997 footer line.
- `messages.js` — the ten sample messages (id, sender, text, correct answer, reasons).
- `players.js` — seed players and the helpers that work out right counts, progress and totals.

## Data / State Model

One data type: **Player**.

- `id`: string (unique, generated on add).
- `nickname`: string (the player's name).
- `answers`: object mapping `messageId` (1–10) to `'scam'` or `'legit'`; a message with no entry is unanswered.
- `createdAt`: number (timestamp, keeps list order stable).

Fixed sample data (not stored per player):

- `messages`: ten items, each `{ id, sender, text, correct: 'scam' | 'legit', reasons: string[] }`, always in order 1 to 10.
- Seed players: Mak Cik Ros (all ten answered; 6 right), Adik (1–6; 4 right), Pak Long (1–3; 2 right).

Worked-out figures (rules):

- A player's right answers = count of answers matching the message's `correct` value.
- `of 10` = number of answered messages (out of 10).
- `left` = 10 − answered; if answered = 10 the row is **Finished**.
- Hero figure = sum of every player's right answers (seed sample: 12).
- Hero line = `<player count> players, <answered across all players> of <players × 10> answered` (seed sample: `3 players, 19 of 30 answered`).
- Hero stacked bar = each player's right answers as a share of the hero figure (seed sample: 6, 4, 2).

## Storage Logic

- One `localStorage` key: `family-scam-challenge.players.v1`.
- On load: read the key; if empty or unreadable, fall back to the seed players.
- On every change (add player, record an answer, remove player): write the whole players array back to the key as JSON.
- Refresh persistence test: add a player, answer a message, refresh the browser, and confirm the player and their answer are still there.

## User Flow

1. Page opens showing the header, hero and player list (seeded sample players on first run).
2. Add a player: type a nickname, press Add; the row appears in the list.
3. Press **Play** on a row: the answer view shows that player's next unanswered message (lowest message id first, i.e. in order 1 to 10), with **Scam** and **Legit**.
4. Press **Scam** or **Legit**: the view says **Right** or **Wrong**, shows the correct answer and the reasons, and offers **Next message**.
5. **Next message** shows the player's next unanswered message, or closes the view if the player is Finished.
6. Remove a player: press **Remove** on the row; the row disappears and the hero updates.
7. A player who has answered all ten shows **Finished**, a full grey bar and no Play button.
8. The hero total and its stacked bar always reflect the current stored answers.

## File Expectations

- Planning files stay as they are: `START_HERE.md`, `project-brief.md`, `architecture.md`, `design.md`, `build-blueprint.md`, `build-status.md`, `prompts/`, `templates/`, `work-cards/`.
- App files are created in this folder beside `START_HERE.md` by Work Card 01: `index.html`, `package.json`, `vite.config.js`, `src/` (React entry, components, `messages.js`, `players.js`, CSS).
- The scaffolder runs in a temporary `app-temp` subfolder and its contents are moved up; nothing existing in this folder is overwritten or deleted.

## Constraints

- One data type only (Player). No second table, no uploads, no admin, no multi-user sync.
- Ten messages fixed in the code, order 1 to 10, never shuffled; each player answers each message once.
- No timer, no percentage/grade/label score.
- No real bank, courier or shop names, real phone numbers, real links or real personal data: sample data only.
- App never judges a message pasted in by a user.

## Technical Non-Goals

- No login, accounts, payments, database, backend, live API or secret keys.
- No Git, no GitHub, no Vercel, no deploy tonight.
- No pasted-message checker.
- No phone number or link in any sample message; 997 is a fixed footer line only (a public hotline name, not a message).

## Verification Notes

- Seed figures must match the problem exactly: Mak Cik Ros `6 right`, `10 of 10`, Finished; Adik `4 right`, `6 of 10`, `4 left`; Pak Long `2 right`, `3 of 10`, `7 left`; hero `12`, `3 players, 19 of 30 answered`, bar split 6, 4, 2.
- Answer order is fixed: a player's next message is always the lowest unanswered id.
- Refresh test: add → answer → refresh → data still present.
- Empty state: no players shows a clear message, not a blank page.
- Mobile width: the page works at phone width with no cut-off text or buttons.