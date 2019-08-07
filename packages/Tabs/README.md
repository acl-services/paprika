## Tabs

The `<Tabs>` component displays tabs horizontally with panels associated with each tab.

### Installation

`> npm install --save @paprika/tabs`
or
`> yarn add @paprika/tabs`

### Usage

```js
import Tabs from "@paprika/tabs";

<Tabs>
  <Tabs.List>
    <Tabs.Tab>Hello</Tabs.Tab>
    <Tabs.Tab isDisabled>World</Tabs.Tab>
    <Tabs.Tab>ABC</Tabs.Tab>
    <Tabs.Tab isDisabled>Disabled Tab</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>Hello Tab</Tabs.Panel>
    <Tabs.Panel>Disabled tab 2</Tabs.Panel>
    <Tabs.Panel>ABC Tab</Tabs.Panel>
    <Tabs.Panel>Disabled tab 4</Tabs.Panel>
  </Tabs.Panels>
</Tabs>;
```

### Props

- children
- defaultIndex
- isDisabled

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Tabs/src/Tabs.js)

#### List

- a11yText
- children

[More detail about this prop](https://github.com/acl-services/paprika/blob/master/packages/Tabs/src/components/List/List.js)

#### Tab

- className
- label
- isSelected
- isDisabled
- href
- onClick
- onKeyDownArrows

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Tabs/src/components/Tab/Tab.js)

#### Panels

- children

[More detail about this prop](https://github.com/acl-services/paprika/blob/master/packages/Tabs/src/components/Panels/Panels.js)

#### Panel

- children
- isSelected

[More detail about this prop](https://github.com/acl-services/paprika/blob/master/packages/Tabs/src/components/Panel/Panel.js)
