## Form Element

### Installation

`> npm install --save @paprika/form-element`
or
`> yarn add @paprika/form-element`

### Usage

Please use `<L10n />` component to wrap `<FormElement />` or you application.

Using with paprika `<Input />`

```js
import FormElement from "@paprika/form-element";
import Input from "@paprika/input";

<FormElement label="Name">
  <Input onChange={changeHandler} />
</FormElement>;
```

Using with paprika `<DatePicker />`

```js
import DatePicker from "@paprika/date-picker";
import FormElement from "@paprika/form-element";

<FormElement label="Name">
  <DatePicker onChange={changeHandler} />
</FormElement>;
```

Using with DOM input

```js
import FormElement from "@paprika/form-element";

<FormElement label="Name">
  <input onChange={changeHandler} />
</FormElement>;
```

Using with your component, you'll get `aria-describedby`, `hasError`, `isDisabled`, `isReadOnly` and `size` as additional props.

```js
import FormElement from "@paprika/form-element";
import MyInput from "./MyInput";

<FormElement label="Name">
  <MyInput />
</FormElement>;
```

#### FormElement

- `children` (required)
- `id`
- `isDisabled`
- `isInline`
- `isLabelVisuallyHidden`
- `isOptional`
- `isReadOnly`
- `isRequired`
- `label` (required)
- `size`

#### FormElement.Description

- `children` (required)
- `ariaDescriptionId`

#### FormElement.Error

- `children`

#### FormElement.Hint

- `children` (required)
- `triggerA11yText`

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/FormElement/src/FormElement.js)
