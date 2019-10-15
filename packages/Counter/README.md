## Counter

The `<Counter>` component is a decorative element that usually displays the count of a specific object.

### Installation

`> npm install --save @paprika/counter`
or
`> yarn add @paprika/counter`

### Usage

For a common use case

```js
import Counter from "@paprika/counter";
<Counter quantity="33" />;
```

Overwrite threshold

```js
import Counter from "@paprika/counter";

<Counter quantity="33" threshold="5" />;
```

### Props

- `color`
- `hasIndicator`
- `quantity`
- `size`
- `threshold`

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Counter/src/Counter.js)
