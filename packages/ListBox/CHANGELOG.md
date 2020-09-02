# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

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
