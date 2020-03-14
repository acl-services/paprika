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

export default function useSort({ data, columns, setNext = () => {} }) {
  const [sortedFields, setSortedFields] = React.useState([]);
  const [sortedData, setSortedData] = React.useState(data);

  const handleAddItem = React.useCallback(() => {
    function getDefaultField() {
      return {
        id: nanoid(),
        columnId: columns[0].id,
        direction: "ASCEND",
      };
    }

    setSortedFields(prevFields => [...prevFields, getDefaultField()]);
  }, [columns]);

  const handleDeleteItem = React.useCallback(
    deletedId => {
      setSortedFields(prevFields => [...prevFields].filter(filter => filter.id !== deletedId));
    },
    [setSortedFields]
  );

  function handleApply() {
    setSortedData(() => sortData({ sortedFields, columns, data }));
    setNext(prev => prev && prev + 1);
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

  React.useEffect(() => {
    if (data !== null) {
      const sorted = sortData({ sortedFields, columns, data });
      setSortedData(sorted);
    }
  }, [columns, data, sortedFields]);

  const appliedNumber = sortedFields.length;

  return {
    appliedNumber,
    sortedData,
    sortedFields,
    handleAddItem,
    handleDeleteItem,
    handleChangeItem,
    handleApply,
  };
}
