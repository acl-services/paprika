## UPLOADER

The `<Uploader />` component is a as it's name suggest helps during the process of uploading files
to any server, this uploader handle all the user interaction and only report back what is relevant for
the developer while uploading files.

### Installation

`> npm install --save @paprika/uploader`
or
`> yarn add @paprika/uploader`

### Usage

For a basic button

```js
import Uploader from "@paprika/uploader";

<Uploader onSuccess={files => {}} onFail={files => {}} />;
```

```js
import Uploader from "@paprika/uploader";

<Uploader onSuccess={files => {}} onFail={files => {}}>
  {state => {
    return <YourCustomUI />;
  }}
</Uploader>;
```

### Props

- `a11yText`
- `canPropagate`
- `children`
- `icon`
- `isActive`
- `isDisabled`
- `isDropdown`
- `isFullWidth`
- `isPending`
- `isSemantic`
- `isSubmit`
- `kind` `["default", "primary", "secondary", "destructive", "flat", "minor", "link"]`
- `onClick` (required)
- `role`
- `size` `["small", "medium", "large"]`
- `tabIndex`

#### Button.Close

- `isDark`

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Button/src/Button.js)
