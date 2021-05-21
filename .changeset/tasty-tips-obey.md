---
"@paprika/textarea": major
---

Refactoring API for consistency between Input, Select, Textarea

#### Changed

- Refactored styling to remove classes from markup and utilize styled components.
- Allow a number or string value for `maxHeight` with the default value changed to `300` instead of `300px`.

#### Removed

- Removed root `<div>` wrapper element.
- Removed `className` prop that added a class to root `<div>` element.

#### Added

- Added `minHeight` prop to set a height less than the hard-coded `80px` value.

#### Migration Guide

- Selectors may have to change since there is no longer a `<div>` element wrapping the `<textarea>`.
- If `classNames` were used to target DOM elements or identify states of the `<Textarea>`, they will need to be updated to use attributes like `data-pka-anchor`, `aria-invalid`, etc.

Author: [@mikrotron](https://github.com/mikrotron)
