# Project Brief

## Project Identity

- Name: **Family Scam Challenge**
- One-line purpose: A browser-local family scam challenge played as a game.
- Course: AI Builder Foundations (one evening: Spec, Build, Check; four work cards; no GitHub, Vercel or deploy tonight)

## One-Sentence Concept

A browser-local game where a family adds each other by nickname and answers the same ten sample messages as **Scam** or **Legit**, so the family can see who at home would fall for one.

## Target User

My aunt: a family member who is not confident with phones, and the kind of person most at risk from scam messages. Malaysian families generally, especially a parent, a grandparent or a neighbour new to phones, who are rarely the ones who practise.

## User Goal

See who at home would spot a scam. Add each family member as a player, press **Play** on a player's row to answer that player's next message, and see **Right** or **Wrong** with the correct answer and the reasons, then the next message. Read each player's right answers, their progress bar and the family total at a glance.

## Build Shape

**Browser-local tool.** The main value is creating and changing one kind of data — players and their answers — and keeping it in the same browser after a refresh.

## Shape Confirmation

Confirmed by the learner.

## Version-One Success

- The same ten sample messages are on the screen, always in the order 1 to 10, never shuffled.
- Every player answers each message once; a player who has answered all ten is Finished.
- A player can be added by nickname and removed.
- Pressing **Play** shows the sender and the message with **Scam** and **Legit**; after a press it says **Right** or **Wrong**, shows the correct answer and the reasons from the sample data, then **Next message**.
- Each player row shows the nickname, the right answers (`6 right`), a bar for messages answered out of 10 with the text `6 of 10` and the words `4 left` (or `Finished`, a full grey bar and no Play button).
- The hero shows the right answers of all players added together, with a line like `3 players, 19 of 30 answered`, and a stacked bar showing each player's share.
- The footer line reads: `Lost money to a scam? Call the National Scam Response Centre at 997.`
- Everything stays after a browser refresh.

## Now / Later / Never

### Now

- Add a player by nickname; answer messages as that player; remove a player.
- The ten sample messages, fixed order 1 to 10, one play per message per player.
- Right/Wrong feedback with the correct answer and the reasons from the sample data.
- Each player's right count, progress bar and `left`/`Finished` state.
- The hero total and stacked bar, worked out from the sample data.
- The 997 National Scam Response Centre line at the bottom.
- Save players and answers in `localStorage`.

### Later

- More message sets; player avatars or colours the family chooses; a reset for one player.
- Publishing (taught in Build & Ship, the paid cohort).

### Never (tonight)

- User accounts, payments, a database, a backend, live data or sync between devices.
- Judging a real message a user pastes in: the app never says whether a pasted message is a scam.
- Real bank, courier or shop names, real phone numbers or real links.
- A timer, shuffled messages, or a score shown as a percentage, a grade or a label.

## Assumptions

- Players and their answers are the one data type kept; saved under one `localStorage` key.
- The ten messages are sample data shipped with the app, identical for every player.
- The three players already in the game (Mak Cik Ros, Adik, Pak Long) are seeded as sample data: Mak Cik Ros answered all ten (Scam on 1 and 6, Legit on the other eight); Adik answered 1 to 6 (Scam on all six); Pak Long answered 1 to 3 (Legit, Legit, Scam).
- No real people's names, phone numbers, IC numbers, account numbers, real balances or company names anywhere in the app.

## Proof Target

The app runs on localhost and shows the sample players with their worked-out figures: Mak Cik Ros `6 right`, `10 of 10`, `Finished`; Adik `4 right`, `6 of 10`, `4 left`; Pak Long `2 right`, `3 of 10`, `7 left`; hero `12` with `3 players, 19 of 30 answered`, its bar split 6, 4, 2. Adding a player, answering a message and removing a player all work, and everything survives a browser refresh. No GitHub or Vercel tonight.

## Trainer / Learner Notes

- The learner's own answer 2: "for my aunt" — a family member not confident with phones.
- Question 2 is the one the learner made theirs; the sample data is unchanged.