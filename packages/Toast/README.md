## Toast

A controlled or uncontrolled component that provides a easy way to commmunicate to users regarding success, warning, info, and error messages.

### Installation

`> npm install --save @paprika/toast`
or
`> yarn add @paprika/toast`

### Usage

Please use `<L10n />` component to wrap `<Toast />` in your application.

Example:

```js
import Toast from "@paprika/toast";

<Toast>Notification</Toast>;
```

#### Toast

- `autoCloseDelay`
- `canAutoClose`
- `children`
- `hasCloseButton`
- `isOpen`
- `isFixed`
- `isPolite`
- `kind`
- `zIndex`

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Toast/src/Toast.js)
