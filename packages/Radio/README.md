## Radio

The `<Radio>` component displays a radio input and label text beside it. When clicked it selects the input and deselects any other radio input in its group. It can also have an indeterminate state which can be used to group checkboxes.

### Installation

`> npm install --save @paprika/radio`
or
`> yarn add @paprika/radio`

### Usage

```js
import Radio from "@paprika/radio";

<Radio onChange={handleChange} checkState={checkedStateValue>
  Radio 1
</Radio>;
```

### Props

- a11yText
- children
- isDisabled
- checkedState ("checked", "unchecked", "indeterminate")
- onChange
- size ("small, "medium", "large")

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Checkbox/src/Radio.js)
