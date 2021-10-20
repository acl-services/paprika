# Changelog

## 2.2.8-next.0

### Patch Changes

- Updated dependencies [3385c1f]
  - @paprika/tokens@1.1.0-next.0
  - @paprika/raw-button@1.0.7-next.0
  - @paprika/stylers@1.1.1-next.0

## 2.2.7

### Patch Changes

- Updated dependencies [ca237ea]
  - @paprika/stylers@1.1.0
  - @paprika/raw-button@1.0.6

## 2.2.7-next.0

### Patch Changes

- Updated dependencies [ca237ea]
  - @paprika/stylers@1.1.0-next.0
  - @paprika/raw-button@1.0.6-next.0

## 2.2.6

### Patch Changes

- Updated dependencies [ff8eae9]
  - @paprika/stylers@1.0.1
  - @paprika/helpers@2.1.3
  - @paprika/raw-button@1.0.5

## 2.2.6-next.0

### Patch Changes

- Updated dependencies [ff8eae9]
  - @paprika/stylers@1.0.1-next.0
  - @paprika/helpers@2.1.3-next.0
  - @paprika/raw-button@1.0.5-next.0

## 2.2.5

### Patch Changes

- 50fc8d6: Make it so a tab that is a link can be marked as "active"
- f2de3be: If there is no Tabs.Panel, dont have an accessibity error
- 17bb9de: Make spacebar activate a nav tab if it is a link

## 2.2.5-next.1

### Patch Changes

- 50fc8d6: Make it so a tab that is a link can be marked as "active"
- 17bb9de: Make spacebar activate a nav tab if it is a link

## 2.2.5-next.0

### Patch Changes

- f2de3be: If there is no Tabs.Panel, dont have an accessibity error

## 2.2.4

### Patch Changes

- Updated dependencies [e856d54]
  - @paprika/raw-button@1.0.4

## 2.2.4-next.0

### Patch Changes

- Updated dependencies [e856d54]
  - @paprika/raw-button@1.0.4-next.0

## 2.2.3

### Patch Changes

- 3d446fd: Fixed the tab not being vertically centered when the <Tabs> component is set to be horizontally aligned.

## 2.2.3-next.0

### Patch Changes

- 3d446fd: Fixed the tab not being vertically centered when the <Tabs> component is set to be horizontally aligned.

## 2.2.2

### Patch Changes

- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2

## 2.2.2-next.0

### Patch Changes

- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2-next.0

## 2.2.1

### Patch Changes

- 7979fb6: Add null to defaultIndex and index proptype
- fe143b3: ### Fixed

  - Set initial `focusIndex` to selected tab index, or first tab index if no tab is selected.

  [@mikrotron](https://github.com/mikrotron)

## 2.2.1-next.1

### Patch Changes

- fe143b3: ### Fixed

  - Set initial `focusIndex` to selected tab index, or first tab index if no tab is selected.

  [@mikrotron](https://github.com/mikrotron)

## 2.2.1-next.0

### Patch Changes

- 7979fb6: Add null to defaultIndex and index proptype

## 2.2.0

### Minor Changes

- e00afcc: #### Added

  - Capability for tab list to be rendered with no active tab.
  - Applied expected ARIA attributes throughout.

  #### Changed

  - Refactored keyboard usage patterns – allow focus on disabled tabs and ensure focus movement and user interactions adhere to expected standards.
  - Default props for `index` and `defaultIndex` have both been changed to `undefined`. This is NOT considered a breaking change as behaviour should remain the same (omitting `defaultIndex` still results in a selected first tab – unless first tab is disabled).

  [@mikrotron](http://github.com/mikrotron)

## 2.2.0-next.0

### Minor Changes

- e00afcc: #### Added

  - Capability for tab list to be rendered with no active tab.
  - Applied expected ARIA attributes throughout.

  #### Changed

  - Refactored keyboard usage patterns – allow focus on disabled tabs and ensure focus movement and user interactions adhere to expected standards.
  - Default props for `index` and `defaultIndex` have both been changed to `undefined`. This is NOT considered a breaking change as behaviour should remain the same (omitting `defaultIndex` still results in a selected first tab – unless first tab is disabled).

  [@mikrotron](http://github.com/mikrotron)

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.2.17] - 2020-09-02

### Added

- Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey)

## [1.0.2-alpha.2] - 2020-11-25

- Added `shouldUnmount` prop on `<Tabs.Panel>` to avoid unmount a single panel when switching between.

## [1.1.2-alpha.0] - 2021-01-21

### Added

- `isVertical` prop to render tabs in a stacked list. [@mikrotron](https://github.com/mikrotron)
- `hasInsetFocusStyle` prop for inset focus ring on Tab.Link children. [@mikrotron](https://github.com/mikrotron)
- `hasTruncation` prop to truncate tab labels when vertical. [@mikrotron](https://github.com/mikrotron)
- BREAKING CHANGE: `size` prop to control font size – results in default font size of 14px instead of 16px. Original 16px style now requires `size={Tabs.types.size.LARGE}` prop on `<Tabs>`. [@mikrotron](https://github.com/mikrotron)

### Fixed

- Restored broken styling for link `<Tab>`. [@mikrotron](https://github.com/mikrotron)
- Moved `a11yText` prop from `<Tabs.List>` to `<Tab>`. [@mikrotron](https://github.com/mikrotron)
- `<Tabs.List>` and `<Tabs.Panels>` will now support `null` children. [@mikrotron](https://github.com/mikrotron)

### Changed

- BREAKING CHANGE: Moved `height` prop from `<Tabs.List>` to `<Tabs>`, renamed to `tabHeight` and provided a default value of `48`. [@mikrotron](https://github.com/mikrotron)

## [2.0.1-alpha.0] - 2021-01-28

### Added

- Now this component can be controlled or uncontrolled
