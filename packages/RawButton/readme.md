## RawButton

The `<RawButton>` component is a fully accessible button, rendered with almost no styling as a generic `<span>` element. It is intended for use any time click actions are needed for a UI element that is not visually represented as a skeuomorphic button.

For accessibility, the `role="button"`, `tabIndex="0"`, and `aria-disabled="false"` attributes are added by default, but can be overridden. An `aria-label` can be included via the `a11yText` prop, a visual focus ring is applied, and keyboard listeners are included that will fire the `onClick` function when the user activates the component with an `enter` or `space` keypress.

### Installation

`> npm install --save @paprika/raw-button`
or
`> yarn add @paprika/raw-button`

### Usage

```js
import RawButton from "@paprika/raw-button";

<RawButton onClick={clickHandler}>Visible click target</RawButton>;
```

### Props

- `a11yText`
- `canPropagate`
- `children` (required)
- `hasInsetFocusStyle`
- `isDisabled`
- `onClick` (required)
- `tabIndex`
- `role`

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/RawButton/src/RawButton.js)
