## DialogActions

The `<DialogActions>` component renders three buttons, Save (hasConfirm), Don't Save (hasDecline) and Cancel.

### Installation

`> npm install --save @paprika/dialog-actions`
or
`> yarn add @paprika/dialog-actions`

### Usage

Please use `<L10n />` component to wrap `<Toast />` in your application.

Example:

```js
import DialogActions from "@paprika/dialog-actions";

<DialogActions />;
```

### Props

- `hasCancel`
- `hasConfirm`
- `hasDecline`
- `isDestructive`
- `isDisabled`
- `labelCancel`
- `labelConfirm`
- `labelDecline`
- `onCancel`
- `onConfirm`
- `onDecline`

[More details about these props](https://github.com/acl-services/paprika/blob/master/packages/DialogActions/src/DialogActions.js)
