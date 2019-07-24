## ProgressAccordion

The `<DropdownMenu>` component displays a trigger button, which when clicked displays a list of items in a dropdown format. These items can be raw content, Links or actions such as Delete, which will prompt a confirmation panel to be displayed

### Installation

`> npm install --save @paprika/dropdown-menu`
or
`> yarn add @paprika/dropdown-menu`

### Usage

```js
import DropdownMenu from "@paprika/dropdown-menu";

<DropdownMenu
  renderTrigger={({ isOpen, handleOpenMenu }) => (
    <DropdownMenu.Trigger isOpen={isOpen} handleOpenMenu={handleOpenMenu}>
      Trigger
    </DropdownMenu.Trigger>
  )}
>
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
        <DropdownMenu.Confirmation
          confirmLabel="Delete filter"
          description="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken"
          onConfirm={() => handleConfirm(onClose)}
          onCancel={() => handleCancel(onClose)}
          heading="Delete filter?"
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
- renderTrigger

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/DropdownMenu/src/DropdownMenu.js)

#### DropdownMenu.Trigger

- isOpen
- handleOpenMenu

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/DropdownMenu/src/components/Trigger/Trigger.js)

#### DropdownMenu.Item

- children
- isDestructive
- onClick
- onClose
- onShowConfirmation
- renderConfirmation

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/DropdownMenu/src/components/Item/Item.js)

#### DropdownMenu.LinkItem

- children
- link
- isExternal

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/DropdownMenu/src/components/LinkItem/LinkItem.js)

#### DropdownMenu.Divider

[More detail about this component](https://github.com/acl-services/paprika/blob/master/packages/DropdownMenu/src/components/Divider/Divider.js)

#### DropdownMenu.Confirmation

- buttonSize
- confirmButtonType
- confirmLabel
- description
- onCancel
- onClose
- onConfirm
- heading

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/DropdownMenu/src/components/Confirmation/Confirmation.js)
