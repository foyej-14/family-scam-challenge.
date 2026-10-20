# Work Card 03: Core Behaviour

## Goal

Make it work: add a player, answer a message (mark it), and remove a player — all in memory. A refresh may lose changes until Card 04, and this card's test says so.

## Inputs

- `build-status.md`
- `build-blueprint.md`
- `architecture.md`
- `design.md`
- `work-cards/02-first-visible-version.md`

## Files likely touched

- `src/App.jsx`
- `src/players.js` (helpers that work out counts and totals)
- `src/messages.js`
- new components: `AnswerView`, `AddPlayerForm`, `PlayerRow` (or similar)
- CSS files
- `build-status.md`

## Instructions for the coding agent

1. Read `build-status.md`, `build-blueprint.md`, `architecture.md` and `design.md` first.
2. Hold the players list in React state (no `localStorage` yet).
3. **Add:** the add form at the top of the list takes a nickname and adds a new player with a unique id, an empty `answers` and a `createdAt`.
4. **Answer / mark:** pressing **Play** on a row opens the answer view on that player's next unanswered message — always the lowest unanswered id, so in order 1 to 10. Show the sender and the message, with **Scam** and **Legit**. On a press, record that answer, then show **Right** or **Wrong**, the correct answer, and the reasons from the sample data, then **Next message**.
5. An answered message cannot be changed: **Play** always moves to the next unanswered message. **Next message** shows the next one, or closes the view when the player is Finished.
6. **Remove:** pressing **Remove** on a row deletes that player and updates the figures.
7. Work out every figure in code from the current answers: each player's right count, `N of 10`, `N left` / `Finished`; the hero figure (sum of right answers); the `N players, X of Y answered` line; and the stacked bar's share per player. Do not type any figure into the page by hand any more — replace the Card 02 typed values.
8. Keep the `## Visual recipe` look: the bar fills by answered-out-of-10; a Finished row is muted, says `Finished` with a full grey bar and no Play button.

## What not to do

- No `localStorage` yet: a refresh may lose changes, and that is expected on this card.
- Do not add a timer, shuffling, or a percentage/grade/label score.
- Do not judge a message a user pastes in: the app only answers the ten sample messages.
- Do not change the sample data or the fixed order 1 to 10.

## Done when

- A player can be added, can answer their next message with **Right**/**Wrong** + reasons + **Next message**, and can be removed.
- Every figure on the page is worked out from the current answers, not typed in.
- The seed figures still come out right when the page loads.

## Verification steps

- Add a player: the new row appears with `0 right`, `0 of 10`, `10 left`.
- Press **Play** on Adik: the view shows message 7 (Adik answered 1–6). Press **Legit**: it says **Wrong**, shows the correct answer **Scam**, the reasons, then **Next message**.
- After answering, Adik's row reads `4 right`, `7 of 10`, `3 left` (the rule: a right answer only counts when the press matches the message's `correct` value).
- Hero updates each time: with the seeds alone it reads `12` and `3 players, 19 of 30 answered`, with the bar split 6, 4, 2.
- Answering Mak Cik Ros is not possible from a full row: she stays `Finished`.
- Remove Pak Long: his row disappears and the hero reads `10` and `2 players, 13 of 20 answered` (rule: removing a player removes their right answers and their `of` count too).
- Refresh the browser: changes are gone (expected on this card).

Design check: item list, input, update/delete controls, empty state, and mobile stacking follow `design.md` (one list, quiet Remove control, Play in the accent, nothing cut off at phone width).

## Localhost test before continuing

After this card, the learner should test:

- Add a player by nickname and see the new row with `0 of 10` and `10 left`.
- Press **Play**, answer **Scam**/**Legit**, see **Right**/**Wrong** with the correct answer and reasons, then **Next message**.
- Press **Play** on a player who has answered some messages and confirm the next message is the next number in order (never re-shown).
- Remove a player and confirm the row disappears and the hero figure changes.
- Refresh the browser and confirm the changes are lost — this is expected until Card 04.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after add, answer and remove work in memory and the figures are worked out. Do not start Card 04.

## Status
Done