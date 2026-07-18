# Migration Issues

## 1. Yarn v1 / classic workflow lock-in

The repository is still heavily coupled to Yarn Classic behavior.

Observed issues:

- The repo started from a Yarn v1 lockfile and legacy Yarn config.
- Root scripts were written against `yarn` commands and Yarn Classic CLI behavior.
- CI and local setup historically depended on `yarn install` followed by `lerna bootstrap`.
- `lerna bootstrap` was not just linking workspaces; it also acted as an implicit build step for internal packages.

Impact:

- Package manager migration is not just a lockfile swap.
- A plain install can fail or behave differently because the repo expects Classic-era script semantics.
- Tooling changes are harder to isolate because install, bootstrap, and build were historically mixed together.

## 2. Tests depended on built artifacts instead of workspace source

Jest was resolving internal `@paprika/*` packages through each package's published entrypoint, which points to `lib`.

Observed issues:

- Internal packages such as `@paprika/l10n` expose `main: lib/index.js`.
- Without a prior build, Jest failed with `Cannot find module '@paprika/l10n'`.
- The old workflow masked this because `lerna bootstrap` generated `lib` before tests ran.
- This made test execution depend on a repo-wide build rather than only on source files.

Impact:

- Test failures could be caused by missing build output rather than by test or source regressions.
- Install-only experiments were blocked by unrelated build problems.
- Local feedback loops were slower and more fragile than necessary.

Current direction:

- Keep install and build as separate steps.
- Resolve internal workspace packages from `src` during Jest runs.
- Keep explicit repo build commands for package output validation and publish flows.

## 3. Install lifecycle was coupled to repository build via `prepare`

The root `prepare` script was doing full repository build work instead of acting as a lightweight install hook.

Observed issues:

- `prepare` performed cleanup, `lerna run pretranspile`, transpilation, type generation, and README generation.
- A normal package installation triggered repo-wide build behavior.
- Under `pnpm`, this caused `pnpm install` to fail inside build steps that were unrelated to dependency resolution.
- Build failures were surfacing as install failures, which made migration debugging harder.

Impact:

- Install-only validation was impossible without also validating the full repo build graph.
- Package manager migration issues were mixed with build/toolchain issues.
- Developer setup became slower and harder to reason about.

Current direction:

- Keep installation focused on dependency resolution.
- Run repository build work through explicit commands such as `build:repo`.
- Treat install, bootstrap, test, and build as separate validation layers.

## 4. Cypress E2E stage is disabled in CI

The repository still contains Cypress-based browser tests, but the CI E2E stage is currently disabled.

Observed issues:

- The `e2e` job in the GitHub Actions workflow is guarded by `if: false`.
- The disabling change was introduced intentionally with the note: `Temporarily disabled while fixing Cypress upgrade issues`.
- The repository still contains Cypress test files and the supporting Storybook-based execution flow.
- This means browser-level regressions are not currently enforced in CI.

Impact:

- Component behavior covered only by Cypress is not being continuously validated.
- The repository still pays the maintenance cost of Cypress support without receiving CI protection from it.
- Package manager and tooling migrations may hide Cypress-specific breakages until someone runs those tests manually.

Current direction:

- Treat Cypress as an explicit follow-up migration track.
- Keep track of whether the suite is still valuable enough to restore.
- If kept, restore a working CI path after install/build stabilization is complete.

## 5. `@paprika/icon` declaration build is fragile against modern ambient types

The `@paprika/icon` package currently generates `.d.ts` files with a raw `tsc` invocation that is not isolated from the rest of the repository type environment.

Observed issues:

- `packages/Icon/package.json` runs `tsc src/*.js --declaration --allowJs --emitDeclarationOnly --outDir src`.
- This declaration step does not use a dedicated `tsconfig` for the package.
- The command does not isolate `types`, does not define an explicit `lib`, and does not skip library checks.
- During migration work, the step picked up incompatible ambient types from `node_modules`, including modern packages such as `@types/react@19`, `jest-mock@30`, and `@sinclair/typebox`.
- The resulting failures were about missing built-in types such as `Map`, `WeakMap`, `Iterable`, `AsyncIterableIterator`, `JSX`, and `esnext.disposable`, even though the icon source itself was not the problem.

Impact:

- Full repo build flows such as `build:repo` can fail inside `@paprika/icon` before Storybook or package runtime output is fully available.
- Migration debugging becomes noisy because a declaration-generation problem looks like a package source failure.
- Runtime-oriented tasks can be blocked by type-environment drift that is unrelated to the icons themselves.

Current direction:

- Treat this as a declaration-build isolation problem, not an icon runtime problem.
- Keep runtime `lib/` generation separable from `.d.ts` generation when unblocking tooling work.
- Follow up by giving `@paprika/icon` a dedicated declaration-build config or otherwise constraining the type environment used by that `tsc` step.

