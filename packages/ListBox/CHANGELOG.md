# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.9.0] - 2020-06-16

### Changed

- Add onKeyUp event for `SPACE`, `ESC` and `ENTER` before onKeyDown was handling all key interaction now its only responsible for `↑`,`↓` keys.
  this might break testing that depends onKeyDown event.
- Add `customLabel` prop on `ListBox.Trigger` component to support custom text as the label.
