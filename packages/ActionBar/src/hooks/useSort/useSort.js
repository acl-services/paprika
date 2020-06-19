import React from "react";
import nanoid from "nanoid";
import useI18n from "@paprika/l10n/lib/useI18n";
import sort from "./sort";
import { changeTypes } from "../../constants";

function sortData({ sortedFields, columns, data, locale }) {
  let sortedData = data;
  if (sortedFields.length > 0) {
    sortedFields.forEach(field => {
      sortedData = sort({
        data,
        columnId: field.columnId,
        direction: field.direction,
        columnType: columns.find(column => field.columnId === column.id).type,
        momentParsingFormat: columns.find(column => field.columnId === column.id).momentParsingFormat,
        locale,
      });
    });
  }
  return sortedData;
}

export default function useSort({ data = null, columns }) {
  const [sortedFields, setSortedFields] = React.useState([]);
  const [sortedData, setSortedData] = React.useState(data);
  const [appliedNumber, setAppliedNumber] = React.useState(0);
  const I18n = useI18n();

  const handleAddField = React.useCallback(() => {
    setSortedFields(prevFields => [
      ...prevFields,
      {
        id: nanoid(),
        columnId: columns[0].id,
        direction: "ASCEND",
      },
    ]);
  }, [columns]);

  const handleDeleteField = React.useCallback(
    deletedId => {
      setSortedFields(prevFields => prevFields.filter(filter => filter.id !== deletedId));
    },
    [setSortedFields]
  );

  function handleApply() {
    setAppliedNumber(sortedFields.length);
    if (data !== null) {
      setSortedData(() => sortData({ sortedFields, columns, data, locale: I18n.locale }));
    }
  }

  const handleChangeField = React.useCallback(
    (type, { id: fieldId, direction, columnId }) => {
      let change = {};

      switch (type) {
        case changeTypes.COLUMN:
          change = { columnId };
          break;
        case changeTypes.DIRECTION:
          change = { direction };
          break;
        default:
          break;
      }

      setSortedFields(prevFields =>
        prevFields.map(fieldItem => (fieldItem.id === fieldId ? { ...fieldItem, ...change } : fieldItem))
      );
    },
    [setSortedFields]
  );

  return {
    appliedNumber,
    sortedData,
    sortedFields,
    onAddSort: handleAddField,
    onDeleteSort: handleDeleteField,
    onChangeSort: handleChangeField,
    onApply: handleApply,
  };
}
