## DataGrid

### Installation

`> npm install --save @paprika/data-grid`
or
`> yarn add @paprika/data-grid`

### Usage

For a basic DataGrid

```js
import DataGrid from "@paprika/data-grid";

const data = [{ column1: "1", column2: "2" }, { column1: "3", column2: "4" }, { column1: "5", column2: "6" }];

return (
  <DataGrid>
    <DataGrid.ColumnDefinition header="Column 1" cell="column1" />
    <DataGrid.ColumnDefinition header="Column 2" cell="column2" />
  </DataGrid>
);
```

[Documentation](#) `Need to update link for documentation`
[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/DataGrid/src/DataGrid.js)
