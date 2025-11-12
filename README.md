# KZTE RailHub Materials

This repo contains the polished submission package for the Superteam KZ x Intebix bounty:

- `kzte_rail_hub_proposal.md` / `.pdf`: proposal narrative and printable version.
- `kzte_bounty_challenge.md`: formatted listing summary.
- `kzte_mvp_plan.md`: 36-hour MVP build plan.
- `kzte_railhub_architecture_min_tb.*`: architecture assets embedded in the proposal.

## Commands
- `pandoc kzte_rail_hub_proposal.md -o kzte_rail_hub_proposal.pdf` to rebuild the PDF.
- `git status` to review changes before committing.

## Pull Request Preview Environments

Every pull request automatically triggers the **PR Preview** workflow, which attempts to build a static bundle and publish it to GitHub Pages under `https://<org>.github.io/<repo>/pr-<number>/`.

- When a frontend exists, ensure your branch can run `npm run build` and `npm run export` (Next.js) so the workflow can deploy the contents of the `out/` directory.
- If no static artefacts are produced, the workflow publishes a placeholder page to signal that reviewers should inspect the code changes directly.
- Closing a pull request runs a companion cleanup workflow that removes the preview directory and updates the bot comment.

