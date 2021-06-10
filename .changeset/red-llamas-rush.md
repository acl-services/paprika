---
"@paprika/list-box-with-tags": major
---

BREAKING CHANGE: Separated the valid props from the return value of `useListBoxWithTags`. If you don't use `useListBoxWithTags` you're fine, otherwise please get the object called `listBoxWithTagsProps` from the `useListBoxWithTags`'s return value and pass that object to `<ListBoxWithTags />` component if needed. For example: https://github.com/acl-services/paprika/pull/980/files#diff-801a2bfe08256d72d8997c724c8f9d1736e6dc9ce667e3626d4b4de936ab8777R9
