import React from "react";
import Navigation from "./ControlledNavigation";
import DataGrid from "./ControlledDataGrid";

import fixtures from "./helpers/fixtures";
import getSubset from "./helpers/getSubset";

const dataSource = fixtures(2);

export default function App() {
  // const [subset, setSubset] = React.useState(dataSource);

  const [columns, setColumns] = React.useState([
    { id: "country", label: "Country", isHidden: false },
    { id: "name", label: "Name", isHidden: false },
    { id: "goals", label: "Goals", isHidden: false },
    { id: "status", label: "Status", isHidden: false },
    { id: "joined", label: "Joined", isHidden: false },
  ]);
  const [filters, setFilters] = React.useState([]);
  const [sortedFields, setSortedFields] = React.useState([]);
  const subset = getSubset({ sortedFields, filters, source: dataSource, columns });

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
      />
      <DataGrid data={subset} columns={columns} />
    </React.Fragment>
  );
}
