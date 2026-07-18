# Paprika Migration Prompt

You are working in the `paprika` monorepo at `/Users/etroinov/apps/paprika`.

## Objective

Help migrate the repository away from Yarn Classic semantics with the smallest structural change set that makes progress real.

The current priority is:

1. Remove heavy repository build behavior from install lifecycle hooks, especially `prepare`.
2. Update Storybook so it no longer depends on the legacy webpack 4 builder path.

Do not broaden scope unless required by one of those two goals.

## Collaboration Style

- The user prefers to run terminal commands manually.
- Do not start running install/build/migration commands unless explicitly asked.
- Instead, inspect code, explain findings clearly, and give exact commands for the user to run.
- Keep responses direct and technical.

## Current State

- Previous experimental changes were reverted.
- Assume the repository is back in its pre-migration code state unless the current file contents show otherwise.
- `MIGRATION_ISSUES.md` exists and should be treated as background context, not as the working plan document.

## Confirmed Migration Problems

### 1. Install and build are still entangled

- Historically the repo depended on Yarn Classic behavior.
- Heavy repository build work was coupled into install-era workflows.
- `prepare`/install behavior needs to become lightweight and dependency-focused.
- Build output generation must become explicit.

### 2. Storybook is a major migration blocker

- Storybook has been running on the webpack 4 builder path.
- Under `pnpm`, parts of the dependency graph resolve to webpack 5 variants.
- This created mixed webpack 4 / webpack 5 failures in practice.
- Storybook should be unified on webpack 5 instead of patched around webpack 4.

### 3. Storybook still depends on built internal package output

- Internal packages like `@paprika/tokens`, `@paprika/l10n`, and `@paprika/icon` expose `lib` entrypoints.
- Storybook resolves those published entrypoints and can fail when `packages/*/lib` is missing.
- Jest and Storybook should not be assumed to have the same workspace resolution behavior.

### 4. `@paprika/icon` type generation is fragile

- `packages/Icon/package.json` runs declaration generation with:

```json
"build-declaration": "pnpm exec tsc src/*.js --declaration --allowJs --emitDeclarationOnly --outDir src"
```

- This step is not isolated with a dedicated `tsconfig`.
- It can pick up incompatible ambient types from `node_modules`.
- This is a declaration-build isolation problem, not an icon runtime problem.
- Avoid making `@paprika/icon` declaration generation the first blocker for Storybook/runtime migration work.

### 5. Storybook memory pressure is real

- Storybook build/start can hit Node heap limits on the current story graph.
- Treat memory configuration as an operational concern during migration.

### 6. Storybook still has legacy API debt

- `@storybook/addon-knobs` is still widely used.
- `storiesOf(...)` is still present.
- This is real debt, but it is not the first step unless required by the builder migration.

## Recommended Working Strategy

### Phase 1: Stabilize install semantics

Focus on:

- auditing `package.json` lifecycle hooks
- removing heavy work from `prepare`
- making install succeed without requiring full repo build output
- making build commands explicit

Expected outcome:

- `pnpm install` is about dependency resolution, not repo-wide generation/transpile/type work.

### Phase 2: Move Storybook to webpack 5

Focus on:

- Storybook builder configuration
- Storybook package dependencies needed for webpack 5
- removing webpack 4-specific compatibility code instead of adding more
- validating whether `workerize-loader`, `.mjs` handling, and internal package resolution still need targeted fixes after the builder switch

Expected outcome:

- Storybook uses webpack 5 consistently.
- Failures, if any remain, are package-level/config-level issues, not mixed builder-generation failures.

### Phase 3: Decide internal package runtime contract for Storybook

After builder work is stable, decide one of:

- resolve internal packages from workspace `src` for Storybook, or
- keep a minimal explicit runtime build step for packages Storybook requires

Do not leave this implicit.

## Non-Goals Right Now

- Do not rewrite all stories away from `knobs`.
- Do not migrate all `storiesOf(...)` usage immediately.
- Do not modernize every Storybook deprecation warning unless it blocks the two primary goals.
- Do not treat Cypress restoration as part of the first migration step.

## Good First Questions To Answer In The New Dialog

1. What exactly does `prepare` do right now, and what can be removed from it immediately?
2. What is the minimum Storybook config/dependency change required to move from webpack 4 builder to webpack 5 builder?
3. After switching Storybook to webpack 5, which remaining failures are genuine repo issues versus transitional dependency noise?

## Response Expectations

When proposing changes:

- distinguish clearly between confirmed facts and assumptions
- prefer minimal structural fixes over compatibility shims
- if giving commands, give them as exact shell commands the user can run manually
- keep the plan narrow and directly tied to the two current priorities
