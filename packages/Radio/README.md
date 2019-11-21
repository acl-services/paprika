## Radio

The `<Radio>` component displays a radio input and label text beside it. When clicked it selects the input and deselects any other radio input in its group. It can also have an indeterminate state which can be used to group checkboxes.

### Installation

`> npm install --save @paprika/radio`
or
`> yarn add @paprika/radio`

### Usage

```js
import Radio from "@paprika/radio";

<Radio.Group
  defaultCheck={check => check.props.value.id === "value 1"}
  onChange={value => {
    // do something with value
  }}
>
  <Radio value={{ id: "id-1" }}>Radio 1</Radio>
  <Radio value={{ id: "id-2" }}>Radio 2</Radio>
  <Radio value={{ id: "id-3" }}>Radio 3</Radio>
  <Radio value={{ id: "id-4" }}>Radio 4</Radio>
</Radio.Group>;
```

### Props

- a11yText
- children
- isDisabled
- isChecked
- canDeselect
- onClick
- size ("small, "medium", "large")

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Checkbox/src/Radio.js)
