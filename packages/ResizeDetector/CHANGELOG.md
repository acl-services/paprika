# Changelog

## 2.0.1-next.0

### Patch Changes

- Updated dependencies [63f9a05]
  - @paprika/helpers@2.2.1-next.0

## 2.0.0

### Major Changes

- 9e15465: Mirgated to TS; perfomrance improvements;

  #### Migration Guide

  - `useDimensions()` and `useBreakpoints()` were merged into one hook `useResizeDetector()`
  - `size` was renamed to `breakpointSize`

  Before:

  ```js
  import { useDimensions, useBreakpoints } from "../src";

  function MyComponent() {
    const { width, height } = useDimensions();
    const { size } = useBreakpoints();

  ```

  After:

  ```ts
  import { useResizeDetectorContext } from "../src";

  function MyComponent() {
    const { width, height, breakpointSize } = useResizeDetector();
  ```

  - `@paprika/resize-detector` now supports render prop `children`

  ```tsx
  import ResizeDetector, { useResizeDetector, ResizeDetectorContextValue } from "@paprika/resize-detector";

  function MyComponent() {
    return (
      <ResizeDetector>
        {({ width, height }: ResizeDetectorContextValue) => <div>{width} x {height}</div>}
      </ResizeDetector>;
    );
  }
  ```

### Patch Changes

- 449cbbe: Change span to div
- 6a43d77: Make some props optional
- Updated dependencies [9e15465]
- Updated dependencies [343d673]
- Updated dependencies [80361b2]
  - @paprika/helpers@2.2.0

## 2.0.0-next.4

### Patch Changes

- 449cbbe: Change span to div

## 2.0.0-next.3

### Patch Changes

- 6a43d77: Make some props optional

## 2.0.0-next.2

### Major Changes

- 9e15465: Mirgated to TS; perfomrance improvements;

  #### Migration Guide

  - `useDimensions()` and `useBreakpoints()` were merged into one hook `useResizeDetector()`
  - `size` was renamed to `breakpointSize`

  Before:

  ```js
  import { useDimensions, useBreakpoints } from "../src";

  function MyComponent() {
    const { width, height } = useDimensions();
    const { size } = useBreakpoints();

  ```

  After:

  ```ts
  import { useResizeDetectorContext } from "../src";

  function MyComponent() {
    const { width, height, breakpointSize } = useResizeDetector();
  ```

  - `@paprika/resize-detector` now supports render prop `children`

  ```tsx
  import ResizeDetector, { useResizeDetector, ResizeDetectorContextValue } from "@paprika/resize-detector";

  function MyComponent() {
    return (
      <ResizeDetector>
        {({ width, height }: ResizeDetectorContextValue) => <div>{width} x {height}</div>}
      </ResizeDetector>;
    );
  }
  ```

### Patch Changes

- Updated dependencies [9e15465]
  - @paprika/helpers@2.2.0-next.2

## 1.0.9-next.1

### Patch Changes

- Updated dependencies [80361b2]
  - @paprika/helpers@2.2.0-next.1

## 1.0.9-next.0

### Patch Changes

- Updated dependencies [343d673]
  - @paprika/helpers@2.1.4-next.0

## 1.0.8

### Patch Changes

- Updated dependencies [ff8eae9]
  - @paprika/helpers@2.1.3

## 1.0.8-next.0

### Patch Changes

- Updated dependencies [ff8eae9]
  - @paprika/helpers@2.1.3-next.0

## 1.0.7

### Patch Changes

- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2

## 1.0.7-next.0

### Patch Changes

- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2-next.0

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]
