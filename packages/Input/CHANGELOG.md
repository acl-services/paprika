# Changelog

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
