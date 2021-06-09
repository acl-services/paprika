---
"@paprika/uploader": major
---

- BREAKING CHANGE: Repurposing the `onChange` prop to be triggered every time the input value has been changed. If you used it before, you probably want to replace it by `onProcess` instead.
- Added a new prop `onProcess` this will be triggered every time a file has been processed.
- Added a sub-component `<Uploader.Input />`, you can pass in some custom props for the input element. See this storybook example: https://paprika.highbond.com/?path=/story/forms-uploader-examples--extended-input-props
