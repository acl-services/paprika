# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [2.0.0] - 2020-11-18

### Removed

- Breaking change: removed `isSlideFromLeft` prop. Now you must use `slideFrom={Panel.slideFromDirections.LEFT}`.
- Breaking change: removed `offsetY` prop. Now you must use `offset={{ top: 123 }}`.

### Added

- Panel can now come up from the bottom: `slideFrom={Panel.slideFromDirections.BOTTOM}`

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
