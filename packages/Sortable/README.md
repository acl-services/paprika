## Sortable

The `<Sortable>` component creates a vertical list of items, that can be re-ordered with a mouse via dragging and dropping, or with the keyboard.

### Installation

`> npm install --save @paprika/sortable`
or
`> yarn add @paprika/sortable`

### Usage

For the most basic case, simply provide your items as `<Sortable.Item>` children.

```js
<Sortable onChange={changeHandler}>
  <Sortable.Item>Item One</Sortable.Item>
  <Sortable.Item>Item Two</Sortable.Item>
  <Sortable.Item>Item Three</Sortable.Item>
</Sortable>
```

When an item is moved, the `onChange` callback is invoked with `result`:

```js
{
  source: 0,
  destination: 2,
}
```

If the item was dropped outside of the component, then `destination` will be `null`.

For localized screen reader descriptions, use the `<L10n>` provider component around this component or with your application.

### Props

- `children`
- `hasNumbers`
- `onChange` (Required)
- `onRemove`

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Sortable/src/Sortable.js)
