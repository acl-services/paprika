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
  const [appliedNumbers, setAppliedNumbers] = React.useState({
    filter: 0,
    sort: 0,
  });

  function handleApply() {
    getSubset({ sortedFields, filters, operator });
    setAppliedNumbers({
      filter: filters.length,
      sort: sortedFields.length,
    });
  }

  return (
    <Navigation>
      <Filter
        appliedNumber={appliedNumbers.filter}
        columns={columns}
        filters={filters}
        operator={operator}
        setFilters={setFilters}
        setOperator={setOperator}
        onApply={handleApply}
      />
      <Sort
        appliedNumber={appliedNumbers.sort}
        columns={columns}
        sortedFields={sortedFields}
        setSortedFields={setSortedFields}
        onApply={handleApply}
      />
      <Columns columns={orderedColumns} setColumns={setOrderedColumns} />
    </Navigation>
  );
}
