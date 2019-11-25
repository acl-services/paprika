/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import ColumnDefinition from "./components/ColumnDefinition";
import Navigation from "./components/Navigation";
import VirtualizedTable from "./components/VirtualizedTable";
import { extractChildren } from "./helpers";
import { sortDirections } from "./constants";
import { TableProvider } from "./context";

const propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  rowHeight: PropTypes.number,
  reducers: PropTypes.arrayOf(PropTypes.func),
  isLoading: PropTypes.bool,
};

const defaultProps = {
  height: 600,
  width: null,
  rowHeight: 32,
  reducers: [],
  isLoading: false,
};

export default function DataTable(props) {
  const { data, children: childrenProps, height, rowHeight, width, keygen, reducers, isLoading } = props;
  const { "DataTable.ColumnDefinition": ColumnsDefinition, "DataTable.Navigation": Navigation } = extractChildren(
    childrenProps,
    ["DataTable.ColumnDefinition", "DataTable.Navigation"]
  );
  const columns = ColumnsDefinition.map(Column => Column.props);

  let navigationReducers = [];
  if (Navigation && Navigation.props) {
    navigationReducers = React.Children.map(Navigation.props.children, child => child.type.reducer).filter(
      chunk => chunk
    );
  }

  return (
    <TableProvider data={data} keygen={keygen} reducers={navigationReducers.concat(reducers)}>
      <div>{isLoading ? "Loading..." : null}</div>
      {Navigation ? React.cloneElement(Navigation, { columns }) : null}
      <VirtualizedTable columns={columns} height={height} rowHeight={rowHeight} width={width} />
    </TableProvider>
  );
}

DataTable.prpoTypes = propTypes;
DataTable.defaultProps = defaultProps;
DataTable.ColumnDefinition = ColumnDefinition;
DataTable.SortDirections = { ...sortDirections, DEFAULT: Object.values(sortDirections) };
DataTable.Navigation = Navigation;
