# Changelog

## 1.1.0

### Minor Changes

- 9705d99: Packages are now compiled with swc instead of babel. The published output targets ES2022 rather than ES5, so it keeps `const`, arrow functions, class fields and optional chaining, and no longer pulls in `@babel/runtime` helpers. Consumers need an environment that understands ES2022 (Chrome 94+, Safari 15.4+, Firefox 93+, Edge 94+, Node 16.11+) or a build step that transpiles `node_modules`.

  `@paprika/mock-endpoints`, `@paprika/dynamic-hyperlink-transformer` and `@paprika/inline-editors` now ship the `lib/index.d.ts` their `types` field has always pointed at.

## 1.0.2

### Patch Changes

- 7a1f8db7b: Updated dependencies
- 659839d35: Test new publish
- 1cfbed3c3: Update dependencies from dependabot and test new publish hooks

## 1.0.2-next.1

### Patch Changes

- 7a1f8db7b: Updated dependencies
- 659839d35: Test new publish

## 1.0.2-next.0

### Patch Changes

- 1cfbed3: Update dependencies from dependabot and test new publish hooks

## 1.0.1

### Patch Changes

- d60fb99: peerDependencies now include react@17 and react@18

## 1.0.1-next.0

### Patch Changes

- d60fb99: peerDependencies now include react@17 and react@18

All notable changes to this project will be documented in this file.

## [Unreleased]

## [0.1.1] - 2020-09-02

### Created

- Created: Created and placed all constants into the constants.js file. To act as a centralized location for all constants. This package is intended for internal use only, not for consumers. [@kaan.darcey](https://github.com/KDarcey).
