import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable from "../src";
import fixtures from "./fixtures";

const flags = {
  Austria: "🇦🇹",
  Mexico: "🇲🇽",
  Brazil: "🇧🇷",
  Hungary: "🇭🇺",
  Germany: "🇩🇪",
  Portugal: "🇵🇹",
  Argentina: "🇦🇷",
  Scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  Sweden: "🇸🇪",
  England: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  Poland: "🇵🇱",
};

function getFlag(cell) {
  if (cell in flags) {
    return flags[cell];
  }

  return cell;
}

const mockData = fixtures(1);
const sortedData = [...mockData].sort((itemA, itemB) => itemB.id - itemA.id);
function App() {
  const [data, setData] = React.useState(mockData);
  return (
    <React.Fragment>
      <DataTable
        keygen="id"
        data={data}
        height={window.innerHeight}
        onSort={(columnId, direction) => {
          setData(sortedData);
          console.log("SORT", columnId, direction);
        }}
      >
        <DataTable.ColumnDefinition id="country" width="190" header="Country" cell={cell => getFlag(cell)} />
        <DataTable.ColumnDefinition
          id="name"
          header="Name"
          cell="name"
          sortDirections={[DataTable.SortDirections.ASCEND]}
        />
        <DataTable.ColumnDefinition
          id="goals"
          header="Goals"
          cell="goals"
          sortDirections={DataTable.SortDirections.DEFAULT}
        />
        <DataTable.ColumnDefinition
          id="status"
          header="Status"
          cell="status"
          sortDirections={DataTable.SortDirections.DEFAULT}
        />
      </DataTable>
    </React.Fragment>
  );
}

storiesOf("DataTable", module).add("Sortable DataTable(back-end)", () => <App />);
