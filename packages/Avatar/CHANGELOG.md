# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Changed

- Breaking change: The old "MEDIUM" square Avatar is now "LARGE". The old "SMALL" square Avatar is now "MEDIUM".
- Breaking change: the Avatar will display whatever you pass into it as-is (including capitalization). Created the `getInitialsFromText` helper function so the consumer can get the text they want to pass in.
- Added new "isRound" prop so you can have round Avatars in three sizes

## [0.1.2] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).

## [1.0.0] - 2020-11-09

### Changed

- Changed the border-radius of the small and the medium avatar.
