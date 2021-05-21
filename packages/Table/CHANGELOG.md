# Changelog

## 1.2.1-next.0

### Patch Changes

- @paprika/button@1.0.10-next.0
- @paprika/overflow-menu@1.0.18-next.0

## 1.2.0

### Minor Changes

- 18a908e: ### Added

  - Added support for cellProps prop on ColumnDefinition allowing to control props on top of each cell, styles, class, anchors, etc.

### Patch Changes

- @paprika/overflow-menu@1.0.17

## 1.2.0-next.1

### Minor Changes

- 18a908e: ### Added

  - Added support for cellProps prop on ColumnDefinition allowing to control props on top of each cell, styles, class, anchors, etc.

## 1.1.3-next.0

### Patch Changes

- @paprika/overflow-menu@1.0.17-next.0

## 1.1.2

### Patch Changes

- Updated dependencies [5672dd9]
- Updated dependencies [9ad9c79]
  - @paprika/overflow-menu@1.0.16
  - @paprika/helpers@2.1.2
  - @paprika/button@1.0.9
  - @paprika/pill@1.0.8

## 1.1.2-next.1

### Patch Changes

- Updated dependencies [5672dd9]
- Updated dependencies [9ad9c79]
  - @paprika/overflow-menu@1.0.16-next.1
  - @paprika/helpers@2.1.2-next.0
  - @paprika/button@1.0.9-next.1
  - @paprika/pill@1.0.8-next.0

## 1.1.2-next.0

### Patch Changes

- @paprika/button@1.0.9-next.0
- @paprika/overflow-menu@1.0.16-next.0

## 1.1.1

### Patch Changes

- @paprika/overflow-menu@1.0.15

## 1.1.1-next.0

### Patch Changes

- @paprika/overflow-menu@1.0.15-next.0

## 1.1.0

### Minor Changes

- 9f4c925: - Now Includes STICKY Columns!!!
  - Remove keyboard navigation from the table for now, meanwhile we decided which is the best rout for this, we can bring it back later (no body is using it)
  - now the table support forward ref

### Patch Changes

- @paprika/overflow-menu@1.0.14

## 1.1.0-next.1

### Minor Changes

- 9f4c925: - Now Includes STICKY Columns!!!
  - Remove keyboard navigation from the table for now, meanwhile we decided which is the best rout for this, we can bring it back later (no body is using it)
  - now the table support forward ref

## 1.0.12-next.0

### Patch Changes

- @paprika/overflow-menu@1.0.14-next.0

## 1.0.11

### Patch Changes

- @paprika/overflow-menu@1.0.13

## 1.0.11-next.0

### Patch Changes

- @paprika/overflow-menu@1.0.13-next.0

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.1.3] - 2020-08-27

- Add default font styles on th [@tristanjasper](https://github.com/tristanjasper).

## [0.1.4] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).

## [0.2.0] - 2020-10-07

### Changed

- default border has been changed from grid to horizontal. [@kaan.darcey](https://github.com/KDarcey).

### Added

- BREAKING: Propagate `<Table.ColumnDefinition>` `moreProps` to the `<th>` elements. This could introduce a breaking change since props that were applied to `<td>` elements will now ALSO be applied to `<th>` elements. [@mikrotron](https://github.com/mikrotron)

## [1.0.8-alpha.0] - 2021-02-01

### Changed

- Replace `nanoid` by `uuid`.
