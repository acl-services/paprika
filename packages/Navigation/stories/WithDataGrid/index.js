import React from "react";
import Navigation from "./ControlledNavigation";
import DataGrid from "./ControlledDataGrid";

import fixtures from "./helpers/fixtures";
import getSubset from "./helpers/getSubset";

const dataSource = fixtures(2);

export default function App() {
  // const [subset, setSubset] = React.useState(dataSource);

  const [columns, setColumns] = React.useState([
    { id: "country", label: "Country", isHidden: false, type: "TEXT" },
    { id: "name", label: "Name", isHidden: false, type: "TEXT" },
    { id: "goals", label: "Goals", isHidden: false, type: "NUMBER" },
    { id: "status", label: "Status", isHidden: false, type: "TEXT" },
    { id: "joined", label: "Joined", isHidden: false, momentParsingFormat: "MM/DD/YYYY", type: "DATE" },
  ]);
  const [filters, setFilters] = React.useState([]);
  const [sortedFields, setSortedFields] = React.useState([]);
  const [operator, setOperator] = React.useState("AND");
  const subset = getSubset({ sortedFields, filters, source: dataSource, columns, operator });

  return (
    <React.Fragment>
      <Navigation
        columns={columns}
        filters={filters}
        setColumns={setColumns}
        setFilters={setFilters}
        setSortedFields={setSortedFields}
        sortedFields={sortedFields}
        source={dataSource}
        operator={operator}
        setOperator={setOperator}
      />
      <DataGrid data={subset} columns={columns} />
    </React.Fragment>
  );
}
