## Button

The `<Button>` component is a fully accessible button intended for use typically as a skeuomorphic button, but many visual styles (kinds) are available.

For buttons with a label that is only an icon, the `<Button.Icon>` component is provided. For typical close buttons, `<Button.Close>` is provided.

It is rendered as a `<button>` element by default, but can also be rendered as a generic `<span>`, via the `<RawButton>` if global CSS conflicts are an issue (when `isSemantic` prop is set to `false`).

### Installation

`> npm install --save @paprika/button`
or
`> yarn add @paprika/button`

### Usage

For a basic button

```js
import Button from "@paprika/button";

<Button onClick={clickHandler}>Button label</Button>;
```

Or a button

```js
import Button from "@paprika/button";
import InfoIcon from "@paprika/icon/lib/InfoCircle";

<Button.Icon onClick={clickHandler}>
  <InfoIcon />
</Button.Icon>;
```

```js
import Button from "@paprika/button";

<Button.Close onClick={clickHandler} />;
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
