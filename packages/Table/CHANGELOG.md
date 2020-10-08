# Changelog

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
