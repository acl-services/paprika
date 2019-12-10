## Input

### Installation

`> npm install --save @paprika/input`
or
`> yarn add @paprika/input`

### Usage

Please use `<L10n />` component to wrap `<Input />` or your application.

The Input can be used as a controlled or an un-controlled component.

To use it as controlled:

```js
import Input from "@paprika/input";
...
const [val, setVal] = React.useState("Hello world");
return (
  <Input
    value={val}
    onChange={e => {
      setVal(e.target.value);
    }}
  />;
);
```

To use it as an un-controlled component:

```js
import Input from "@paprika/input";
...
return (
  <Input
    defaultValue="Hello world"
    onChange={e => {
      console.log(`The new value is ${e.target.value}`);
    }}
  />
);
```
