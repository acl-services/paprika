# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added

- isVertical prop for Tabs.List to render tabs in a stacked list. [@mikrotron](https://github.com/mikrotron)
- hasInsetFocusStyle prop for Tabs.List to propagate to each Tab child. [@mikrotron](https://github.com/mikrotron)

### Fixed

- Restored broken styling for Tab.Link. [@mikrotron](https://github.com/mikrotron)

## [0.2.17] - 2020-09-02

### Added

- Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey)

## [1.0.2-alpha.2] - 2020-11-25

- Added `shouldUnmount` prop on `<Tabs.Panel>` to avoid unmount a single panel when switching between.
