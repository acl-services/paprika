# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.4.0] - 2020-07-09

### Removed

- Removed `domRef` prop. The primary use case for this prop was to focus on the DOM element, which can now be accomplished with the `focus()` method available as part of the imperative API of the component. [@mikrotron](http://github.com/mikrotron).
