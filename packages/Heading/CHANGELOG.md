# Changelog

## 1.1.0

### Minor Changes

- 9705d99: Packages are now compiled with swc instead of babel. The published output targets ES2022 rather than ES5, so it keeps `const`, arrow functions, class fields and optional chaining, and no longer pulls in `@babel/runtime` helpers. Consumers need an environment that understands ES2022 (Chrome 94+, Safari 15.4+, Firefox 93+, Edge 94+, Node 16.11+) or a build step that transpiles `node_modules`.

  `@paprika/mock-endpoints`, `@paprika/dynamic-hyperlink-transformer` and `@paprika/inline-editors` now ship the `lib/index.d.ts` their `types` field has always pointed at.

### Patch Changes

- Updated dependencies [9705d99]
  - @paprika/stylers@1.2.0
  - @paprika/tokens@3.2.0

## 1.0.21

### Patch Changes

- 7a1f8db7b: Updated dependencies
- 659839d35: Test new publish
- 1cfbed3c3: Update dependencies from dependabot and test new publish hooks
- Updated dependencies [7a1f8db7b]
- Updated dependencies [659839d35]
- Updated dependencies [1cfbed3c3]
  - @paprika/stylers@1.1.13
  - @paprika/tokens@3.1.1

## 1.0.21-next.1

### Patch Changes

- 7a1f8db7b: Updated dependencies
- 659839d35: Test new publish
- Updated dependencies [7a1f8db7b]
- Updated dependencies [659839d35]
  - @paprika/stylers@1.1.13-next.1
  - @paprika/tokens@3.1.1-next.1

## 1.0.21-next.0

### Patch Changes

- 1cfbed3: Update dependencies from dependabot and test new publish hooks
- Updated dependencies [1cfbed3]
  - @paprika/stylers@1.1.13-next.0
  - @paprika/tokens@3.1.1-next.0

## 1.0.20

### Patch Changes

- Updated dependencies [ac538bf]
- Updated dependencies [4c5c420]
  - @paprika/stylers@1.1.12

## 1.0.20-next.0

### Patch Changes

- Updated dependencies [ac538bf]
- Updated dependencies [4c5c420]
  - @paprika/stylers@1.1.12-next.0

## 1.0.19

### Patch Changes

- Updated dependencies [80fb5c0]
  - @paprika/tokens@3.1.0
  - @paprika/stylers@1.1.11

## 1.0.19-next.0

### Patch Changes

- Updated dependencies [80fb5c0]
  - @paprika/tokens@3.1.0-next.0
  - @paprika/stylers@1.1.11-next.0

## 1.0.18

### Patch Changes

- a7fc447: updated peer dependencies for styled-components
- Updated dependencies [a7fc447]
  - @paprika/stylers@1.1.10

## 1.0.18-next.0

### Patch Changes

- a7fc447: updated peer dependencies for styled-components
- Updated dependencies [a7fc447]
  - @paprika/stylers@1.1.10-next.0

## 1.0.17

### Patch Changes

- Updated dependencies [5b6eb9d]
  - @paprika/tokens@3.0.0
  - @paprika/stylers@1.1.9

## 1.0.17-next.0

### Patch Changes

- Updated dependencies [5b6eb9d]
  - @paprika/tokens@3.0.0-next.0
  - @paprika/stylers@1.1.9-next.0

## 1.0.16

### Patch Changes

- d60fb99: peerDependencies now include react@17 and react@18
- Updated dependencies [d60fb99]
  - @paprika/tokens@2.0.1
  - @paprika/stylers@1.1.8

## 1.0.16-next.0

### Patch Changes

- d60fb99: peerDependencies now include react@17 and react@18
- Updated dependencies [d60fb99]
  - @paprika/tokens@2.0.1-next.0
  - @paprika/stylers@1.1.8-next.0

## 1.0.15

### Patch Changes

- Updated dependencies [9f10d8c]
- Updated dependencies [dae4008]
  - @paprika/stylers@1.1.7

## 1.0.15-next.0

### Patch Changes

- Updated dependencies [dae4008]
  - @paprika/stylers@1.1.7-next.0

## 1.0.14

### Patch Changes

- Updated dependencies [0bf34d9]
- Updated dependencies [9ac6aca]
  - @paprika/tokens@2.0.0
  - @paprika/stylers@1.1.6

## 1.0.14-next.1

### Patch Changes

- Updated dependencies [9ac6aca]
  - @paprika/tokens@2.0.0-next.1
  - @paprika/stylers@1.1.6-next.1

## 1.0.14-next.0

### Patch Changes

- Updated dependencies [0bf34d9]
  - @paprika/tokens@1.1.5-next.0
  - @paprika/stylers@1.1.6-next.0

## 1.0.13

### Patch Changes

- Updated dependencies [15b2a9a]
  - @paprika/stylers@1.1.5
  - @paprika/tokens@1.1.4

## 1.0.13-next.0

### Patch Changes

- Updated dependencies [15b2a9a]
  - @paprika/stylers@1.1.5-next.0
  - @paprika/tokens@1.1.4-next.0

## 1.0.12

### Patch Changes

- Updated dependencies [036fe83]
  - @paprika/tokens@1.1.3
  - @paprika/stylers@1.1.4

## 1.0.12-next.0

### Patch Changes

- Updated dependencies [036fe83]
  - @paprika/tokens@1.1.3-next.0
  - @paprika/stylers@1.1.4-next.0

## 1.0.11

### Patch Changes

- Updated dependencies [fd24fbe]
- Updated dependencies [ab8d494]
  - @paprika/stylers@1.1.3
  - @paprika/tokens@1.1.2

## 1.0.11-next.0

### Patch Changes

- Updated dependencies [ab8d494]
  - @paprika/tokens@1.1.2-next.0
  - @paprika/stylers@1.1.3-next.0

## 1.0.10

### Patch Changes

- Updated dependencies [27e1439]
  - @paprika/tokens@1.1.1
  - @paprika/stylers@1.1.2

## 1.0.10-next.0

### Patch Changes

- Updated dependencies [27e1439]
  - @paprika/tokens@1.1.1-next.0
  - @paprika/stylers@1.1.2-next.0

## 1.0.9

### Patch Changes

- Updated dependencies [3385c1f]
- Updated dependencies [fd94ddb]
  - @paprika/tokens@1.1.0
  - @paprika/stylers@1.1.1

## 1.0.9-next.0

### Patch Changes

- Updated dependencies [3385c1f]
  - @paprika/tokens@1.1.0-next.0
  - @paprika/stylers@1.1.1-next.0

## 1.0.8

### Patch Changes

- Updated dependencies [ca237ea]
  - @paprika/stylers@1.1.0

## 1.0.8-next.0

### Patch Changes

- Updated dependencies [ca237ea]
  - @paprika/stylers@1.1.0-next.0

## 1.0.7

### Patch Changes

- Updated dependencies [ff8eae9]
  - @paprika/stylers@1.0.1

## 1.0.7-next.0

### Patch Changes

- Updated dependencies [ff8eae9]
  - @paprika/stylers@1.0.1-next.0

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.4.0] - 2020-07-09

### Removed

- Removed `domRef` prop. The primary use case for this prop was to focus on the DOM element, which can now be accomplished with the `focus()` method available as part of the imperative API of the component. [@mikrotron](http://github.com/mikrotron).
