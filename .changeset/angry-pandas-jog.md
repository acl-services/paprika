---
"@paprika/action-bar": major
"@paprika/helpers": minor
---

- Add `initialValue` prop to the `<SearchInput />`
- Fix the debouncing in `<SearchInput />`
- Rename `debouncedValue` to `debounceDelay`
- Add `useCallbackDebouncer`

#### Migration Guide

1. Change `<SearchInput debouncedValue={value} />` to `<SearchInput debounceDelay={value} />`

  Author: [@AndreyChernykh ](https://github.com/AndreyChernykh)
