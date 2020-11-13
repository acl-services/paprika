# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Fixed

- Ensure that the `event` argument is passed along to the `onBlur` handler provided by consumer [@mikrotron](https://github.com/mikrotron)

## [0.3.0] - 2020-06-16

### Changed

- Changed name / default value of `<Button.Link>` `isOpenNewTab` prop to `shouldOpenNewTab` / `false` [@mikrotron](https://github.com/mikrotron)

## [0.3.8] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).

## [0.3.10] - 2020-09-14

Added support for icon in LinkButton component [@tristanjasper](https://github.com/tristanjasper).

## [0.3.11] - 2020-09-17

Added aria-disabled tag on LinkButton component [@tristanjasper](https://github.com/tristanjasper).

## [0.3.12] - 2020-09-23

Updated DEFAULT hover,visited styles to be resilient to global styling, [@tristanjasper](https://github.com/tristanjasper).

## [0.3.14] - 2020-10-07

Move CloseButton, IconButton, LinkButton to components folder to fix typings and for file structure consistency [kcumlat](https://github.com/kcumlat).
