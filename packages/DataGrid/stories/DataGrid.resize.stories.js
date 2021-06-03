import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import { v4 as uuidv4 } from "uuid";
import Heading from "@paprika/heading";
import ActionBar, { ColumnsArrangement, useColumnsArrangement } from "../../ActionBar/src";
import DataGrid from "../src";
import fixtures from "./helpers/fixtures";

const storyName = getStoryName("DataGrid");

const data = fixtures(1);

function AppWithActionBar() {
  const [dataGridWidth, setDataGridWidth] = React.useState(100);
  const [uuid, setUuid] = React.useState(uuidv4());
  const dataGridContainerRef = React.useRef(null);

  const { orderedColumnIds, isColumnHidden, onChangeVisibility, ...otherHandlers } = useColumnsArrangement({
    defaultOrderedColumnIds: ["goals", "name", "status", "country", "joined"],
  });

  const renderColumns = type => {
    const column = {
      goals: {
        cell: () => "Goals",
        header: "Goals (canGrow)",
        canGrow: true,
      },
      name: {
        cell: () => "Name",
        header: "Name",
        canGrow: false,
      },
      status: {
        cell: () => "Status",
        header: "Status",
        canGrow: false,
      },
      country: {
        cell: () => "Country",
        header: "Country",
        canGrow: false,
      },
      joined: {
        cell: () => "Joined",
        header: "Joined",
        canGrow: false,
      },
    };

    return column[type];
  };

  function changeVisiblityOverride(...props) {
    onChangeVisibility(...props);
    setUuid(uuidv4()); // so `key` changes
  }

  React.useEffect(() => {
    setDataGridWidth(dataGridContainerRef.current.clientWidth);

    function handleResize() {
      setDataGridWidth(dataGridContainerRef.current.clientWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.Fragment>
      <ActionBar>
        <ColumnsArrangement
          orderedColumnIds={orderedColumnIds}
          onChangeVisibility={changeVisiblityOverride}
          {...otherHandlers}
        >
          <ColumnsArrangement.ColumnDefinition id="goals" label="Goals" isHidden={isColumnHidden("goals")} />
          <ColumnsArrangement.ColumnDefinition id="name" label="Name" isHidden={isColumnHidden("name")} />
          <ColumnsArrangement.ColumnDefinition id="status" label="Status" isHidden={isColumnHidden("status")} />
          <ColumnsArrangement.ColumnDefinition id="country" label="Country" isHidden={isColumnHidden("country")} />
          <ColumnsArrangement.ColumnDefinition id="joined" label="Joined" isHidden={isColumnHidden("joined")} />
        </ColumnsArrangement>
      </ActionBar>
      <div ref={dataGridContainerRef}>
        <DataGrid
          key={orderedColumnIds
            .join("-")
            .concat(dataGridWidth)
            .concat(uuid)}
          data={data}
          width={dataGridWidth}
        >
          {orderedColumnIds.map(
            columnKey =>
              !isColumnHidden(columnKey) && (
                <DataGrid.ColumnDefinition
                  key={columnKey}
                  cell={renderColumns(columnKey).cell}
                  cellA11yText={renderColumns(columnKey).cell}
                  header={renderColumns(columnKey).header}
                  canGrow={renderColumns(columnKey).canGrow}
                />
              )
          )}
        </DataGrid>
      </div>
    </React.Fragment>
  );
}

storiesOf(`${storyName}/Examples`, module).add("Resize", () => (
  <Sbook.Story>
    <Heading level={2}>Resizing the DataGrid and its columns</Heading>
    <Sbook.Tagline>
      To resize a DataGrid (i.e. as the window resizes), it is up to the consumer to update the <code>width</code> prop
      that they pass in. They must also:
      <ul>
        <li>
          update the <code>key</code> prop, which will make the DataGrid re-render (which will re-calculate the widths
          of all columns)
        </li>
        <li>
          at least one of the columns should use the <code>canGrow</code> prop so there is no gap at the end of the
          table (optional but recommended)
        </li>
      </ul>
      Be sure to see the &quot;Widths&quot; story, too.
      <br />
      <br />
      In the example below try resizing the browser and show/hide columns to see how the DataGrid re-renders:
      <br />
      <hr />
      <br />
    </Sbook.Tagline>
    <AppWithActionBar />
  </Sbook.Story>
));
