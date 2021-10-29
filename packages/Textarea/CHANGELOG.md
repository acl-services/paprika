# Changelog

## 3.0.4-next.0

### Patch Changes

- Updated dependencies [27e1439]
  - @paprika/tokens@1.1.1-next.0
  - @paprika/stylers@1.1.2-next.0

## 3.0.3

### Patch Changes

- Updated dependencies [3385c1f]
- Updated dependencies [fd94ddb]
  - @paprika/tokens@1.1.0
  - @paprika/stylers@1.1.1

## 3.0.3-next.0

### Patch Changes

- Updated dependencies [3385c1f]
  - @paprika/tokens@1.1.0-next.0
  - @paprika/stylers@1.1.1-next.0

## 3.0.2

### Patch Changes

- Updated dependencies [ca237ea]
  - @paprika/stylers@1.1.0

## 3.0.2-next.0

### Patch Changes

- Updated dependencies [ca237ea]
  - @paprika/stylers@1.1.0-next.0

## 3.0.1

### Patch Changes

- Updated dependencies [ff8eae9]
  - @paprika/stylers@1.0.1
  - @paprika/helpers@2.1.3

## 3.0.1-next.0

### Patch Changes

- Updated dependencies [ff8eae9]
  - @paprika/stylers@1.0.1-next.0
  - @paprika/helpers@2.1.3-next.0

## 3.0.0

### Major Changes

- 87cef6a: Refactoring API for consistency between Input, Select, Textarea

  #### Changed

  - Refactored styling to remove classes from markup and utilize styled components.
  - Allow a number or string value for `maxHeight` with the default value changed to `300` instead of `300px`.

  #### Removed

  - Removed `className` prop that added a class to root `<div>` element.

  #### Added

  - Added `<Textarea.Container>` prop collector to allow classes and other attributes to be added to root `<div>` element.
  - Added `minHeight` prop to set a height less than the hard-coded `80px` value.

  #### Migration Guide

  - If a custom class name is required on the root element, it can be added like `<Textarea><Textarea.Container className="custom"></Textarea>`.
  - If `classNames` were used to target DOM elements or identify states of the `<Textarea>`, they will need to be updated to use attributes like `data-pka-anchor`, `aria-invalid`, etc.

  Author: [@mikrotron](https://github.com/mikrotron)

## 3.0.0-next.0

### Major Changes

- 87cef6a: Refactoring API for consistency between Input, Select, Textarea

  #### Changed

  - Refactored styling to remove classes from markup and utilize styled components.
  - Allow a number or string value for `maxHeight` with the default value changed to `300` instead of `300px`.

  #### Removed

  - Removed `className` prop that added a class to root `<div>` element.

  #### Added

  - Added `<Textarea.Container>` prop collector to allow classes and other attributes to be added to root `<div>` element.
  - Added `minHeight` prop to set a height less than the hard-coded `80px` value.

  #### Migration Guide

  - If a custom class name is required on the root element, it can be added like `<Textarea><Textarea.Container className="custom"></Textarea>`.
  - If `classNames` were used to target DOM elements or identify states of the `<Textarea>`, they will need to be updated to use attributes like `data-pka-anchor`, `aria-invalid`, etc.

  Author: [@mikrotron](https://github.com/mikrotron)

## 2.0.1

### Patch Changes

- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2

## 2.0.1-next.0

### Patch Changes

- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2-next.0

## 2.0.0

### Major Changes

- 9f4c925: 💥 Breaking Change for Textarea removing an awkward way for declaring a ref in the textarea

## 2.0.0-next.0

### Major Changes

- 9f4c925: 💥 Breaking Change for Textarea removing an awkward way for declaring a ref in the textarea

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.2.15] - 2020-04-28

### Added

- Added support for uncontrolled implementation, Converted to functional component [@tristanjasper](https://github.com/tristanjasper).

## [0.2.16] - 2020-04-28

### Added

- Minor fixes [@tristanjasper](https://github.com/tristanjasper).

## [0.2.17] - 2020-05-06

### Added

- Added aria-invalid [@tristanjasper](https://github.com/tristanjasper).

## [0.3.0] - 2020-07-09

### Removed

- Removed `inputRef` prop and forwarded ref directly [@allison-c](https://github.com/allison-c).

## [0.3.1] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).
