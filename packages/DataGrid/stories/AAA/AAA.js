import React from "react";
import Spinner from "@paprika/spinner";
import DataGrid from "../../src";
import useData from "./useData";

export default function AAA(props) {
  const { size } = props;
  const { data, columns } = useData();

  if (!data) {
    return <Spinner />;
  }

  console.log(data);
  console.log(columns);
  return (
    <DataGrid data={data} width={size.width} height={size.height}>
      {columns.map(column => {
        return <DataGrid.ColumnDefinition header={column} cell={column} />;
      })}
    </DataGrid>
  );
}
