import React from "react";
import Navigation from "@paprika/navigation";
import Filter from "./Filter";
import Sort from "./Sort";
import Columns from "./Columns";

export default function ControlledNavigation(props) {
  const { columns, orderedColumns, setOrderedColumns, getSubset } = props;

  const [filters, setFilters] = React.useState([]);
  const [sortedFields, setSortedFields] = React.useState([]);
  const [operator, setOperator] = React.useState("AND");

  function handleApply() {
    getSubset({ sortedFields, filters, operator });
  }

  return (
    <Navigation>
      <Filter
        columns={columns}
        filters={filters}
        operator={operator}
        setFilters={setFilters}
        setOperator={setOperator}
        onApply={handleApply}
      />
      <Sort columns={columns} sortedFields={sortedFields} setSortedFields={setSortedFields} onApply={handleApply} />
      <Columns columns={orderedColumns} setColumns={setOrderedColumns} />
    </Navigation>
  );
}
