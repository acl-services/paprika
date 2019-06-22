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
  <Sortable.Item sortId="1">Item One</Sortable.Item>
  <Sortable.Item sortId="2">Item Two</Sortable.Item>
  <Sortable.Item sortId="3">Item Three</Sortable.Item>
</Sortable>
```

Children of `<Sortable>` that are NOT `<Sortable.Item>` will be ignored. A unique `sortId` is important to maintain the focus after an update.

When an item is moved, the `onChange` callback is invoked with `result`:

```js
{
  source: 0,
  destination: 2,
}
```

If the item was dropped outside of the component, then `destination` will be `null`.

For localized screen reader descriptions, use the `<L10n>` provider component around this component or with your application.

Read more about the library used for this component, [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd).

### Props

- `children`
- `hasNumbers`
- `onChange` (Required)
- `onRemove`

#### Sortable.Item

- `sortId` (Required)

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Sortable/src/Sortable.js)
