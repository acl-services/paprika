# Changelog

## 2.1.1

### Patch Changes

- Updated dependencies [009352de9]
  - @paprika/icon@1.2.0
  - @paprika/button@1.1.1

## 2.1.1-next.0

### Patch Changes

- Updated dependencies [009352d]
  - @paprika/icon@1.2.0-next.0
  - @paprika/button@1.1.1-next.0

## 2.1.0

### Minor Changes

- 82ef2b7: No longer use focus trap when overlay is not used

### Patch Changes

- Updated dependencies [ae0d6a0]
  - @paprika/l10n@1.1.11

## 2.1.0-next.1

### Minor Changes

- 82ef2b7: No longer use focus trap when overlay is not used

## 2.0.12-next.0

### Patch Changes

- Updated dependencies [ae0d6a0]
  - @paprika/l10n@1.1.11-next.0

## 2.0.11

### Patch Changes

- Updated dependencies [e856d54]
  - @paprika/button@1.1.0

## 2.0.11-next.0

### Patch Changes

- Updated dependencies [e856d54]
  - @paprika/button@1.1.0-next.0

## 2.0.10

### Patch Changes

- Updated dependencies [f54c146]
  - @paprika/icon@1.1.1
  - @paprika/button@1.0.10

## 2.0.10-next.0

### Patch Changes

- Updated dependencies [f54c146]
  - @paprika/icon@1.1.1-next.0
  - @paprika/button@1.0.10-next.0

## 2.0.9

### Patch Changes

- 9ad9c79: Change PropTypes.instanceOf(Element) to PropTypes.node to fix SSR issue
- Updated dependencies [5d0db59]
- Updated dependencies [9ad9c79]
  - @paprika/icon@1.1.0
  - @paprika/overlay@1.0.7
  - @paprika/helpers@2.1.2
  - @paprika/button@1.0.9

## 2.0.9-next.1

### Patch Changes

- 9ad9c79: Change PropTypes.instanceOf(Element) to PropTypes.node to fix SSR issue
- Updated dependencies [9ad9c79]
  - @paprika/overlay@1.0.7-next.0
  - @paprika/helpers@2.1.2-next.0
  - @paprika/button@1.0.9-next.1

## 2.0.9-next.0

### Patch Changes

- Updated dependencies [5d0db59]
  - @paprika/icon@1.1.0-next.0
  - @paprika/button@1.0.9-next.0

## 2.0.8

### Patch Changes

- 0a31c86: Fixed the issue of when you are scrolled down a bit and then open the Panel, it will open in the wrong y-position.

## 2.0.8-next.0

### Patch Changes

- 0a31c86: Fixed the issue of when you are scrolled down a bit and then open the Panel, it will open in the wrong y-position.

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [1.0.0] - 2020-11-05

### Changed

- Moved from SidePanel to Panel

## [0.3.16] - 2020-04-16

### Removed

- <SidePanel.Overlay> background prop [PR](https://github.com/acl-services/paprika/pull/440) [@oscarkwan](https://github.com/oscarkwan).

## [0.3.24] - 2020-06-02

### Changed

- <SidePanel> no longer has default padding or margin. Instead make use of the <SidePanel.Content> sub component to apply the padding to a section of the SidePanel. (https://github.com/KaanDarcey).

## [0.4.11] 2020-08-07

### Added

- Added heading isSticky prop, fixed footer height being applied[@tristanjasper](https://github.com/tristanjasper).

## [0.4.15] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).

## [1.0.4-alpha.3] - 2020-11-24

### Removed

- Breaking change: removed `isSlideFromLeft` prop. Now you must use `slideFrom={Panel.slideFromDirections.LEFT}`.
- Breaking change: removed `offsetY` prop. Now you must use `offset={{ top: 123 }}`.

### Added

- Panel can now come up from the bottom: `slideFrom={Panel.slideFromDirections.BOTTOM}`

## [2.0.7-alpha.3] - 2021-02-18

### Changed

- Using `@paprika/overlay` as the internal overlay component
