# Changelog

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
