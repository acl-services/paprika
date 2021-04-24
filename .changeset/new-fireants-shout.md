---
"@paprika/progress-bar": minor
---

### Added

- `isCompact` prop for new visually smaller variant
- `headerLevel` prop to control semantics of heading

### Changed

- Color of progress bar will now change to green when `completed={100}`
- Default for `ariaText` is now `null` instead of unlocalized "Loading". When `null` it will not render an `aria-live` region

Author: [@mikrotron](https://github.com/mikrotron)