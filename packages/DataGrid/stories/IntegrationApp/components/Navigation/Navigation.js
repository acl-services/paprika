import React from "react";
import Navigation from "@paprika/navigation";
import Filter from "./Filter";
import Sort from "./Sort";
import Columns from "./Columns";

export default function ControlledNavigation(props) {
  const {
    orderedColumns,
    columns,
    filters,
    operator,
    setColumns,
    setFilters,
    setOperator,
    setSortedFields,
    sortedFields,
    onApply,
  } = props;

  return (
    <Navigation>
      <Filter
        columns={columns}
        filters={filters}
        operator={operator}
        setFilters={setFilters}
        setOperator={setOperator}
        onApply={onApply}
      />
      <Sort columns={columns} sortedFields={sortedFields} setSortedFields={setSortedFields} onApply={onApply} />
      <Columns columns={orderedColumns} setColumns={setColumns} />
    </Navigation>
  );
}
