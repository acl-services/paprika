## CollapsibleChecklists

A controlled component that has checkable groups of checkable items.
Checking the parent checks all of the children.

### Installation

`> npm install --save @paprika/collapsible-checklists`
or
`> yarn add @paprika/collapsible-checklists`

### Usage

```js
import CollapsibleChecklists from "@paprika/collapsible-checklists";

const YourComponent = () => {
  return (
    <CollapsibleChecklists
      onChange={() => {
        /*...*/
      }}
    >
      <CollapsibleChecklists.Heading>Flowers</CollapsibleChecklists.Heading>

      <CollapsibleChecklists.Group title="Roses">
        <CollapsibleChecklists.Item isChecked>Damask</CollapsibleChecklists.Item>
        <CollapsibleChecklists.Item isChecked>Eden</CollapsibleChecklists.Item>
        <CollapsibleChecklists.Item isChecked>Lady Banks</CollapsibleChecklists.Item>
      </CollapsibleChecklists.Group>

      <CollapsibleChecklists.Group title="Irises">
        <CollapsibleChecklists.Item isChecked>Siberian</CollapsibleChecklists.Item>
        <CollapsibleChecklists.Item>Yellow</CollapsibleChecklists.Item>
        <CollapsibleChecklists.Item isDisabled>Bearded</CollapsibleChecklists.Item>
        <CollapsibleChecklists.Item>Netted</CollapsibleChecklists.Item>
      </CollapsibleChecklists.Group>
    </CollapsibleChecklists>
  );
};

export default YourComponent;
```

### Props

##### CollapsibleChecklists

- `onChange`
- `title`

##### CollapsibleChecklists.Group

- `isCheckedByDefault`
- `isDisabled`
- `isIndeterminateByDefault`
- `onExpand`

##### CollapsibleChecklists.Item

- `isChecked`
- `isDisabled`
