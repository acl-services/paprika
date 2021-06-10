---
"@paprika/uploader": major
---

- BREAKING CHANGE: Repurposing the `onChange` prop to be triggered every time the input value has been changed. If you used it before, you probably want to replace it by `onProcessed` instead.
- Added a new prop `onProcessed` this will be triggered when uploading is about to start (all files have been processed to see if they are valid type/size).
- Added a sub-component `<Uploader.Input />`, you can pass in some custom props for the input element. See this storybook example: https://paprika.highbond.com/?path=/story/forms-uploader-examples--extended-input-props
- Passed moreProps to the container.
