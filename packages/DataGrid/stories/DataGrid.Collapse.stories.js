import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import ArrowRight from "@paprika/icon/lib/ArrowRight";
import ArrowDown from "@paprika/icon/lib/ArrowDown";
import Check from "@paprika/icon/lib/Check";
import DataGrid from "../src";
import initialData from "./helpers/data.collapse";

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
      <span>
        <Check />
      </span>
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

const remove = ({ data, start, end }) => [...data.slice(0, start), ...data.slice(end + 1, data.length)];

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
  const [expandedRows, setExpanedRows] = React.useState([]);
  const refDataGrid = React.useRef(null);

  const toggleExpand = ({ row, rowIndex }) => {
    if (expandedRows.includes(row.id)) {
      const { end, visitedRoots } = getNumberOfRowsToRemove({ expandedRows, data, rowIndex });
      setData(data => {
        return remove({ data, start: rowIndex + 1, end: rowIndex + end });
      });

      visitedRoots.push(row.id);
      setExpanedRows(expandedRows => expandedRows.filter(r => !visitedRoots.includes(r)));
      return;
    }

    setData(data => {
      if (row.rows && row.rows.length) {
        return insert(data, rowIndex + 1, row.rows);
      }
      return data;
    });
    if (row.id) {
      setExpanedRows(expandedRows => [...new Set([...expandedRows, row.id])]);
    }
  };

  React.useEffect(() => {
    console.log(expandedRows);
  }, [expandedRows]);

  const cellStyle = React.useCallback(() => {
    return { style: { display: "flex", justifyContent: "center", pointer: "cursor" } };
  }, []);

  const headerStyle = React.useCallback(() => {
    return { style: { display: "flex", justifyContent: "center" } };
  }, []);

  return (
    <Sbook.Story>
      <DataGrid ref={refDataGrid} data={data} keygen="id" height={600} onEnter={toggleExpand}>
        <DataGrid.ColumnDefinition
          width={365}
          header="Objective"
          headerA11yText={({ row }) => row.objective}
          cell={({ row }) => {
            return (
              <span>
                <Arrow hasRows={"rows" in row && row.rows.length} isExpand={expandedRows.includes(row.id)} />
                {row.objective}
              </span>
            );
          }}
          cellProps={({ row }) => {
            return { style: { textIndent: `${row.indent * 16}px` } };
          }}
          onClick={toggleExpand}
        />
        <DataGrid.ColumnDefinition
          width={156}
          header="Paper review"
          headerProps={headerStyle}
          cellA11yText={({ row }) => {
            return `${row.review[0]} of ${row.review[1]}`;
          }}
          cell={({ row }) => {
            return <Pill start={row.review[0]} end={row.review[1]} />;
          }}
          cellProps={cellStyle}
        />
        <DataGrid.ColumnDefinition
          width={156}
          header="Detail review"
          headerProps={headerStyle}
          cellA11yText={({ row }) => {
            return `${row.detail[0]} of ${row.detail[1]}`;
          }}
          cell={({ row }) => <Pill start={row.detail[0]} end={row.detail[1]} />}
          cellProps={cellStyle}
        />
        <DataGrid.ColumnDefinition
          width={156}
          header="General review"
          headerProps={headerStyle}
          cellA11yText={({ row }) => {
            return `${row.general[0]} of ${row.general[1]}`;
          }}
          cell={({ row }) => <Pill start={row.general[0]} end={row.general[1]} />}
          cellProps={cellStyle}
        />
      </DataGrid>
    </Sbook.Story>
  );
}

storiesOf("DataGrid / Lazy", module).add("Collapse", () => <App />);
