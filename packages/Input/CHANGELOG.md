# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added

- Localization of Clear Button's `aria-label` [@mikrotron](https://github.com/mikrotron).

### Changed

- BREAKING CHANGE: The `onChange` callback is now fired with `null` when the Clear Button is clicked [@mikrotron](https://github.com/mikrotron).

### Removed

- BREAKING CHANGE: The `onClear` prop was removed [@mikrotron](https://github.com/mikrotron).

### Fixed

- `hasClearButton` will now work with uncontrolled implementation of the `<Input>` [@mikrotron](https://github.com/mikrotron).

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
