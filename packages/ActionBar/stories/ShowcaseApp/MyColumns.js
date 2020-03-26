import React from "react";
import { ColumnsArrangement, useColumnsArragment } from "../../src";

const defaultColumnsForArrangement = [
  { id: "goals", label: "Goals", isHidden: false, isDisabled: false },
  { id: "name", label: "Name", isHidden: false, isDisabled: false },
  { id: "status", label: "Status", isHidden: false, isDisabled: false },
  { id: "country", label: "Country", isHidden: false, isDisabled: false },
];

export default function MyColumns() {
  const {
    orderedColumns,
    handleChangeVisibility,
    handleShowAll,
    handleHideAll,
    handleChangeOrder,
  } = useColumnsArragment(defaultColumnsForArrangement);

  return (
    <ColumnsArrangement
      columns={orderedColumns}
      onChangeOrder={handleChangeOrder}
      onHideAll={handleHideAll}
      onShowAll={handleShowAll}
      onChangeVisibility={handleChangeVisibility}
    />
  );
}
