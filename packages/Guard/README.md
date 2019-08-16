## Guard

The `<Guard>` component is a ... .

### Installation

`> npm install --save @paprika/guard`
or
`> yarn add @paprika/guard`

### Usage

React <16.8.x

```js
import Guard from "@paprika/guard";

function App() {
  function doClose() {}

  return (
    <Guard.Supervisor>
      <Guard.Connector isDirty />
      <Guard.Gatekeeper>{canLeave => <button onClick={() => canLeave() && doClose()}>Close</button>}</Guard.Gatekeeper>
    </Guard.Supervisor>
  );
}
```

React >=16.8.x

```js
import Guard from "@paprika/guard";

function MyComponent() {
  const canLeave = Guard.useGuard(); // a hook
  const isDirty = React.useState(false);

  function doClose() {}

  return (
    <div>
      <Guard.Connector isDirty={isDirty} />
      <button onClick={() => canLeave() && doClose()}>Close</button>
    </div>
  );
}

function App() {
  return (
    <Guard.Supervisor>
      <MyComponent />
    </Guard.Supervisor>
  );
}
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
