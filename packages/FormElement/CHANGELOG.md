# Changelog

## 4.0.14

### Patch Changes

- Updated dependencies [ae0d6a0]
  - @paprika/l10n@1.1.11

## 4.0.14-next.0

### Patch Changes

- Updated dependencies [ae0d6a0]
  - @paprika/l10n@1.1.11-next.0

## 4.0.13

### Patch Changes

- @paprika/popover@1.2.3

## 4.0.13-next.0

### Patch Changes

- @paprika/popover@1.2.3-next.0

## 4.0.12

### Patch Changes

- Updated dependencies [f54c146]
  - @paprika/icon@1.1.1

## 4.0.12-next.0

### Patch Changes

- Updated dependencies [f54c146]
  - @paprika/icon@1.1.1-next.0

## 4.0.11

### Patch Changes

- Updated dependencies [14bd5f5]
  - @paprika/popover@1.2.2

## 4.0.11-next.0

### Patch Changes

- Updated dependencies [14bd5f5]
  - @paprika/popover@1.2.2-next.0

## 4.0.10

### Patch Changes

- Updated dependencies [5d0db59]
- Updated dependencies [9ad9c79]
  - @paprika/icon@1.1.0
  - @paprika/helpers@2.1.2
  - @paprika/popover@1.2.1

## 4.0.10-next.1

### Patch Changes

- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2-next.0
  - @paprika/popover@1.2.1-next.0

## 4.0.10-next.0

### Patch Changes

- Updated dependencies [5d0db59]
  - @paprika/icon@1.1.0-next.0

## 4.0.9

### Patch Changes

- Updated dependencies [c265721]
- Updated dependencies [26a610a]
  - @paprika/popover@1.2.0

## 4.0.9-next.0

### Patch Changes

- Updated dependencies [c265721]
  - @paprika/popover@1.2.0-next.0

## 4.0.8

### Patch Changes

- Updated dependencies [12938b6]
  - @paprika/popover@1.1.0

## 4.0.8-next.0

### Patch Changes

- Updated dependencies [12938b6]
  - @paprika/popover@1.1.0-next.0

## 4.0.7

### Patch Changes

- 900b180: Move `refLabel` out from `a11yProps` parameter when rendering content

## 4.0.7-next.0

### Patch Changes

- 900b180: Move `refLabel` out from `a11yProps` parameter when rendering content

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.3.0] - 2020-01-17

### Added

- Added render function to handle children [@tristanjasper](https://github.com/tristanjasper).

### Removed

- No longer adds its extended props to the children components provided. This must now be done by the consumer [@tristanjasper](https://github.com/tristanjasper).

## [0.3.01] - 2020-01-27

### Added

- Added new isFieldSet prop to support rendering of fieldset and legend elements for multiple children
- Ensures children can be rendered as html in the label sub component
- Only renders required label if both hasRequiredLabel and hasOptionalLabel are true

[@tristanjasper](https://github.com/tristanjasper).

## [0.3.20] - 2020-06-01

### Added

-- Added onClickLabel prop to be able to set focus on child refs, currently ButtonGroup supported

[@tristanjasper](https://github.com/tristanjasper).

## [0.3.26] - 2020-08-05

### Changed

-- Changed the spacing between label and content

[@allison-c](https://github.com/allison-c).

## [0.3.27] - 2020-08-12

### Changed

-- Changed the spacing between label, content and instructions

[@tristanjasper](https://github.com/tristanjasper).

## [0.3.31] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).

## [0.3.37-alpha.1] - 2020-10-27

2020-10-27

### Changed

- Changed label spacing, cleanup instructions margins. Moved Help tooltip to fix z-index issue [@tristanjasper](https://github.com/tristanjasper).

## [0.3.37-alpha.2] - 2020-10-29

28-10-20

### Changed

- FormElement Margin, removed content only margin and applied top margin to Descriptino and Error components [@tristanjasper](https://github.com/tristanjasper).

## [1.0.3-alpha.0] - 2020-11-30

### Changed

- Refactor FormElement api to use a11yProps instead of seperate attributes, Additionally using context over React cloning. Introduced Fieldset and Layout components [@tristanjasper](https://github.com/tristanjasper).

## [2.0.1-alpha.0] - 2020-12-09

### Removed

- id, onClick, hasOptionalLabel, hasRequiredLabel props from Label [@mikrotron](https://github.com/mikrotron).

### Added

- isRequired and isOptional props to FormElement [@mikrotron](https://github.com/mikrotron).
- isDisabled and isRequired props will add aria attributes as argument for render function for Content.
- Allowed number type for LeftCol width prop.

### Fixed

- Positioning of help popover when LeftCol has a width prop.
- Subcomponents can be used without context provider (FormElement wrapper).
- Fieldset.Label no longer has htmlFor attribute.
- Help popover is disabled when FormElement has isDisabled.

## [4.0.4-alpha.0] - 2021-02-01

### Changed

- Replace `nanoid` by `uuid`.
