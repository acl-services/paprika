## Pill

The `<Pill>` component is a decorate or interactive component that provides additional metadata such as: status, type or levels.

If an onClick handler is passed, it is rendered as a `<RawButton>`, otherwise it will be a decorated `<div>`.

Fore more information about the `<Pill>`, visit our [starling site](https://design.wegalvanize.com/p/components/pill).

### Installation

`> npm install --save @paprika/pill`
or
`> yarn add @paprika/pill`

### Usage

For a decorative pill

```js
import Pill from "@paprika/pill";

<Pill pillColor="mediumRisk">Medium risk</Pill>;
```

Or a interactive pill

```js
import Pill from "@paprika/pill";

<Pill pillColor="mediumRisk" onClick={clickHandler}>
  Click me
</Pill>;
```

Pill with an icon

```js
import Pill from "@paprika/pill";
import Icon from "@paprika/icon/lib/Upload";

<Pill pillColor="mediumRisk" size="small">
  <Icon />
  Medium risk with icon
</Pill>;
```

### Props

- `a11yText`
- `children`
- `isDisabled`
- `onClick`
- `pillColor`
- `size`

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Pill/src/Pill.js)
