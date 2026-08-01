# AGENTS.md

## Project goal

This repository contains my personal portfolio.

The portfolio should communicate professionalism, technical competence,
clarity, and attention to detail.

## Working principles

- Inspect the existing implementation before making changes.
- Preserve the current stack and established project patterns.
- Prefer simple, readable, and maintainable solutions.
- Avoid unnecessary abstractions and premature generalization.
- Do not add dependencies unless they provide a clear benefit.
- Do not rewrite the entire project when an incremental improvement is enough.
- Keep changes focused on the requested task.
- Preserve existing working features unless explicitly asked to change them.

## Design and UX

- Prioritize clear visual hierarchy and readable typography.
- Use consistent spacing, sizing, alignment, and component patterns.
- Maintain responsive behavior for desktop and mobile.
- Follow accessibility fundamentals, including semantic HTML, keyboard
  navigation, focus states, readable contrast, and descriptive labels.
- Avoid excessive animations, visual noise, and decorative effects without
  purpose.
- Prefer a professional, clean, and distinctive visual identity.
- The brand accent color is #FFAA00, called "amarelo jooj".
- Use the accent color intentionally rather than covering the interface with it.
- Do not sacrifice usability or contrast to preserve the brand color.

## Code quality

- Follow the project's existing formatting and naming conventions.
- Reuse components when it reduces duplication without creating unnecessary
  complexity.
- Keep presentation, state, and business logic appropriately separated.
- Remove dead code only when its lack of use has been verified.
- Do not silence errors with unsafe casts or broad exception handling.
- Avoid unrelated formatting changes that make the diff harder to review.

## Validation

After implementing a change:

1. Run the available formatter and linter.
2. Run relevant tests.
3. Run the production build.
4. Fix issues introduced by the change.
5. Summarize the modified files and important decisions.
6. Report commands that could not be executed.
7. Report assumptions, risks, and remaining manual checks.

## Git and safety

- Never commit or push changes automatically.
- Never modify secrets, credentials, or environment values.
- Never discard existing uncommitted user changes.
- Do not run destructive commands without explicit permission.
- Keep the final diff reviewable.