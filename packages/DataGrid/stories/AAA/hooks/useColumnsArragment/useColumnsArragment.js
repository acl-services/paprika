import React from "react";

// At this point is hard to control the order of the columns we should have a easier way to do this.
// also the hidden columns are hard to control, I would suggest to have an array where you can store the ids you want to hide

const initialColumns = [
  { id: "ATTTYPE_NAME", key: "ATTTYPE_NAME", label: "Name", name: "ATTTYPE_NAME", type: "TEXT" },
  { id: "ATT_TYPE_ID", key: "ATT_TYPE_ID", label: "Id", name: "ATT_TYPE_ID", type: "NUMBER" },
  {
    id: "SELECTTYPE_DESC",
    key: "SELECTTYPE_DESC",
    label: "Type",
    name: "SELECTTYPE_DESC",
    type: "TEXT",
  },
  {
    id: "ATTTYPE_NAME_ADMIN",
    key: "ATTTYPE_NAME_ADMIN",
    label: "Admin",
    name: "ATTTYPE_NAME_ADMIN",
    type: "TEXT",
    isHidden: true,
  },
  { id: "ATTTYPE_DESC", key: "ATTTYPE_DESC", label: "Description", name: "ATTTYPE_DESC", type: "TEXT", isHidden: true },
  { id: "ATTTYPE_ORDER", key: "ATTTYPE_ORDER", label: "Order", name: "ATTTYPE_ORDER", type: "NUMBER", isHidden: true },
  {
    id: "ATTTYPE_RSAM_ID",
    key: "ATTTYPE_RSAM_ID",
    label: "RSAM Id",
    name: "ATTTYPE_RSAM_ID",
    type: "TEXT",
    isHidden: true,
  },
  {
    id: "ATTTYPE_SP_MULTI_SELECT",
    key: "ATTTYPE_SP_MULTI_SELECT",
    label: "Multi select",
    name: "ATTTYPE_SP_MULTI_SELECT",
    type: "NUMBER",
    isHidden: true,
  },
  {
    id: "COUNT_OF_RELATED_ASSET_TYPES",
    key: "COUNT_OF_RELATED_ASSET_TYPES",
    label: "Asset type",
    name: "COUNT_OF_RELATED_ASSET_TYPES",
    type: "NUMBER",
    isHidden: true,
  },
  {
    id: "COUNT_OF_RELATED_RECORD_TYPES",
    key: "COUNT_OF_RELATED_RECORD_TYPES",
    label: "Record type",
    name: "COUNT_OF_RELATED_RECORD_TYPES",
    type: "NUMBER",
    isHidden: true,
  },
  {
    id: "COUNT_OF_ROLES_ASSIGNED_THROUGH_THIS_ATTRIBUTE",
    key: "COUNT_OF_ROLES_ASSIGNED_THROUGH_THIS_ATTRIBUTE",
    label: "Roles count",
    name: "COUNT_OF_ROLES_ASSIGNED_THROUGH_THIS_ATTRIBUTE",
    type: "NUMBER",
    isHidden: true,
  },
];

export default function useColumnsArragment({ setNext = () => {} }) {
  const [orderedColumns, setColumns] = React.useState({ initialColumns });

  function handleChangeOrder({ source, destination }) {
    const newOrder = [...orderedColumns];
    const movedChild = newOrder.splice(source, 1);
    newOrder.splice(destination, 0, ...movedChild);
    setColumns(newOrder);
    setNext(prev => prev && prev + 1);
  }

  function handleHideAll() {
    setColumns(prevColumns =>
      prevColumns.map(column => ({
        ...column,
        isHidden: true,
      }))
    );
    setNext(prev => prev && prev + 1);
  }

  function handleShowAll() {
    setColumns(prevColumns =>
      prevColumns.map(column => ({
        ...column,
        isHidden: false,
      }))
    );
    setNext(prev => prev && prev + 1);
  }

  function handleChangeVisibility(columnId) {
    setColumns(prevColumns =>
      prevColumns.map(column =>
        column.id === columnId
          ? {
              ...column,
              isHidden: !column.isHidden,
            }
          : column
      )
    );
    setNext(prev => prev && prev + 1);
  }

  React.useEffect(() => {
    setColumns(initialColumns);
  }, []);

  return { orderedColumns, handleChangeVisibility, handleShowAll, handleHideAll, handleChangeOrder };
}
