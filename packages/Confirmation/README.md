## Confirmation

The `<Confirmation>` component displays a confirmation panel with confirm and cancel actions

### Installation

`> npm install --save @paprika/confirmation`
or
`> yarn add @paprika/confirmation`

### Usage

```js
import Confirmation from "@paprika/confirmation";

<Confirmation
  confirmLabel="Delete filter"
  description="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken"
  isOpen
  onConfirm={() => handleConfirm(onClose)}
  onCancel={() => handleCancel(onClose)}
  heading="Delete filter?"
/>;
```

### Props

- buttonSize
- confirmButtonType
- confirmLabel
- description
- isOpen
- onCancel
- onClose
- onConfirm
- heading

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Confirmation/src/Confirmation.js)
