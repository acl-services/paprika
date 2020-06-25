import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import * as Sbook from "storybook/assets/styles/common.styles";
import ArrowRight from "@paprika/icon/lib/ArrowRight";
import ArrowDown from "@paprika/icon/lib/ArrowDown";
import Check from "@paprika/icon/lib/Check";
import Popover from "@paprika/popover";
import DataGrid from "../src";
import initialData from "./helpers/data.collapse";

const storyName = getStoryName("DataGrid");

const Arrow = React.memo(({ hasRows, isExpand }) => {
  if (!hasRows) return null;

  if (hasRows && !isExpand) {
    return <ArrowRight />;
  }

  return <ArrowDown />;
});

const Pill = React.memo(({ start, end }) => {
  if (start === end) {
    return (
      <Popover isEager>
        <Popover.Tip />
        <Popover.Trigger>
          <Check />
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>All sign-off in this section are complete</Popover.Card>
        </Popover.Content>
      </Popover>
    );
  }
  if (start === 0) {
    return (
      <span css="text-align: center; padding:2px 6px; border-radius: 4px; background: #FAE7E3; color: #932B18; font-size: 12px;">
        {start}/{end}
      </span>
    );
  }

  return (
    <span css="text-align: center; padding:2px 6px; border-radius: 4px; background: #d7e9fb; color: #004A94; font-size: 12px;">
      {start}/{end}
    </span>
  );
});

const insert = (arr, index, newItems) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted items
  ...newItems,
  // part of the array after the specified index
  ...arr.slice(index),
];

const remove = ({ data, start, end }) => {
  return [...data.slice(0, start), ...data.slice(end + 1, data.length)];
};

function getNumberOfRowsToRemove({ expandedRows, rowIndex, data }) {
  const visitedRoots = [];
  function add({ row }) {
    return row.rows
      .map(r => {
        if ("rows" in r && r.rows.length && expandedRows.includes(r.id)) {
          visitedRoots.push(r.id);
          return add({ row: r });
        }
        return r.id;
      })
      .flat();
  }

  if ("rows" in data[rowIndex] && data[rowIndex].rows.length && expandedRows.includes(data[rowIndex].id)) {
    const openNodes = add({ row: data[rowIndex] });
    return { end: openNodes.length + visitedRoots.length, visitedRoots };
  }

  return { end: 0, visitedRoots };
}

export function App() {
  const [data, setData] = React.useState(initialData);
  const [expandedRows, setExpandedRows] = React.useState([]);
  const refDataGrid = React.useRef(null);

  const toggleExpand = ({ row, rowIndex }) => {
    if (expandedRows.includes(row.id)) {
      const { end, visitedRoots } = getNumberOfRowsToRemove({ expandedRows, data, rowIndex });
      setData(data => {
        return remove({ data, start: rowIndex + 1, end: rowIndex + end });
      });

      visitedRoots.push(row.id);
      setExpandedRows(expandedRows => expandedRows.filter(r => !visitedRoots.includes(r)));
      return;
    }

    setData(data => {
      if (row.rows && row.rows.length) {
        return insert(data, rowIndex + 1, row.rows);
      }
      return data;
    });
    if (row.id) {
      setExpandedRows(expandedRows => [...new Set([...expandedRows, row.id])]);
    }
  };

  React.useEffect(() => {
    console.log(expandedRows);
  }, [expandedRows]);

  const cellStyle = React.useCallback(() => {
    return { style: { display: "flex", justifyContent: "center" } };
  }, []);

  const headerStyle = React.useCallback(() => {
    return { style: { display: "flex", justifyContent: "center" } };
  }, []);

  const cellA11yText = React.useCallback(key => {
    return ({ row }) => {
      if (row[key][0] === row[key][1]) {
        return `All tasks has been checked`;
      }
      if (row[key][0] === 0) {
        return `idle: ${row[key][0]} of ${row[key][1]} tasks`;
      }

      return `in progress: ${row[key][0]} of ${row[key][1]} tasks`;
    };
  }, []);

  return (
    <Sbook.Story>
      <DataGrid ref={refDataGrid} data={data} keygen="id" onPressEnter={toggleExpand} forceTableWidthWithScrollBars>
        <DataGrid.ColumnDefinition
          canGrow
          header="Objective"
          cell={({ row }) => {
            return (
              <span>
                <Arrow hasRows={"rows" in row && row.rows.length} isExpand={expandedRows.includes(row.id)} />
                {row.objective}
              </span>
            );
          }}
          cellA11yText={({ row }) => row.objective}
          cellProps={({ row }) => {
            return { style: { textIndent: `${(row.indent || 0) * 16}px`, cursor: "pointer" } };
          }}
          onClick={toggleExpand}
        />
        <DataGrid.ColumnDefinition
          width={156}
          header="Preparer review"
          headerProps={headerStyle}
          cellA11yText={cellA11yText("review")}
          cell={({ row }) => {
            return <Pill start={row.review[0]} end={row.review[1]} />;
          }}
          cellProps={cellStyle}
        />
        <DataGrid.ColumnDefinition
          width={156}
          header="Detail review"
          headerProps={headerStyle}
          cellA11yText={cellA11yText("detail")}
          cell={({ row }) => <Pill start={row.detail[0]} end={row.detail[1]} />}
          cellProps={cellStyle}
        />
        <DataGrid.ColumnDefinition
          width={156}
          header="General review"
          headerProps={headerStyle}
          cellA11yText={cellA11yText("general")}
          cell={({ row }) => <Pill start={row.general[0]} end={row.general[1]} />}
          cellProps={cellStyle}
        />
      </DataGrid>
    </Sbook.Story>
  );
}

storiesOf(`${storyName}/Examples`, module).add("Collapsible", () => <App />);
