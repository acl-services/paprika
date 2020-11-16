# Changelog

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
