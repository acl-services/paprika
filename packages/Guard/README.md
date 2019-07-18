## Guard

The `<Guard>` component is a ... .

### Installation

`> npm install --save @paprika/guard`
or
`> yarn add @paprika/guard`

### Usage

```js
import Guard from "@paprika/guard";

<Guard.Supervisor>
  <Guard.Connector isDirty />
  <Guard.Gatekeeper>{canLeave => <button onClick={() => canLeave() && doClose()}>Close</button>}</Guard.Gatekeeper>
</Guard.Supervisor>;
```

### Props

// TODO

- `a11yText`
- `canPropagate`
- `children` (required)
- `hasInsetFocusStyle`
- `isDisabled`
- `onClick` (required)
- `tabIndex`
- `role`

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Guard/src/Guard.js)
