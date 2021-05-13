---
"@paprika/input": major
---

### Added

- Added an imperative `focus()` method.
- Added a props collector component, `<Input.Container>`, to apply attributes to root `<div>` element.

### Removed

- Removed `className` prop.
- Removed all classNames from DOM elements.

### Migration Guide

- If a custom class name is required on the root element, it can be added like `<Input><Input.Container className="custom"></Input>`.
- If classNames were used to target the `<input>`, they will need to be udpated to use attributes like `data-pka-anchor`, `aria-invalid`, etc.

Author: [@mikrotron](https://github.com/mikrotron)
