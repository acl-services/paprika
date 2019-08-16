## Popover

The `<Popover>` component renders an overlay of content anchored to a trigger button (or specific positioning element). It can be triggered by click (or keypress), by hover (or keyboard focus – as a tooltip), or programatically.

### Installation

```sh
$ npm install @paprika/popover
```

- or -

```sh
$ yarn add @paprika/popover
```

### Usage

The `<Popover>` can be used as a controlled or uncontrolled component. If controlled, the `isOpen` and `onClose` props must be utilized.

#### Tooltip style

The `<Popover>` can be used as a tooltip by making it open "eagerly" on hover or keyboard focus via the `isEager` prop. Typically a tooltip is also designed with white text on a black background, achieved with the `isDark` prop.

#### Trigger element

It is normally used with a trigger of some kind, like a button or an icon. If using as an uncontrolled component, it is helpful to wrap the trigger in a `<Popover.Trigger>`. For more advanced usage, this components children can be used as a render prop. If using as a controlled component, the `<Popover.Trigger>` may not be needed and a `<Button>` can be included as children of the `<Popover>`.

#### Content

Content for the `<Popover>` is also included as children, wrapped by the `<Popover.Content>`. For a "card" style, the `<Popover.Card>` is a convenient helper. To include an arrow that points to the trigger element, the `<Popover.Tip>` can be included as a sibling element of the `<Popover.Content>` (include it _after_ the Content to avoid an explicit zIndex prop on the Tip).

#### Basic uncontrolled example

```js
import Popover from "@paprika/popover";

<Popover>
  <Popover.Trigger>
    <Icon />
  </Popover.Trigger>
  <Popover.Content>
    <Popover.Card>Lorem hipsum kombucha leggings vinyl.</Popover.Card>
  </Popover.Content>
  <Popover.Tip />
</Popover>;
```

#### Basic controlled example

```js
import Popover from "@paprika/popover";

const [isOpen, setOpen] = React.useState(false);

<Popover isOpen={isOpen} onClose={() => { setOpen(false) }>
  <Button onClick={() => { setOpen(prevOpen => !prevOpen) }}>
    Open Popover
  </Button>
  <Popover.Content>
    <Popover.Card>
      Lorem hipsum kombucha leggings vinyl.
    </Popover.Card>
  </Popover.Content>
  <Popover.Tip />
</Popover>
```

### Props

align
children (required)
isDark  
isEager
isOpen  
defaultIsOpen
maxWidth  
onClose
offset  
getPositioningElement
getScrollContainer  
shouldKeepFocus
zIndex

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Popover/src/Popover.js)

#### Trigger

a11yText
children (required)

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Popover/src/components/Trigger/Trigger.js)

#### Content

children (required)
onBlur

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Popover/src/components/Content/Content.js)

#### Card

children (required)

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Popover/src/components/Card/Card.js)

#### Tip

zIndex

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Popover/src/components/Tip/Tip.js)
