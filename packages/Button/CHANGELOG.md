# Changelog

## 1.1.6-next.0

### Patch Changes

- Updated dependencies [3385c1f]
  - @paprika/tokens@1.1.0-next.0
  - @paprika/icon@2.1.1-next.0
  - @paprika/raw-button@1.0.7-next.0
  - @paprika/stylers@1.1.1-next.0

## 1.1.5

### Patch Changes

- Updated dependencies [5e1c563]
  - @paprika/icon@2.1.0

## 1.1.5-next.0

### Patch Changes

- Updated dependencies [5e1c563]
  - @paprika/icon@2.1.0-next.0

## 1.1.4

### Patch Changes

- Updated dependencies [ca237ea]
  - @paprika/stylers@1.1.0
  - @paprika/raw-button@1.0.6

## 1.1.4-next.0

### Patch Changes

- Updated dependencies [ca237ea]
  - @paprika/stylers@1.1.0-next.0
  - @paprika/raw-button@1.0.6-next.0

## 1.1.3

### Patch Changes

- Updated dependencies [c0ebd9b]
  - @paprika/icon@2.0.0

## 1.1.3-next.0

### Patch Changes

- Updated dependencies [c0ebd9b]
  - @paprika/icon@2.0.0-next.0

## 1.1.2

### Patch Changes

- Updated dependencies [ff8eae9]
- Updated dependencies [ff8eae9]
  - @paprika/stylers@1.0.1
  - @paprika/helpers@2.1.3
  - @paprika/icon@1.3.0
  - @paprika/raw-button@1.0.5

## 1.1.2-next.0

### Patch Changes

- Updated dependencies [ff8eae9]
- Updated dependencies [ff8eae9]
  - @paprika/stylers@1.0.1-next.0
  - @paprika/helpers@2.1.3-next.0
  - @paprika/icon@1.3.0-next.0
  - @paprika/raw-button@1.0.5-next.0

## 1.1.1

### Patch Changes

- Updated dependencies [009352de9]
  - @paprika/icon@1.2.0

## 1.1.1-next.0

### Patch Changes

- Updated dependencies [009352d]
  - @paprika/icon@1.2.0-next.0

## 1.1.0

### Minor Changes

- e856d54: Refactored styling to fix issues with `styled-components` `v5`.

  #### Changed

  - Revised focus styling of disabled buttons.
  - Removed inset `box-shadow` for fleeting `:active` (pressed) state of skeuomorphic buttons.

  Author: [@mikrotron](https://github.com/mikrotron)

### Patch Changes

- Updated dependencies [e856d54]
  - @paprika/raw-button@1.0.4

## 1.1.0-next.0

### Minor Changes

- e856d54: Refactored styling to fix issues with `styled-components` `v5`.

  #### Changed

  - Revised focus styling of disabled buttons.
  - Removed inset `box-shadow` for fleeting `:active` (pressed) state of skeuomorphic buttons.

  Author: [@mikrotron](https://github.com/mikrotron)

### Patch Changes

- Updated dependencies [e856d54]
  - @paprika/raw-button@1.0.4-next.0

## 1.0.10

### Patch Changes

- Updated dependencies [f54c146]
  - @paprika/icon@1.1.1

## 1.0.10-next.0

### Patch Changes

- Updated dependencies [f54c146]
  - @paprika/icon@1.1.1-next.0

## 1.0.9

### Patch Changes

- Updated dependencies [5d0db59]
- Updated dependencies [9ad9c79]
  - @paprika/icon@1.1.0
  - @paprika/helpers@2.1.2

## 1.0.9-next.1

### Patch Changes

- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2-next.0

## 1.0.9-next.0

### Patch Changes

- Updated dependencies [5d0db59]
  - @paprika/icon@1.1.0-next.0

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.3.0] - 2020-06-16

### Changed

- Changed name / default value of `<Button.Link>` `isOpenNewTab` prop to `shouldOpenNewTab` / `false` [@mikrotron](https://github.com/mikrotron)

## [0.3.8] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).

## [0.3.10] - 2020-09-14

Added support for icon in LinkButton component [@tristanjasper](https://github.com/tristanjasper).

## [0.3.11] - 2020-09-17

Added aria-disabled tag on LinkButton component [@tristanjasper](https://github.com/tristanjasper).

## [0.3.12] - 2020-09-23

Updated DEFAULT hover,visited styles to be resilient to global styling, [@tristanjasper](https://github.com/tristanjasper).

## [0.3.14] - 2020-10-07

Move CloseButton, IconButton, LinkButton to components folder to fix typings and for file structure consistency [kcumlat](https://github.com/kcumlat).

## [1.0.1-alpha.1] - 2020-11-13

### Fixed

- Ensure that the `event` argument is passed along to the `onBlur` handler provided by consumer [@mikrotron](https://github.com/mikrotron)
