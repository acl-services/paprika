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
  body="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken"
  onConfirm={handleCloseConfirm => handleConfirm(handleCloseConfirm)}
  onClose={handleClose}
  heading="Delete filter?">
    <Confirmation.TriggerButton>Trigger</Confirmation.TriggerButton>
  </Confirmation>
;

or

<Confirmation
  confirmLabel="Delete filter"
  body="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken"
  defaultIsOpen
  onConfirm={handleCloseConfirm => handleConfirm(handleCloseConfirm)}
  heading="Delete filter?"
/>;
```

### Props

- buttonSize
- confirmButtonType
- confirmLabel
- body
- defaultIsOpen
- isPending
- onClose
- onConfirm
- heading

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Confirmation/src/Confirmation.js)
