# @paprika/data-table

## 1.3.0-next.0

### Minor Changes

- 03d144a: Sanitizize html in DataTable VariableList component

## 1.2.4

### Patch Changes

- d60fb99: peerDependencies now include react@17 and react@18
- Updated dependencies [d60fb99]
  - @paprika/constants@1.0.1
  - @paprika/tokens@2.0.1
  - @paprika/helpers@2.4.2
  - @paprika/stylers@1.1.8

## 1.2.4-next.0

### Patch Changes

- d60fb99: peerDependencies now include react@17 and react@18
- Updated dependencies [d60fb99]
  - @paprika/constants@1.0.1-next.0
  - @paprika/tokens@2.0.1-next.0
  - @paprika/helpers@2.4.2-next.0
  - @paprika/stylers@1.1.8-next.0

## 1.2.3

### Patch Changes

- Updated dependencies [7fbad8a]
  - @paprika/helpers@2.4.1

## 1.2.3-next.0

### Patch Changes

- Updated dependencies [7fbad8a]
  - @paprika/helpers@2.4.1-next.0

## 1.2.2

### Patch Changes

- 5217917: Support %(pct) unit in `maxHeight` and `maxWidth` props

## 1.2.2-next.0

### Patch Changes

- 5217917: Support %(pct) unit in `maxHeight` and `maxWidth` props

## 1.2.1

### Patch Changes

- Updated dependencies [49aa7f9]
- Updated dependencies [9f10d8c]
- Updated dependencies [dae4008]
  - @paprika/helpers@2.4.0
  - @paprika/stylers@1.1.7

## 1.2.1-next.1

### Patch Changes

- Updated dependencies [dae4008]
  - @paprika/stylers@1.1.7-next.0

## 1.2.1-next.0

### Patch Changes

- Updated dependencies [49aa7f9]
  - @paprika/helpers@2.4.0-next.0

## 1.2.0

### Minor Changes

- e38b557: Fix horizontal toolbar calculations

## 1.2.0-next.0

### Minor Changes

- e38b557: Fix horizontal toolbar calculations

## 1.1.1

### Patch Changes

- Updated dependencies [0dcf307]
- Updated dependencies [0bf34d9]
- Updated dependencies [0dcf307]
- Updated dependencies [9ac6aca]
  - @paprika/helpers@2.3.0
  - @paprika/tokens@2.0.0
  - @paprika/stylers@1.1.6

## 1.1.1-next.2

### Patch Changes

- Updated dependencies [9ac6aca]
  - @paprika/tokens@2.0.0-next.1
  - @paprika/stylers@1.1.6-next.1

## 1.1.1-next.1

### Patch Changes

- Updated dependencies [0dcf307]
- Updated dependencies [0dcf307]
  - @paprika/helpers@2.3.0-next.0

## 1.1.1-next.0

### Patch Changes

- Updated dependencies [0bf34d9]
  - @paprika/tokens@1.1.5-next.0
  - @paprika/stylers@1.1.6-next.0

## 1.1.0

### Minor Changes

- d3c2e23: DataTable updates on data change

## 1.1.0-next.0

### Minor Changes

- d3c2e23: DataTable updates on data change

## 1.0.0

### Major Changes

- d7cb497: - Removed `DataTable.ResizeContainer` subcomponent

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

  ***

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

## 1.0.0-next.0

### Major Changes

- d7cb497: - Removed `DataTable.ResizeContainer` subcomponent

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

  ***

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

## 0.2.1

### Patch Changes

- Updated dependencies [63f9a05]
- Updated dependencies [15b2a9a]
  - @paprika/helpers@2.2.1
  - @paprika/stylers@1.1.5
  - @paprika/tokens@1.1.4
  - @paprika/resize-detector@2.0.1

## 0.2.1-next.1

### Patch Changes

- Updated dependencies [15b2a9a]
  - @paprika/stylers@1.1.5-next.0
  - @paprika/tokens@1.1.4-next.0

## 0.2.1-next.0

### Patch Changes

- Updated dependencies [63f9a05]
  - @paprika/helpers@2.2.1-next.0
  - @paprika/resize-detector@2.0.1-next.0

## 0.2.0

### Minor Changes

- 2ed3472: Add auto-resizer to the DataTable

### Patch Changes

- 2b92f13: - Changed `children` prop to optional.
  - Some typing definition improvements.

## 0.2.0-next.1

### Minor Changes

- 2ed3472: Add auto-resizer to the DataTable

## 0.1.2-next.0

### Patch Changes

- 2b92f13: - Changed `children` prop to optional.
  - Some typing definition improvements.

## 0.1.1

### Patch Changes

- 343d673: Publish DataTable
- 7dc936f: Fix infinite loader rendering.
- Updated dependencies [036fe83]
- Updated dependencies [9e15465]
- Updated dependencies [343d673]
- Updated dependencies [80361b2]
  - @paprika/tokens@1.1.3
  - @paprika/helpers@2.2.0
  - @paprika/stylers@1.1.4

## 0.1.1-next.3

### Patch Changes

- Updated dependencies [80361b2]
  - @paprika/helpers@2.2.0-next.1

## 0.1.1-next.2

### Patch Changes

- 7dc936f: Fix infinite loader rendering.

## 0.1.1-next.1

### Patch Changes

- Updated dependencies [036fe83]
  - @paprika/tokens@1.1.3-next.0
  - @paprika/stylers@1.1.4-next.0

## 0.1.1-next.0

### Patch Changes

- 343d673: Publish DataTable
- Updated dependencies [343d673]
  - @paprika/helpers@2.1.4-next.0
