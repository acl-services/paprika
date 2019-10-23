## Checkbox

The `<Checkbox>` component displays a checkbox and label text beside it. When clicked it displays a checkmark. It can also have an indeterminate state which can be used to group checkboxes.

### Installation

`> npm install --save @paprika/checkbox`
or
`> yarn add @paprika/checkbox`

### Usage

```js
import Checkbox from "@paprika/checkbox";

<Checkbox onChange={handleChange} checkState={checkedStateValue>
  Checkbox 1
</Checkbox>;
```

### Props

- a11yText
- children
- isDisabled
- checkedState
- onChange
- size

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Checkbox/src/Checkbox.js)
