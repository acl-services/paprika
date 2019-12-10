## DropdownMenu

The `<DropdownMenu>` component displays a trigger button, which when clicked displays a list of items in a dropdown format. These items can be raw content, Links or actions such as Delete, which will prompt a confirmation panel to be displayed

### Installation

`> npm install --save @paprika/dropdown-menu`
or
`> yarn add @paprika/dropdown-menu`

### Usage

```js
import DropdownMenu from "@paprika/dropdown-menu";
import Confirmation from "@paprika/confirmation";

<DropdownMenu>
  <DropdownMenu.Trigger>Trigger</DropdownMenu.Trigger>
  <DropdownMenu.Item onClick={() => {}}>Edit</DropdownMenu.Item>
  <DropdownMenu.LinkItem isExternal link="http://www.wegalvanize.com">
    External link
  </DropdownMenu.LinkItem>
  <DropdownMenu.Item isDisabled onClick={() => {}}>
    Disabled Item
  </DropdownMenu.Item>
  <DropdownMenu.Divider />
  <DropdownMenu.Item
    isDestructive
    renderConfirmation={onClose => {
      return (
        <Confirmation
          body="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
          confirmLabel="Delete filter"
          defaultIsOpen
          heading="Delete filter?"
          onConfirm={handleConfirm}
          onClose={handleCloseConfirm(onCloseMenu)}
        />
      );
    }}
  >
    Delete filter
  </DropdownMenu.Item>
</DropdownMenu>;
```

### Props

- align
- children
- edge

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/DropdownMenu/src/DropdownMenu.js)

#### DropdownMenu.Trigger

- buttonType

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/DropdownMenu/src/components/Trigger/Trigger.js)

#### DropdownMenu.Item

- isDestructive
- renderConfirmation

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/DropdownMenu/src/components/Item/Item.js)

#### DropdownMenu.LinkItem

- link
- isExternal

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/DropdownMenu/src/components/LinkItem/LinkItem.js)

#### DropdownMenu.Divider

[More detail about this component](https://github.com/acl-services/paprika/blob/master/packages/DropdownMenu/src/components/Divider/Divider.js)
