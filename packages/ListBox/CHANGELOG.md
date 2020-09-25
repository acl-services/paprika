# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

- Updated: Added nanoid polyfill [@tristanjasper](https://github.com/tristanjasper).

## [0.9.0] - 2020-06-16

### Changed

- Add onKeyUp event for `SPACE`, `ESC` and `ENTER` before onKeyDown was handling all key interaction now its only responsible for `↑`,`↓` keys.
  this might break testing that depends onKeyDown event.

## [0.9.3] - 2020-08-13

### Changed

- Add `label` prop on `ListBox.Trigger` component to support custom text as the label.

## [0.9.4] - 2020-08-17

### Fixed

- Update `lastKnownSelectedOptions` in the state, when `useListBox.types.updateOptions` has been dispatched.

## [0.9.7] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).

## [0.9.8] - 2020-09-04

### Fixed

- Fix ListBox Footer sub-component was compiling the older version of the updated constants/types. It's properties was running 'Button..Kinds.MINOR' where it should be running 'Button.types.kind.Minor'. Proprties have been updated to latest standard. [@kaan.darcey](https://github.com/KDarcey).
