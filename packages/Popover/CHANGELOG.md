# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.3.11] - 2020-01-21

### Added

- `isPortal` prop that controls if a popover is rendered inline with the DOM or as a React portal element
- Note: The prop added is only used with caution as it can cause indesirable behaviour with paprika side panels / modals.
- This was added to help with using the Popover component in legacy code where rendering it as portal element will cause the
- popover not to be rendered.

## [0.3.30] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).
