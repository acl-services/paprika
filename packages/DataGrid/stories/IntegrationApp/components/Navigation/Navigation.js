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
  } = props;

  return (
    <Navigation>
      <Filter
        columns={columns}
        filters={filters}
        operator={operator}
        setFilters={setFilters}
        setOperator={setOperator}
      />
      <Sort columns={columns} sortedFields={sortedFields} setSortedFields={setSortedFields} />
      <Columns columns={orderedColumns} setColumns={setColumns} />
    </Navigation>
  );
}
