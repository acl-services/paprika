---
"@paprika/popover": patch
---

### Fixed

- Ensure `<Popover.Content>` receives focus after opening so its `onBlur` event will cause it to close.
- Ensure proper `tab` focus order when `<Popover.Content>` has no focussable elements.

Author: [@mikrotron](https://github.com/mikrotron)
