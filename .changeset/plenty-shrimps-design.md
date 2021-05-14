---
"@paprika/select": major
---

Refactoring API for consistency between Input, Select, Textarea

#### Changed

- Refactored styling to remove classes from markup utilize styled components
- Removed `className` prop that added a class to root `<div>` element.

#### Added

- Added the capability to use as an uncontrolled component with explicit `defaultValue` and `onChange` props added to `propTypes`.
- Added `<Select.Container>` prop collector to allow classes and other attributes to be added to root `<div>` element.

#### Migration Guide

- If a custom class name is required on the root element, it can be added like `<Select><Select.Container className="custom"></Select>`.
- If `classNames` were used to target DOM elements or identify states of the `<Select>`, they will need to be updated to use attributes like `data-pka-anchor`, `aria-invalid`, etc.

Author: [@mikrotron](https://github.com/mikrotron)
