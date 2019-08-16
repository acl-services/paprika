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
  onConfirm={() => handleConfirm(onClose)}
  onCancel={() => handleCancel(onClose)}
  onClose={() => handleClose(onClose)}
  heading="Delete filter?"
  renderTrigger={({ isConfirmOpen, handleOpenConfirm }) => (
    <Confirmation.Trigger isConfirmOpen={isConfirmOpen} handleOpenConfirm={handleOpenConfirm}>
      Trigger
    </Confirmation.Trigger>
  )}
/>;

or

<Confirmation
  confirmLabel="Delete filter"
  description="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken"
  isOpenByDefault
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
- isOpenByDefault
- onCancel
- onClose
- onConfirm
- heading
- renderTrigger

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Confirmation/src/Confirmation.js)
