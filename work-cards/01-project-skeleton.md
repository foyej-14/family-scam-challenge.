# Work Card 01: Project Skeleton

## Goal

Create the Vite + React app in this project folder, beside `START_HERE.md`, and show the app's name as a header with one line under it. Nothing interactive yet.

## Inputs

- `build-status.md`
- `build-blueprint.md`
- `design.md`
- `project-brief.md`

## Files likely touched

- `index.html` (title)
- `package.json` (name)
- `vite.config.js`, `src/main.jsx`, `src/App.jsx`, `src/App.css` / `src/index.css`
- `build-status.md`

## Instructions for the coding agent

1. Read `build-status.md`, `build-blueprint.md` and `design.md` first.
2. Create the app in a temporary subfolder:
   `npx -y create-vite@9.2.1 app-temp --template react --no-interactive`
3. Ignore the scaffolder's "cd app-temp" hint. Move everything inside `app-temp`, hidden files included, up into this project folder, next to `START_HERE.md`. Then delete the empty `app-temp` folder.
4. Set the `<title>` in `index.html` to the project name from `project-brief.md`: `Family Scam Challenge`.
5. Set the `"name"` in `package.json` to `family-scam-challenge` (small letters, dashes for spaces), not `app-temp`.
6. Replace the default `App` content with a minimal header: the app name **Family Scam Challenge** and one line under it, `A family scam challenge you play at home.` Keep `START_HERE.md`, `prompts/`, `templates/`, `work-cards/` and every planning markdown file untouched.
7. Run `npm install`, then `npm run dev`.

Never run a scaffolder with `--overwrite`, and never choose "Remove existing files": that empties this folder and deletes the planning files, `prompts/`, `templates/` and `work-cards/`.

## What not to do

- Do not build the hero, rows, add form, answer view or any figures yet.
- Do not add `localStorage` yet.
- Do not install any extra package beyond the Vite React template.
- Do not initialise Git, or set up GitHub or Vercel.

## Done when

- The Vite + React app runs in this folder, beside `START_HERE.md`, and the header shows the app name and its one line.
- All planning files, `prompts/`, `templates/` and `work-cards/` are still present.
- `build-status.md` is updated.

## Verification steps

- `npm run dev` starts the dev server without errors.
- `index.html` `<title>` is `Family Scam Challenge`; `package.json` `"name"` is `family-scam-challenge`.
- The page shows the app name and the one line under it.
- Confirm `START_HERE.md`, `project-brief.md`, `prompts/`, `work-cards/` still exist.

Design check: header shows the app name in the calm productivity mood from `design.md` (quiet surface, one accent colour, readable type).

## Localhost test before continuing

After this card, the learner should test:

- `npm run dev` starts and prints a localhost URL.
- Opening that URL shows **Family Scam Challenge** and the one line under it.
- The page has no errors in the browser console.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after the header loads and the file checks pass. Do not start Card 02.

## Status
Done