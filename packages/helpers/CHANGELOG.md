# Changelog

## 2.1.2

### Patch Changes

- 9ad9c79: Change PropTypes.instanceOf(Element) to PropTypes.node to fix SSR issue

## 2.1.2-next.0

### Patch Changes

- 9ad9c79: Change PropTypes.instanceOf(Element) to PropTypes.node to fix SSR issue

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.2.2] (October 23, 2019)

- Add `usePrevious` hook. [#244](https://github.com/acl-services/paprika/pull/244)

## [0.2.12] (June 4th 2020)

- Update `RefOf` helper to support functional components. [@tristanjasper](https://github.com/tristanjasper).

## [1.0.3-alpha.0] - 2021-01-06

### Added

- Missing dependencies to package.json
- Barrel index.js file to /src
  [@mikrotron](https://github.com/mikrotron)

### Changed

- useMountedRef useEffect to useLayoutEffect
- [BREAKING CHANGE] Moved polyfill helpers together into a polyfills directory
  [@mikrotron](https://github.com/mikrotron)

## [2.0.2-alpha.0] - 2021-02-05

### Added

- `callAll` function [@mikrotron](https://github.com/mikrotron)

## [2.1.1-alpha.0] - 2021-02-10

- Avoid errors in jest spec.

## [2.1.1-alpha.2] - 2021-02-23

### Removed

- Removed InputTypeProps [@tristanjasper](https://github.com/tristanjasper).
