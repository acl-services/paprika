# Changelog

## 4.0.4

### Patch Changes

- Updated dependencies [009352de9]
  - @paprika/icon@1.2.0
  - @paprika/button@1.1.1

## 4.0.4-next.0

### Patch Changes

- Updated dependencies [009352d]
  - @paprika/icon@1.2.0-next.0
  - @paprika/button@1.1.1-next.0

## 4.0.3

### Patch Changes

- Updated dependencies [ae0d6a0]
  - @paprika/l10n@1.1.11

## 4.0.3-next.0

### Patch Changes

- Updated dependencies [ae0d6a0]
  - @paprika/l10n@1.1.11-next.0

## 4.0.2

### Patch Changes

- Updated dependencies [e856d54]
  - @paprika/button@1.1.0

## 4.0.2-next.0

### Patch Changes

- Updated dependencies [e856d54]
  - @paprika/button@1.1.0-next.0

## 4.0.1

### Patch Changes

- 32904f2: Minor clean up

  - Removed unused dependencies from package.json
  - Don't highlight so obviously on focus when `isReadOnly=true`

- Updated dependencies [f54c146]
  - @paprika/icon@1.1.1
  - @paprika/button@1.0.10

## 4.0.1-next.0

### Patch Changes

- 32904f2: Minor clean up

  - Removed unused dependencies from package.json
  - Don't highlight so obviously on focus when `isReadOnly=true`

- Updated dependencies [f54c146]
  - @paprika/icon@1.1.1-next.0
  - @paprika/button@1.0.10-next.0

## 4.0.0

### Major Changes

- 45d341f: Refactoring API for consistency between Input, Select, Textarea

  #### Added

  - Added a props collector component, `<Input.Container>`, to apply attributes to root `<div>` element.

  #### Removed

  - Removed `className` prop.
  - Removed all classNames from DOM elements.

  #### Migration Guide

  - If a custom class name is required on the root element, it can be added like `<Input><Input.Container className="custom"></Input>`.
  - If `classNames` were used to target DOM elements or identify states of the `<Input>`, they will need to be updated to use attributes like `data-pka-anchor`, `aria-invalid`, etc.

  Author: [@mikrotron](https://github.com/mikrotron)

## 4.0.0-next.0

### Major Changes

- 45d341f: Refactoring API for consistency between Input, Select, Textarea

  #### Added

  - Added a props collector component, `<Input.Container>`, to apply attributes to root `<div>` element.

  #### Removed

  - Removed `className` prop.
  - Removed all classNames from DOM elements.

  #### Migration Guide

  - If a custom class name is required on the root element, it can be added like `<Input><Input.Container className="custom"></Input>`.
  - If `classNames` were used to target DOM elements or identify states of the `<Input>`, they will need to be updated to use attributes like `data-pka-anchor`, `aria-invalid`, etc.

  Author: [@mikrotron](https://github.com/mikrotron)

## 3.0.1

### Patch Changes

- Updated dependencies [5d0db59]
- Updated dependencies [9ad9c79]
  - @paprika/icon@1.1.0
  - @paprika/helpers@2.1.2
  - @paprika/button@1.0.9

## 3.0.1-next.1

### Patch Changes

- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2-next.0
  - @paprika/button@1.0.9-next.1

## 3.0.1-next.0

### Patch Changes

- Updated dependencies [5d0db59]
  - @paprika/icon@1.1.0-next.0
  - @paprika/button@1.0.9-next.0

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.2.26] - 2020-04-29

### Added

- Simplified uncontrolled api removing state for value [@tristanjasper](https://github.com/tristanjasper).

## [0.2.27] - 2020-05-13

### Added

- Fix bug where empty string as value is causing a warning, set onChange callback to not required [@tristanjasper](https://github.com/tristanjasper).

## [0.3.0] - 2020-07-09

### Removed

- Removed `inputRef` prop and forwarded ref directly [@allison-c](https://github.com/allison-c).

## [0.3.4] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).

## [0.3.8] - 2020-09-23

### Changed

- Changed `Input.types.input` to `Input.types.type` to match the propType name. [@allison-c](https://github.com/allison-c).

## [1.0.7-alpha.0] - 2021-02-05

### Added

- Localization of Clear Button's `aria-label` [@mikrotron](https://github.com/mikrotron).

### Changed

- BREAKING CHANGE: The `onChange` callback is now fired with `null` when the Clear Button is clicked [@mikrotron](https://github.com/mikrotron).

### Removed

- BREAKING CHANGE: The `onClear` prop was removed [@mikrotron](https://github.com/mikrotron).

### Fixed

- `hasClearButton` will now work with uncontrolled implementation of the `<Input>` [@mikrotron](https://github.com/mikrotron).

## [2.0.1-alpha.2] - 2021-02-23

### Added

- webkit-search-cancel-button style, removed Input NUMBER type [@tristanjasper](https://github.com/tristanjasper).
