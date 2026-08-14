# Changelog

## 0.2.0

### Minor Changes

- 9705d99: Packages are now compiled with swc instead of babel. The published output targets ES2022 rather than ES5, so it keeps `const`, arrow functions, class fields and optional chaining, and no longer pulls in `@babel/runtime` helpers. Consumers need an environment that understands ES2022 (Chrome 94+, Safari 15.4+, Firefox 93+, Edge 94+, Node 16.11+) or a build step that transpiles `node_modules`.

  `@paprika/mock-endpoints`, `@paprika/dynamic-hyperlink-transformer` and `@paprika/inline-editors` now ship the `lib/index.d.ts` their `types` field has always pointed at.

## 0.1.4

### Patch Changes

- 7a1f8db7b: Updated dependencies
- 659839d35: Test new publish
- 1cfbed3c3: Update dependencies from dependabot and test new publish hooks

## 0.1.4-next.1

### Patch Changes

- 7a1f8db7b: Updated dependencies
- 659839d35: Test new publish

## 0.1.4-next.0

### Patch Changes

- 1cfbed3: Update dependencies from dependabot and test new publish hooks

## 0.1.3

### Patch Changes

- 794703f: Fixed the runtime-corejs2 version inside the package.

## 0.1.3-next.0

### Patch Changes

- 794703f: Fixed the runtime-corejs2 version inside the package.

## 0.1.2

### Patch Changes

- 32bb76d: Use "fs" async API to avoid race condition

## 0.1.2-next.0

### Patch Changes

- 32bb76d: Use "fs" async API to avoid race condition

## 0.1.1

### Patch Changes

- 2651e30: Fix missing dependency issue.
- 21a4cb8: Add new build-translations package.

## 0.1.1-next.1

### Patch Changes

- 2651e30: Fix missing dependency issue.

## 0.1.1-next.0

### Patch Changes

- 21a4cb8: Add new build-translations package.
