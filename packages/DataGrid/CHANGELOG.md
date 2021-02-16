# Changelog

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
