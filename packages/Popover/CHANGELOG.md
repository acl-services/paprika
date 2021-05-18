# Changelog

## 1.2.2

### Patch Changes

- 14bd5f5: ### Fixed

  - Ensure `<Popover.Content>` receives focus after opening so its `onBlur` event will cause it to close.
  - Ensure proper `tab` focus order when `<Popover.Content>` has no focussable elements.

  Author: [@mikrotron](https://github.com/mikrotron)

## 1.2.2-next.0

### Patch Changes

- 14bd5f5: ### Fixed

  - Ensure `<Popover.Content>` receives focus after opening so its `onBlur` event will cause it to close.
  - Ensure proper `tab` focus order when `<Popover.Content>` has no focussable elements.

  Author: [@mikrotron](https://github.com/mikrotron)

## 1.2.1

### Patch Changes

- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2

## 1.2.1-next.0

### Patch Changes

- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2-next.0

## 1.2.0

### Minor Changes

- c265721: Fixed aria tags on popover
- 26a610a: When popover opened pressing ESC key only closes popover content and stops propagation. Benefical if using the popover in a Panel or TakeOver component

## 1.2.0-next.1

### Minor Changes

- 26a610a: When popover opened pressing ESC key only closes popover content and stops propagation. Benefical if using the popover in a Panel or TakeOver component

## 1.2.0-next.0

### Minor Changes

- c265721: Fixed aria tags on popover

## 1.1.0

### Minor Changes

- 12938b6: Added aria-haspopup to trigger

## 1.1.0-next.0

### Minor Changes

- 12938b6: Added aria-haspopup to trigger

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.3.11] - 2020-01-21

### Added

- `isPortal` prop that controls if a popover is rendered inline with the DOM or as a React portal element
- Note: The prop added is only used with caution as it can cause indesirable behaviour with paprika side panels / modals.
- This was added to help with using the Popover component in legacy code where rendering it as portal element will cause the
- popover not to be rendered.

## [0.3.30] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).

## [1.0.4-alpha.0] - 2020-12-16

- Pass the `Event` object down for `<Popover.Trigger />` `onClick`.

## [1.0.7-alpha.0] - 2021-02-01

### Changed

- Replace `nanoid` by `uuid`.
