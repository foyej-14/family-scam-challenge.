# Work Card 04: Save or Polish

## Goal

Save the players and their answers with `localStorage`, prove it survives a refresh, add the empty state, check phone width, and do a final check of every line of the `## Visual recipe`.

## Inputs

- `build-status.md`
- `build-blueprint.md`
- `architecture.md`
- `design.md`
- `work-cards/03-core-behaviour.md`

## Files likely touched

- `src/App.jsx` (load/save)
- `src/players.js` (storage helpers)
- CSS files
- `build-status.md`

## Instructions for the coding agent

1. Read `build-status.md`, `build-blueprint.md`, `architecture.md` and `design.md` first.
2. Save the whole players array to `localStorage` under the key `family-scam-challenge.players.v1` on every change (add, answer, remove).
3. On load, read that key: use the saved players when present; fall back to the seed players only when the key is empty or unreadable.
4. Add the empty state: when there are no players, show a clear message with the add form still available (for example: `No players yet. Add someone to start the challenge.`). Never a blank page.
5. Phone width: one column, the hero above the list, the add form at the top of the list, and `N of 10`, `N left`, **Play** and **Remove** never cut off; buttons tappable (~44px).
6. Bars grow from 0 on page load with a CSS transition; nothing else moves.
7. Final check of every line of the `## Visual recipe`: header (name, purpose, `Sample data`), hero (figure 48px+ in the accent, count line, stacked bar with a name + mark per slice), rows (colour mark, bold name, `N right`, bar with `N of 10`, `N left`; Finished = muted, full grey bar, no Play), tinted background, at most two standout surfaces, no box-in-box, no border-plus-shadow, no shadow on rows, no emoji, tabular numbers.
8. Accessibility basics: body text 16px+, visible focus outline on every control, the nickname input has a visible label (not placeholder-only), `Right`/`Wrong` shown as words as well as colour, and every figure labelled in text.

## What not to do

- Do not change the sample data, the fixed order 1 to 10, or the seed figures.
- Do not add a timer, shuffling, a percentage/grade/label score, or any new library.
- Do not add accounts, payments, a database, a backend, a live API or secret keys.
- Do not start Git, GitHub, Vercel or a deploy.

A site saves nothing — but this is a browser-local tool, so this card is its save card, not just polish.

## Done when

- Players and their answers survive a browser refresh.
- The empty state shows clearly when no players exist, with the add form available.
- Phone width works with nothing cut off.
- Every line of the `## Visual recipe` in `design.md` is true, and the accessibility basics pass.

## Verification steps

- Add a player, answer one message, refresh the browser: the player and their answer are still there.
- Remove all players: the empty-state message shows and the add form still works.
- Add a player after the empty state: it saves and survives another refresh.
- Seed figures on first load (before any change): Mak Cik Ros `6 right`, `10 of 10`, Finished; Adik `4 right`, `6 of 10`, `4 left`; Pak Long `2 right`, `3 of 10`, `7 left`; hero `12`, `3 players, 19 of 30 answered`, bar split 6, 4, 2.
- Phone width (about 375px): one column, nothing cut off, buttons tappable.
- Bars grow from 0 on load; nothing else moves.
- No emoji anywhere; every figure has a text label.

Design check: item list, input, update/delete controls, empty state, and mobile stacking follow `design.md`; the saved state is visible after refresh.

## Localhost test before continuing

After this card, the learner should test:

- Add a player, answer a message, then refresh the browser — the player and the answer are still there.
- Remove every player and confirm the empty-state message shows, then add a player again.
- Check the page at phone width and confirm nothing is cut off.
- Confirm the seed figures on a fresh load match `6 right / 4 right / 2 right` and the hero `12` with `3 players, 19 of 30 answered`.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## After this card: tick chapter 03

End your first checkpoint message for this card (the one that gives its localhost tests) with these two lines, exactly, as plain chat text, never inside a code block (or the link cannot be clicked):

**Your cards are built. Next: tick chapter 03 on your class page.**
[Open chapter 03, Build and test](https://learn.theaibuilder.school/courses/ai-builder-foundations/modules/3) and press **I built my cards**. Then come back to this chat.

When the learner replies `continue`, start your reply with the same two lines.

## Stop condition

Stop after the refresh proof, the empty state and the mobile check pass. Do not start Ship.

## Status
Done