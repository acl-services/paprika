# Changelog

## 2.2.10-next.0

### Patch Changes

- Updated dependencies [ab8d494]
  - @paprika/tokens@1.1.2-next.0
  - @paprika/stylers@1.1.3-next.0

## 2.2.9

### Patch Changes

- Updated dependencies [27e1439]
  - @paprika/tokens@1.1.1
  - @paprika/stylers@1.1.2

## 2.2.9-next.0

### Patch Changes

- Updated dependencies [27e1439]
  - @paprika/tokens@1.1.1-next.0
  - @paprika/stylers@1.1.2-next.0

## 2.2.8

### Patch Changes

- Updated dependencies [3385c1f]
- Updated dependencies [fd94ddb]
  - @paprika/tokens@1.1.0
  - @paprika/stylers@1.1.1

## 2.2.8-next.0

### Patch Changes

- Updated dependencies [3385c1f]
  - @paprika/tokens@1.1.0-next.0
  - @paprika/stylers@1.1.1-next.0

## 2.2.7

### Patch Changes

- Updated dependencies [ca237ea]
  - @paprika/stylers@1.1.0

## 2.2.7-next.0

### Patch Changes

- Updated dependencies [ca237ea]
  - @paprika/stylers@1.1.0-next.0

## 2.2.6

### Patch Changes

- ff8eae9: Enable webpack tree shaking ability.
- Updated dependencies [ff8eae9]
  - @paprika/stylers@1.0.1
  - @paprika/helpers@2.1.3

## 2.2.6-next.0

### Patch Changes

- ff8eae9: Enable webpack tree shaking ability.
- Updated dependencies [ff8eae9]
  - @paprika/stylers@1.0.1-next.0
  - @paprika/helpers@2.1.3-next.0

## 2.2.5

### Patch Changes

- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2

## 2.2.5-next.0

### Patch Changes

- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2-next.0

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.1.2] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).

## [1.0.0] - 2020-11-09

### Changed

- Changed the border-radius of the small and the medium avatar.

## [2.0.0] - 2020-12-07

### Changed

- Breaking change: The old "MEDIUM" square Avatar is now "LARGE". The old "SMALL" square Avatar is now "MEDIUM".
- Breaking change: the Avatar will display whatever you pass into it as-is (including capitalization). Created the `getInitialsFromText` helper function so the consumer can get the text they want to pass in.
- Added new "isRound" prop so you can have round Avatars in three sizes
