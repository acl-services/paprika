---
"@paprika/tabs": minor
---

#### Added

- Capability for tab list to be rendered with no active tab.
- Applied expected ARIA attributes throughout.

#### Changed

- Refactored keyboard usage patterns – allow focus on disabled tabs and ensure focus movement and user interactions adhere to expected standards.
- Default props for `index` and `defaultIndex` have both been changed to `undefined`. This is NOT considered a breaking change as behaviour should remain the same (omitting `defaultIndex` still results in a selected first tab – unless first tab is disabled).

[@mikrotron](http://github.com/mikrotron)
