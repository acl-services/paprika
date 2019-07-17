## Form Element

### Installation

`> npm install --save @paprika/form-element`
or
`> yarn add @paprika/form-element`

### Usage

Please use `<L10n />` component to wrap `<FormElement />` or you application.

For a basic date picker

```js
import DatePicker from "@paprika/date-picker";

<DatePicker onChange={changeHandler} />;
```

Customized input

```js
import DatePicker from "@paprika/date-picker";

<DatePicker onChange={changeHandler}>
  <DatePicker.Input placeholder="Date..." />
</DatePicker>;
```

#### DatePicker.Input

- `a11yText`
- `placeholder`
- `size` `["small", "medium", "large"]`

#### DatePicker.Popover

- `align` `["top", "right", "bottom", "left"]`
- `offset`
- `zIndex`

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/DatePicker/src/DatePicker.js)
