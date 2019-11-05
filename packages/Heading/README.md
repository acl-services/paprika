## Heading

The `<Heading>` component provides six different levels of heading with different stylings such as divider, underline, light or hidden.

It is rendered as a `<h> tag` by default, but can also be rendered as a generic `<div>`. Set `isSemantic` to false if there are global CSS conflicts.

### Installation

`> npm install --save @paprika/heading`
or
`> yarn add @paprika/heading`

### Usage

For a basic heading

```js
import Heading from "@paprika/heading";

<Heading level={1}>Heading One</Heading>;
```

Or a h6 but displayed as h1

```js
import Heading from "@paprika/heading";

<Heading level={6} displayLevel={1}>
  Heading Six
</Heading>;
```

Or headings with divider, hasUnderline, isLight, or isHidden

```js
import Heading from "@paprika/heading";

<Heading level={1} hasDivider>
  Heading One With divider
</Heading>;

<Heading level={1} hasUnderline>
  Heading One With underline
</Heading>;

<Heading level={1} isLight>
  Heading One With isLight
</Heading>;

<Heading level={1} isHidden>
  Heading One With isHidden
</Heading>;
```

### Props

- `a11yText`
- `children`
- `displayLevel`
- `domRef`
- `hasDivider`
- `hasUnderline`
- `isHidden`
- `isLight`
- `isSemantic`
- `level`

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Heading/src/Heading.js)
