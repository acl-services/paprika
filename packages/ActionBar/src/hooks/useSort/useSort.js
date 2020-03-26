import React from "react";
import nanoid from "nanoid";
import sort from "./sort";

function sortData({ sortedFields, columns, data }) {
  let sortedData = data;
  if (sortedFields.length > 0) {
    sortedFields.forEach(field => {
      sortedData = sort({
        data,
        columnId: field.columnId,
        direction: field.direction,
        columnType: columns.find(column => field.columnId === column.id).type,
        momentParsingFormat: columns.find(column => field.columnId === column.id).momentParsingFormat,
      });
    });
  }
  return sortedData;
}

export default function useSort({ data = null, columns }) {
  const [sortedFields, setSortedFields] = React.useState([]);
  const [sortedData, setSortedData] = React.useState(data);

  const handleAddItem = React.useCallback(() => {
    setSortedFields(prevFields => [
      ...prevFields,
      {
        id: nanoid(),
        columnId: columns[0].id,
        direction: "ASCEND",
      },
    ]);
  }, [columns]);

  const handleDeleteItem = React.useCallback(
    deletedId => {
      setSortedFields(prevFields => [...prevFields].filter(filter => filter.id !== deletedId));
    },
    [setSortedFields]
  );

  function handleApply() {
    if (data !== null) {
      setSortedData(() => sortData({ sortedFields, columns, data }));
    }
  }

  const handleChangeItem = React.useCallback(
    ({ id: fieldId, direction, columnId }) => {
      let change;
      if (columnId) {
        change = { columnId };
      } else {
        change = { direction };
      }

      setSortedFields(prevFields =>
        prevFields.map(fieldItem => (fieldItem.id === fieldId ? { ...fieldItem, ...change } : fieldItem))
      );
    },
    [setSortedFields]
  );

  // React.useEffect(() => {
  //   if (data !== null) {
  //     const sorted = sortData({ sortedFields, columns, data });
  //     setSortedData(sorted);
  //   }
  // }, [columns, data, sortedFields]);

  const appliedNumber = sortedFields.length;

  return {
    appliedNumber,
    sortedData,
    sortedFields,
    onAddField: handleAddItem,
    onDeleteField: handleDeleteItem,
    onChangeField: handleChangeItem,
    onApply: handleApply,
  };
}
