# Changelog

## 2.0.6-next.0

### Patch Changes

- Updated dependencies [3385c1f]
  - @paprika/tokens@1.1.0-next.0
  - @paprika/icon@2.1.1-next.0
  - @paprika/stylers@1.1.1-next.0

## 2.0.5

### Patch Changes

- Updated dependencies [5e1c563]
  - @paprika/icon@2.1.0

## 2.0.5-next.0

### Patch Changes

- Updated dependencies [5e1c563]
  - @paprika/icon@2.1.0-next.0

## 2.0.4

### Patch Changes

- Updated dependencies [ca237ea]
  - @paprika/stylers@1.1.0

## 2.0.4-next.0

### Patch Changes

- Updated dependencies [ca237ea]
  - @paprika/stylers@1.1.0-next.0

## 2.0.3

### Patch Changes

- Updated dependencies [c0ebd9b]
  - @paprika/icon@2.0.0

## 2.0.3-next.0

### Patch Changes

- Updated dependencies [c0ebd9b]
  - @paprika/icon@2.0.0-next.0

## 2.0.2

### Patch Changes

- Updated dependencies [ff8eae9]
- Updated dependencies [ff8eae9]
  - @paprika/stylers@1.0.1
  - @paprika/helpers@2.1.3
  - @paprika/icon@1.3.0

## 2.0.2-next.0

### Patch Changes

- Updated dependencies [ff8eae9]
- Updated dependencies [ff8eae9]
  - @paprika/stylers@1.0.1-next.0
  - @paprika/helpers@2.1.3-next.0
  - @paprika/icon@1.3.0-next.0

## 2.0.1

### Patch Changes

- Updated dependencies [009352de9]
  - @paprika/icon@1.2.0

## 2.0.1-next.0

### Patch Changes

- Updated dependencies [009352d]
  - @paprika/icon@1.2.0-next.0

## 2.0.0

### Major Changes

- 32904f2: Refactoring API for consistency between Input, Select, Textarea

  #### Changed

  - Refactored styling to remove classes from markup utilize styled components
  - Removed `className` prop that added a class to root `<div>` element.

  #### Added

  - Added the capability to use as an uncontrolled component with explicit `defaultValue` and `onChange` props added to `propTypes`.
  - Added `<Select.Container>` prop collector to allow classes and other attributes to be added to root `<div>` element.

  #### Migration Guide

  - If a custom class name is required on the root element, it can be added like `<Select><Select.Container className="custom"></Select>`.
  - If `classNames` were used to target DOM elements or identify states of the `<Select>`, they will need to be updated to use attributes like `data-pka-anchor`, `aria-invalid`, etc.

  Author: [@mikrotron](https://github.com/mikrotron)

### Patch Changes

- Updated dependencies [f54c146]
  - @paprika/icon@1.1.1

## 2.0.0-next.0

### Major Changes

- 32904f2: Refactoring API for consistency between Input, Select, Textarea

  #### Changed

  - Refactored styling to remove classes from markup utilize styled components
  - Removed `className` prop that added a class to root `<div>` element.

  #### Added

  - Added the capability to use as an uncontrolled component with explicit `defaultValue` and `onChange` props added to `propTypes`.
  - Added `<Select.Container>` prop collector to allow classes and other attributes to be added to root `<div>` element.

  #### Migration Guide

  - If a custom class name is required on the root element, it can be added like `<Select><Select.Container className="custom"></Select>`.
  - If `classNames` were used to target DOM elements or identify states of the `<Select>`, they will need to be updated to use attributes like `data-pka-anchor`, `aria-invalid`, etc.

  Author: [@mikrotron](https://github.com/mikrotron)

### Patch Changes

- Updated dependencies [f54c146]
  - @paprika/icon@1.1.1-next.0

## 1.0.7

### Patch Changes

- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2

## 1.0.7-next.0

### Patch Changes

- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2-next.0

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.2.16] - 2020-05-06

### Added

- Added aria-invalid [@tristanjasper](https://github.com/tristanjasper).

## [0.3.0] - 2020-07-09

### Removed

- Removed `inputRef` prop and forwarded ref directly [@allison-c](https://github.com/allison-c).

## [0.3.1] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).
