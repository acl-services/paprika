## Textarea

### Installation

`> npm install --save @paprika/textarea`
or
`> yarn add @paprika/textarea`

### Usage

The Textarea can be used as a controlled or an un-controlled component.

To use it as controlled:

```js
import Textarea from "@paprika/textarea";
...
const [val, setVal] = React.useState("Hello world");
return (
  <Textarea
    value={val}
    onChange={e => {
      setVal(e.target.value);
    }}
  />;
);
```

To use it as an un-controlled component:

```js
import Textarea from "@paprika/textarea";
...
return (
  <Textarea
    defaultValue="Hello world"
    onChange={e => {
      console.log(`The new value is ${e.target.value}`);
    }}
  />
);
```
