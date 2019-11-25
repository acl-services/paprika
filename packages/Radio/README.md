## Radio

The `<Radio>` component displays a radio input and label text beside it. When clicked it selects the input and deselects any other radio input in its group.

### Installation

`> npm install --save @paprika/radio`
or
`> yarn add @paprika/radio`

### Usage

```js
import Radio from "@paprika/radio";

<Radio.Group
  defaultCheck={check => check.props.value.id === "id-1"}
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

#### Radio.Group

- a11yLabelledByText
- canDeselect
- defaultCheck
- children
- isDisabled
- onChange
- size

#### Radio

- value

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Radio/src/Radio.js)
