# Changelog

## 1.0.14

### Patch Changes

- 659ebe184: Minor vertical alignment tweak of cells (header and body)
- Updated dependencies [009352de9]
  - @paprika/icon@1.2.0
  - @paprika/button@1.1.1
  - @paprika/checkbox@1.0.11
  - @paprika/panel@2.1.1

## 1.0.14-next.1

### Patch Changes

- 659ebe1: Minor vertical alignment tweak of cells (header and body)

## 1.0.14-next.0

### Patch Changes

- Updated dependencies [009352d]
  - @paprika/icon@1.2.0-next.0
  - @paprika/button@1.1.1-next.0
  - @paprika/checkbox@1.0.11-next.0
  - @paprika/panel@2.1.1-next.0

## 1.0.13

### Patch Changes

- Updated dependencies [ae0d6a0]
- Updated dependencies [82ef2b7]
  - @paprika/l10n@1.1.11
  - @paprika/panel@2.1.0

## 1.0.13-next.1

### Patch Changes

- Updated dependencies [82ef2b7]
  - @paprika/panel@2.1.0-next.1

## 1.0.13-next.0

### Patch Changes

- Updated dependencies [ae0d6a0]
  - @paprika/l10n@1.1.11-next.0
  - @paprika/panel@2.0.12-next.0

## 1.0.12

### Patch Changes

- Updated dependencies [e856d54]
- Updated dependencies [e856d54]
  - @paprika/button@1.1.0
  - @paprika/raw-button@1.0.4
  - @paprika/panel@2.0.11

## 1.0.12-next.0

### Patch Changes

- Updated dependencies [e856d54]
- Updated dependencies [e856d54]
  - @paprika/button@1.1.0-next.0
  - @paprika/raw-button@1.0.4-next.0
  - @paprika/panel@2.0.11-next.0

## 1.0.11

### Patch Changes

- 3aa0804: Use the @paprika/checkbox component instead of a basic input
- Updated dependencies [f54c146]
  - @paprika/icon@1.1.1
  - @paprika/button@1.0.10
  - @paprika/checkbox@1.0.10

## 1.0.11-next.1

### Patch Changes

- 3aa0804: Use the @paprika/checkbox component instead of a basic input

## 1.0.11-next.0

### Patch Changes

- Updated dependencies [f54c146]
  - @paprika/icon@1.1.1-next.0
  - @paprika/button@1.0.10-next.0
  - @paprika/checkbox@1.0.10-next.0

## 1.0.10

### Patch Changes

- 00693b0: Prevent data grid from throwing error.
- Updated dependencies [5d0db59]
- Updated dependencies [9ad9c79]
  - @paprika/icon@1.1.0
  - @paprika/helpers@2.1.2
  - @paprika/button@1.0.9
  - @paprika/checkbox@1.0.9
  - @paprika/spinner@1.0.7

## 1.0.10-next.2

### Patch Changes

- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2-next.0
  - @paprika/button@1.0.9-next.1
  - @paprika/checkbox@1.0.9-next.1
  - @paprika/spinner@1.0.7-next.0

## 1.0.10-next.1

### Patch Changes

- Updated dependencies [5d0db59]
  - @paprika/icon@1.1.0-next.0
  - @paprika/button@1.0.9-next.0
  - @paprika/checkbox@1.0.9-next.0

## 1.0.10-next.0

### Patch Changes

- 00693b0: Prevent data grid from throwing error.

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.3.0] - 2020-06-24

### Breaking change

- Switching DataGrid.Types.Vertical and DataGrid.Types.Horizontal, by typo vertical was rendering the horizontal lines and the other way around

## [0.2.0] - 2020-06-22

### Breaking change

- Deprecated onmouseover events now its not possible to hide and show columns on mouse ovr on a row.
- Deprecate autofocus props, since is no working as expected need a11y expert input to implemented again

### Added

- Memoization for the four grids using React.memo and memoize-one

## [0.1.8] - 2020-06-09

### Bugfix

- Fix issue with keyboard navigation [@oscarkwan](https://github.com/oscarkwan).

## [0.1.7] - 2020-06-08

### Added

- Added canGrow prop to ColumnDefinition [@oscarkwan](https://github.com/oscarkwan).

## [0.3.17] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).

## [1.0.7-alpha.0] - 2021-02-01

### Changed

- Replace `nanoid` by `uuid`.

## [1.0.9-alpha.2] - 2021-02-11

- Fixed some UI issues related to borders.
