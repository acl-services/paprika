import React from "react";
import Navigation from "@paprika/navigation";
import Filter from "./Filter";
import Sort from "./Sort";
import Columns from "./Columns";

const filterColumns = [
  {
    id: "goals",
    type: "NUMBER",
    label: "Goals",
  },
  {
    id: "name",
    type: "TEXT",
    label: "Name",
  },
  {
    id: "status",
    type: "TEXT",
    label: "Status",
  },
  { id: "country", label: "Country", type: "TEXT" },
  {
    id: "joined",
    type: "DATE",
    label: "Joined by",
    momentParsingFormat: "MM/DD/YYYY",
  },
];

export default function ControlledNavigation(props) {
  const { columns, filters, operator, setColumns, setFilters, setOperator, setSortedFields, sortedFields } = props;

  return (
    <Navigation>
      <Filter
        columns={filterColumns}
        filters={filters}
        operator={operator}
        setFilters={setFilters}
        setOperator={setOperator}
      />
      <Sort columns={filterColumns} sortedFields={sortedFields} setSortedFields={setSortedFields} />
      <Columns columns={columns} setColumns={setColumns} />
    </Navigation>
  );
}
