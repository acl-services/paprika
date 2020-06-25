## Action Bar

Action Bar component contains 3 individual widgets.

`<Filter />` `<Sort />` and `<ColumnsArrangement />`

### Installation

`> npm install --save @paprika/action-bar`
or
`> yarn add @paprika/action-bar`

### Usage

#### Filter

```js
import { Filter } from "@paprika/action-bar";

<Filter
  appliedNumber={appliedNumberOfFilters}
  columns={columns}
  onAddFilter={onAddFilter}
  onApply={onApply}
  onChangeOperator={onChangeOperator}
  operator={operator}
>
  <Filter.Item id={1} index={0} onChange={handleChange} onDelete={handleDelete} />
</Filter>;
```

[More detail about props](https://github.com/acl-services/paprika/blob/aa770ab261d6364c2f14717c8edeb7d1e560a3d5/packages/ActionBar/src/components/Filter/Filter.js)

You can also use the hook `useFilter`

```js
const {
  appliedNumberOfFilters,
  filters,
  onAddFilter,
  onChangeOperator,
  onDeleteFilter,
  onChangeFilter,
  operator,
  onApply,
  filteredData,
} = useFilter({ columns, rulesByType, data });

const handleDeleteFilter = filterId => () => {
  onDeleteFilter(filterId);
};
const handleChangeFilter = filterId => params => {
  onChangeFilter({ ...params, id: filterId });
};

return (
  <Filter
    appliedNumber={appliedNumberOfFilters}
    columns={columns}
    onAddFilter={onAddFilter}
    onApply={onApply}
    onChangeOperator={onChangeOperator}
    operator={operator}
  >
    {filters.map((filter, index) => (
      <Filter.Item
        key={filter.id}
        {...filter}
        index={index}
        onChange={handleChangeFilter(filter.id)}
        onDelete={handleDeleteFilter(filter.id)}
      />
    ))}
  </Filter>

  // display filteredData
);
```

#### Sort

```js
<Sort appliedNumber={appliedNumber} columns={columns} onAddSort={onAddSort} onApply={onApply}>
  <Sort.Field id={fieldId} onDelete={handleDelete} onChange={handleChange} isFirst />
  <Sort.Field id={fieldId} onDelete={handleDelete} onChange={handleChange} isFirst={false} />
</Sort>
```

[More detail about props](https://github.com/acl-services/paprika/blob/aa770ab261d6364c2f14717c8edeb7d1e560a3d5/packages/ActionBar/src/components/Sort/Sort.js)

You can also use the hook `useSort`

```js
const { appliedNumber, sortedFields, sortedData, onAddSort, onDeleteSort, onChangeSort, onApply } = useSort({
  columns,
});

const handleDelete = fieldId => () => {
  onDeleteSort(fieldId);
};

const handleChange = fieldId => params => {
  onChangeSort({ ...params, id: fieldId });
};

return (
  <Sort appliedNumber={appliedNumber} columns={columns} onAddSort={onAddSort} onApply={onApply}>
    {sortedFields.map((field, index) => (
      <Sort.Field
        key={field.id}
        {...field}
        onDelete={handleDelete(field.id)}
        onChange={handleChange(field.id)}
        isFirst={index === 0}
      />
    ))}
  </Sort>

  // display sortedData
);
```

#### ColumnsArrangement

```js
<ColumnsArrangement
  columns={orderedColumns}
  onChangeOrder={handleChangeOrder}
  onHideAll={handleHideAll}
  onShowAll={handleShowAll}
  onChangeVisibility={handleChangeVisibility}
/>
```

[More detail about props](https://github.com/acl-services/paprika/blob/aa770ab261d6364c2f14717c8edeb7d1e560a3d5/packages/ActionBar/src/components/ColumnsArrangement/ColumnsArrangement.js)

You can also use the hook `useColumnsArrangement`

```js
const {
  orderedColumnIds,
  onChangeVisibility,
  onShowAll,
  onHideAll,
  onChangeOrder,
  isColumnHidden,
} = useColumnsArrangement(defaultColumnsForArrangement);

return (
  <ColumnsArrangement
    orderedColumnIds={orderedColumnIds}
    onChangeOrder={onChangeOrder}
    onHideAll={onHideAll}
    onShowAll={onShowAll}
    onChangeVisibility={onChangeVisibility}
  >
    <ColumnsArrangement.ColumnDefinition
      id="columnId"
      label="Column label"
      isDisabled={false}
      isHidden={isColumnHidden("columnId")}
    />
  </ColumnsArrangement>
);
```
