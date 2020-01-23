import React from "react";
import DataGrid from "@paprika/datagrid";

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

function CountryCell({ row }) {
  return flags[row.country];
}

export default function ControlledDataGrid(props) {
  const { data, columns } = props;
  return (
    <DataGrid data={data}>
      {columns.map(column =>
        column.isHidden ? null : (
          <DataGrid.ColumnDefinition
            width={100}
            header={column.label}
            cell={column.id === "country" ? CountryCell : column.id}
          />
        )
      )}
    </DataGrid>
  );
}
