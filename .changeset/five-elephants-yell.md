---
"@paprika/data-table": major
---

- Removed `DataTable.ResizeContainer` subcomponent
- Removed `height` `width` props
- Added `maxHeight` `maxWidth` props
- Added `shouldResizeWithViewport` prop

#### why the change was made:

Making the calculation of the initial size of DataTable easier. More details can be found on this PR: [#1228](https://github.com/acl-services/paprika/pull/1228)

#### 👷 Moving from 0.x.x to 1.x.x:

Before: with the `DataTable.ResizeContainer`

```jsx
<DataTable a11yText="a11y text" columns={columns} data={data}>
  <DataTable.InfiniteLoader {...infiniteLoaderProps} />
  <DataTable.ResizeContainer style={{ height: "calc(100vh - 200px)", width: "100%" }} />
</DataTable>
```

After: without the `DataTable.ResizeContainer`

```jsx
<DataTable a11yText="a11y text" columns={columns} data={data} maxHeight="calc(100vh-200px)" maxWidth="100vw">
  <DataTable.InfiniteLoader {...infiniteLoaderProps} />
</DataTable>
```

---

Before: without the `DataTable.ResizeContainer`

```jsx
<DataTable a11yText="a11y text" height="500" width="80vw" columns={columns} data={data}>
  <DataTable.InfiniteLoader {...infiniteLoaderProps} />
</DataTable>
```

After: without the `DataTable.ResizeContainer`

```jsx
<DataTable a11yText="a11y text" columns={columns} data={data} maxHeight="500px" maxWidth="80vw">
  <DataTable.InfiniteLoader {...infiniteLoaderProps} />
</DataTable>
```
