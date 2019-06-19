## Date picker

### Installation

`> npm install --save @paprika/date-picker`
or
`> yarn add @paprika/date-picker`

### Usage

Please use `<L10n />` component to wrap `<DatePicker />` or you application.

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

### Props

- `children`
- `dataFormat`
- `date` Moment object
- `humanFormat`
- `isDisabled`
- `isReadOnly`
- `onChange` (Required)

#### DatePicker.Input

- `a11yText`
- `placeholder`
- `size` `["small", "medium", "large"]`

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/DatePicker/src/DatePicker.js)
