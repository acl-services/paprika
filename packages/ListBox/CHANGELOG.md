# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [1.4.0]

- Fix some issue with keyboard functionality introduced when working with ListBoxWithTags on the Trigger component.
- Remove dispatch toggle from Trigger and when with an ordinary if and else, adding clarity to whats happening.

## [1.0.1]

- Fix accessibility issue so options are now focusable and read to screen reader technology
- Add Toast component as dependency

## [1.0.0] - 2020-11-04

### Changed

- Moved from ListBox

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

## [1.1.1-alpha.2] - 2020-12-03

### Fixed

- Fixed hardcoded text in listbox footer.

## [1.3.0] - 2021-01-11

### Change

- WithTags subcomponent was moved to their own packages no is part of @paprika/list-box-with-tags

## [1.3.2-alpha.0] - 2021-01-21

### Fixed

- Fixed the potential mapping children error.

## [1.3.3-alpha.0] - 2021-02-01

### Changed

- Replace `nanoid` by `uuid`.
