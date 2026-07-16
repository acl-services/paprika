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
