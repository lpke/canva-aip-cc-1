## Project

The task is to build a "Canva clone" in as short of a time as possible.

### Features

Feature set to be kept strictly minimal.

- DOM-based (given time constraints)
- Canvas area
- Elements that can be added: box, text
- Elements are clickable, draggable, resizeable, can have color changed
- No export or session/storage persistence for now

## Tech

- Vite + React
- TypeScript
- Vitest
- Prettier
- Tailwind

## Rules

- **Formatting:** When creating brand new files or making large edits, run `pnpm format:all` when you are done with all edits. For single-file-only edits, run `pnpm format <file>` when done with all edits.
- **Dev servers:** Do not kill existing dev servers unless explicitly asked to. If you start a dev server while responding to a request, ensure that it is stopped when you are done.
- Do NOT over-engineer or over-style. Aim for the most human-readable, easy to review code possible. The less lines the better.
- Do NOT build past the scope of the user's request. Keep edits tight and constrained. Assume the user wants to build this step-by-step and will review after every step, so you need to keep in your lane.
- Extract shared components and logic where it would result in cleaner or more readable code.
- Prefer to not pack too much into one single file.

## Design Rules

- Keep the UI simple, light, and utilitarian.
- Prefer layouts where work areas and controls feel directly connected, with no unnecessary chrome or padding between them.
- Write styles and compose components for human-readability and easy review.
- Use `bg-slate-200` for the page, `bg-white` for panels, `text-slate-900` for main text, and `text-slate-500` for supporting text.
- Use `border border-slate-300 bg-white p-4` for cards and panels.
- Use `bg-blue-950 text-white hover:brightness-120` for primary actions.
- Use `bg-slate-200 text-slate-700 hover:brightness-102` for secondary actions.
- Buttons use `rounded`, `font-medium`, subtle hovers, and transparent borders when no visible border is desired so heights still match.
- Buttons and inputs should use the same border radius.
- Inputs use `border border-slate-300 text-base`; focus uses `focus:border-slate-700 focus:outline-none`.
- Avoid animations, gradients, decorative effects, and extra variants, unless required.
- Avoid overuse of cards, especially nested cards.
- Where applicable, dont forget to use the correct cursor types for the job
