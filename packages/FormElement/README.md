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
  <FormElement.Content>
    {({ idForLabel, ariaDescribedBy }) => (
      <Input
        id={idForLabel}
        onChange={handleChange}
        value={value}
        placeholder="Form placeholder"
        aria-describedby={ariaDescribedBy}
        aria-required={hasRequiredLabel}
        hasError={false}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        size={size}
      />
    )}
  </FormElement.Content>
</FormElement>;
```

Using with paprika `<DatePicker />`

```js
import DatePicker from "@paprika/date-picker";
import FormElement from "@paprika/form-element";

<FormElement label="Name">
  <FormElement.Content>
    {({ idForLabel, ariaDescribedBy }) => (
      <DatePicker
        id={idForLabel}
        onChange={handleChange}
        value={value}
        placeholder="Form placeholder"
        aria-describedby={ariaDescribedBy}
        aria-required={hasRequiredLabel}
        hasError={false}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        size={size}
      />
    )}
  </FormElement.Content>
</FormElement>;
```

Using with DOM input

```js
import FormElement from "@paprika/form-element";

<FormElement hasRequiredLabel={hasRequiredLabel} label="Name">
  <FormElement.Content>
    {({ idForLabel, ariaDescribedBy }) => (
      <input
        aria-required={hasRequiredLabel}
        aria-describedby={ariaDescribedBy}
        aria-invalid={Boolean(errorText.length)}
        disabled={isDisabled}
        id={idForLabel}
        readOnly={isReadOnly}
      />
    )}
  </FormElement.Content>
</FormElement>;
```

#### FormElement

- `children` (required)
- `id`
- `isDisabled`
- `isInline`
- `isLabelVisuallyHidden`
- `hasOptionalLabel`
- `isReadOnly`
- `hasRequiredLabel`
- `label` (required)
- `size`

#### FormElement.Content

- `children` (required)

#### FormElement.Description

- `children` (required)

#### FormElement.Instructions

- `children` (required)

#### FormElement.Error

- `children`

#### FormElement.Help

- `children` (required)
- `triggerA11yText`

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/FormElement/src/FormElement.js)
