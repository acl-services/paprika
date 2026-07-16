# Paprika monorepo — setup & test instructions

## Node version

This repo pins its Node version in `.nvmrc`. Use that version before any install/build/test command below:

```bash
nvm use
```

## Initial setup (build internal packages)

Internal `@paprika/*` packages (e.g. `@paprika/l10n`) are symlinked via yarn workspaces but ship no `lib/` output until built. Without this step, tests fail with `Cannot find module '@paprika/l10n'` (or any other `@paprika/*` package).

```bash
nvm use
yarn install
node_modules/.bin/lerna bootstrap
```

Notes:

- Use `node_modules/.bin/lerna` directly — `npx lerna` can silently fail under corepack in some shells.
- `lerna bootstrap` runs `pretranspile` for packages that need it (e.g. `@paprika/l10n` builds translation files), then transpiles `src/` → `lib/` for every package.
- Re-run this after pulling changes that touch translations or any package's public build output.

## Running tests

```bash
nvm use
node_modules/.bin/jest packages/<PackageName>/tests/spec
```

Example:

```bash
node_modules/.bin/jest packages/Filter/tests/spec
```

`yarn test` / `npx jest` may fail to resolve the `jest` binary or the `@testing-library/jest-dom/extend-expect` setup file depending on shell/corepack state — prefer the direct `node_modules/.bin/jest` invocation above.

## Testing hooks

This repo's `@testing-library/react` version (10.x) does **not** include `renderHook`. Use `@testing-library/react-hooks` instead:

```js
import { renderHook, act } from "@testing-library/react-hooks";
```

## Creating a pull request

### PR description template

Use the existing PRs (e.g. #1344) as a style reference. Required sections:

```
### Purpose 🚀
### Notes ✏️
### Updates 📦
### Storybook 📕
### References 🔗
```

### Storybook URL placeholder

The `storybook-link` CI job runs `scripts/storybookLink.js` on every PR open/update. It looks for a Storybook URL or placeholder in the PR body and replaces it with the real branch URL. **Always include this placeholder in the Storybook section**, even for CI-only or docs PRs:

```
http://storybooks.highbond-s3.com/paprika/your-branch-name
```

If this placeholder (or an existing Storybook URL) is missing, the job fails with:
```
No Storybook URL or placeholder found in PR description
```

### Commit message format

This repo enforces [Conventional Commits](https://www.conventionalcommits.org/) via a commit-msg hook. The format is:

```
type(AffectedComponent): RCP-XXXXX short description
```

Supported types: `feat`, `fix`, `style`, `test`, `docs`, `build`, `chore`, `ci`, `perf`, `refactor`, `revert`

Examples:
```
chore(CI): RCP-43291 extract composite action and modernize pipeline
fix(Filter): RCP-42687 removes immer dependency and fixes related bugs
```

Commits without a valid type will be rejected by the pre-commit hook.

### Local composite actions and checkout

`.github/actions/setup-paprika` is a local composite action. GitHub Actions must have the repo checked out **before** calling any local action — the runner cannot resolve `uses: ./.github/actions/...` without the files present. Always add an explicit `actions/checkout` step in the job **before** `uses: ./.github/actions/setup-paprika`.
