## Date picker

### Installation

`> npm install --save @paprika/listbox`
or
`> yarn add @paprika/listbox`

### Usage

For a basic ListBox

```js
import ListBox from "@paprika/listbox";

function Component() {
  return (
    <ListBox onChange={changeHandler}>
      <ListBox.Option>Option 1</ListBox.Option>
      <ListBox.Option>Option 2</ListBox.Option>
    </ListBox>
  );
}
```

With Filter

```js
import ListBox from "@paprika/listbox";

function Component() {
  return (
    <ListBox onChange={changeHandler}>
      <ListBox.Filter />
      <ListBox.Option>Option 1</ListBox.Option>
      <ListBox.Option>Option 2</ListBox.Option>
    </ListBox>
  );
}
```

You can compose the ListBox with the following components:

- <ListBox.Divider />
- <ListBox.Filter />
- <ListBox.Footer />
- <ListBox.Option />
- <ListBox.Popover />
- <ListBox.RawItem />
- <ListBox.Trigger />

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/ListBox/src/ListBox.js)
