# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

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

- BREAKING CHANGE: Moved `height` prop from `<Tabs.List>` to `<Tabs>` and renamed to `tabHeight`. [@mikrotron](https://github.com/mikrotron)

## [0.2.17] - 2020-09-02

### Added

- Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey)

## [1.0.2-alpha.2] - 2020-11-25

- Added `shouldUnmount` prop on `<Tabs.Panel>` to avoid unmount a single panel when switching between.
