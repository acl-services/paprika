# Changelog

## 2.1.4-next.0

### Patch Changes

- 89b1bf6: Remove unused dependencies

## 2.1.3

### Patch Changes

- 72ebde0: Export `sortData` function.

## 2.1.3-next.0

### Patch Changes

- 72ebde0: Export `sortData` function.

## 2.1.2

### Patch Changes

- Updated dependencies [c265721]
- Updated dependencies [26a610a]
  - @paprika/popover@1.2.0
  - @paprika/date-picker@1.0.12

## 2.1.2-next.0

### Patch Changes

- Updated dependencies [c265721]
  - @paprika/popover@1.2.0-next.0
  - @paprika/date-picker@1.0.12-next.0

## 2.1.1

### Patch Changes

- Updated dependencies [12938b6]
  - @paprika/popover@1.1.0
  - @paprika/date-picker@1.0.11

## 2.1.1-next.0

### Patch Changes

- Updated dependencies [12938b6]
  - @paprika/popover@1.1.0-next.0
  - @paprika/date-picker@1.0.11-next.0

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.2.0] - 2020-06-08

### Added

- Fixed typo with useColumnsArrangement component [@oscarkwan](https://github.com/oscarkwan).

## [0.3.0] - 2020-06-10

### Changed

- Renamed `onFilterChange` to `onChangeFilter` [@allison-c](https://github.com/allison-c).
- Renamed `onAddField` to `onAddSort` [@allison-c](https://github.com/allison-c).
- Renamed `onChangeField` to `onChangeSort` [@allison-c](https://github.com/allison-c).
- Renamed `onDeleteField` to `onDeleteSort` [@allison-c](https://github.com/allison-c).
- Fixed `useSort` when sorting boolean values, the results is in the opposite direction [@allison-c](https://github.com/allison-c).

## [0.2.21] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).

## [0.2.25] - 2020-09-23

### Added

- Added `<SearchInput>` component [@allison-c](https://github.com/allison-c).

## [1.1.0] - 2020-11-13

- Added `isAddSortDisabled` prop on `<Sort>` component, and `maxSortFields` parameter in `useSort` hook to support the case of limited sort fields.

## [1.1.1-alpha.4] - 2020-11-24

### Changed

- Added lock icon for disabled `<ColumnsArrangement>` items.
- Disabled `<ColumnsArrangement>` items will not be able to toggle by `Show all` or `Hide all` and not react to drag & drop actions.
- Adjusted the styles of the popovers.

## [1.2.4-alpha.0] - 2021-01-14

### Changed

- Removed <Filter> component and `useFilter` from this package. Please use `@paprika/filter` instead.

## [2.0.2-alpha.0] - 2021-02-01

### Changed

- Replace `nanoid` by `uuid`.
