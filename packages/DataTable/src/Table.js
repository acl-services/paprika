/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import DataTable from "./DataTable";
import Preparing from "./components/Preparing";

const propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

const defaultProps = {
  height: 600,
  width: null,
};

export default function Table(props) {
  const refTablePrepare = React.useRef(null);
  const [headerHeight, setHeaderHeight] = React.useState(null);
  const [columnsWidth, setColumnWidth] = React.useState(null);
  const [rowHeight, setRowHeight] = React.useState(null);
  const { data } = props;

  React.useEffect(() => {
    const table = refTablePrepare.current;
    const headerRect = table.querySelector("thead").getBoundingClientRect();
    const columns = table.querySelectorAll("thead tr th");
    const columnsRect = [...columns].map(column => column.getBoundingClientRect().width);
    const rowRect = table.querySelector("tbody tr").getBoundingClientRect();

    setHeaderHeight(() => headerRect.height);
    setColumnWidth(() => columnsRect);
    setRowHeight(() => rowRect.height);
  }, []);

  if (!headerHeight && !columnsWidth && !rowHeight) {
    return (
      <>
        <Preparing />
        <div>
          <DataTable ref={refTablePrepare} {...props} data={[data[0]]} isPreparing />
        </div>
      </>
    );
  }

  return (
    <DataTable
      {...props}
      columnsWidth={columnsWidth}
      headerHeight={headerHeight}
      rowHeight={rowHeight}
      listSize={data.length}
    />
  );
}

Table.prpoTypes = propTypes;
Table.defaultProps = defaultProps;
Table.ColumnDefinition = DataTable.ColumnDefinition;
Table.types = { integer: "integer", string: "string", date: "date", object: "object" };
