---
"@paprika/resize-detector": major
---

Mirgated to TS; perfomrance improvements;

#### Migration Guide

- `isFullWidth` default value is set to `false` now
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