## 6. Storybook builder and dependency graph drift between webpack 4 and webpack 5

The repository's Storybook configuration remained on the webpack 4 builder while the installed dependency graph under `pnpm` started resolving several Storybook-adjacent packages against webpack 5.

Observed issues:

- Storybook was configured with the legacy webpack 4 builder.
- Under `pnpm`, packages such as `@storybook/react`, `workerize-loader`, and related tooling were resolved in variants tied to webpack 5.
- This produced runtime/build-time incompatibilities such as `IgnorePlugin` crashes and loader failures trying to access webpack hook APIs that do not exist on the compiler instance they were given.
- The failures were not caused by a single broken package; they came from a mixed builder/runtime graph.

Impact:

- Storybook startup was unstable even when package source code itself was fine.
- Debugging became noisy because failures surfaced in transitive webpack internals rather than in repo code.
- Local fixes tended to become one-off compatibility shims instead of structural resolution.

Current direction:

- Unify Storybook on a single webpack generation instead of carrying a mixed builder/tooling stack.
- Treat webpack 4 compatibility shims as temporary only.

## 7. Storybook still depends on built `lib/` output from internal workspace packages

Even after Jest was decoupled from built package artifacts, Storybook still resolves internal package entrypoints through their published `lib/` output.

Observed issues:

- Internal packages such as `@paprika/tokens`, `@paprika/l10n`, and `@paprika/icon` expose published entrypoints like `lib/index.js`.
- On a clean workspace state without generated `lib/`, Storybook failed while resolving those packages.
- This showed up as module resolution failures against files like `packages/Tokens/lib/tokens.json`.
- Runtime Storybook work therefore still depended on package build output being present.

Impact:

- Storybook setup remained coupled to repo build state.
- Clean installs or partial migrations could fail before Storybook-specific issues were even reached.
- Tooling work on Storybook could be blocked by unrelated package-output generation problems.

Current direction:

- Keep tracking Storybook separately from Jest because their workspace resolution behavior is different.
- Either make Storybook source-aware for internal packages or keep a well-defined lightweight runtime build step for the packages it needs.

## 8. Storybook build requires elevated Node heap to handle the current story set

The current Storybook build graph is large enough that the default Node heap is not reliable.

Observed issues:

- Storybook startup/build could fail with V8 out-of-memory errors during webpack compilation.
- The failures occurred during ordinary Storybook usage, not only in rare edge cases.
- This was observed before reaching a complete build, indicating the issue is structural rather than tied to a single broken story.

Impact:

- Storybook can fail even after package resolution and webpack compatibility issues are addressed.
- Local debugging becomes slower because crashes happen late in the startup/build process.
- Tooling migration work can appear flaky when the real issue is memory pressure.

Current direction:

- Keep Storybook launcher memory configuration explicit and stable.
- Treat high memory usage as part of the current tooling baseline until the story/build graph is simplified.

## 9. Storybook authoring still relies heavily on legacy APIs and addons

The Storybook surface area is still heavily tied to older Storybook patterns.

Observed issues:

- `@storybook/addon-knobs` is still imported across a large portion of story files.
- Legacy `storiesOf(...)` usage is still present in multiple story files and local Storybook utilities.
- The repo still carries older addon/config assumptions such as legacy CSS resource handling and older preview wiring.
- This increases the amount of Storybook-specific migration debt beyond the builder alone.

Impact:

- Builder or package-manager migrations are harder to isolate from Storybook API migration debt.
- Modern Storybook upgrades remain riskier because runtime compatibility and authoring API compatibility are both in play.
- Temporary compatibility fixes can accumulate if the legacy API surface is not tracked explicitly.

Current direction:

- Separate "make Storybook run" work from "modernize Storybook authoring" work.
- Track the legacy Storybook API footprint as a distinct migration concern rather than letting it stay implicit.

## 10. Storybook and style tooling emit deprecation warnings that indicate pending migration work

The Storybook pipeline still depends on deprecated behavior in surrounding tooling.

Observed issues:

- Storybook emitted warnings about deprecated `static-dir` CLI usage.
- Storybook warned about deprecated default PostCSS plugin behavior.
- Sass emitted deprecation warnings for the legacy JS API.
- Sass also emitted deprecation warnings for `@import` usage in repo stylesheets such as `.storybook/reset.scss`.

Impact:

- The current setup still runs, but the warning surface shows multiple follow-up migration tracks are pending.
- Future upgrades will become harder if these warnings are ignored until they become breaking changes.
- Debugging output is noisier, making real failures harder to spot quickly.

Current direction:

- Track these warnings as real migration debt rather than incidental console noise.
- Address them intentionally after builder/package-resolution stability is restored.
