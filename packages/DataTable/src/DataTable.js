/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
// import useMountedRef from "@paprika/helpers/lib/hooks/useMountedRef";
import ColumnDefinition from "./components/ColumnDefinition";
import Navigation from "./components/Navigation";
import VirtualizedTable from "./components/VirtualizedTable";
import LoadMoreButton from "./components/LoadMoreButton";
import { extractChildren } from "./helpers";
import { columnTypes, plugins } from "./constants";
import { TableProvider } from "./context";

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  height: PropTypes.number,
  width: PropTypes.number,
  rowHeight: PropTypes.number,
  reducers: PropTypes.arrayOf(PropTypes.func),
  isLoading: PropTypes.bool,
  onExpandedRow: PropTypes.func,
  onKeyDownArrow: PropTypes.func,
  onClickCell: PropTypes.func,
  localStorageId: PropTypes.string,
};

const defaultProps = {
  data: [],
  height: 600,
  width: 640,
  rowHeight: 32,
  reducers: [],
  isLoading: false,
  onExpandedRow: () => {},
  onKeyDownArrow: () => {},
  onClickCell: () => {},
  localStorageId: null,
};

export default function DataTable(props) {
  const dataTableID = React.useRef(`DT${nanoid()}DTCELL`).current;
  const {
    children: childrenProps,
    data,
    height,
    isLoading,
    keygen,
    onKeyDownArrow,
    onClickCell,
    onExpandedRow,
    reducers,
    rowHeight,
    width,
    localStorageId,
  } = props;
  const {
    "DataTable.ColumnDefinition": ColumnsDefinition,
    "DataTable.Navigation": Navigation,
    "DataTable.LoadMoreButton": LoadMoreButton,
  } = extractChildren(childrenProps, [
    "DataTable.ColumnDefinition",
    "DataTable.Navigation",
    "DataTable.LoadMoreButton",
  ]);

  const columns = ColumnsDefinition.map(({ props }) => {
    const { id, momentParsingFormat, canSort, type, canHide, isHidden, width } = props;
    return { id, momentParsingFormat, canSort, type, canHide, isHidden, width };
  });
  const availablePlugins = Object.keys(plugins).map(key => plugins[key]);
  // const mountedRef = useMountedRef();

  let navigationReducers = [];
  let enabledPlugins = [];
  let isControlled = false;
  if (Navigation && Navigation.props) {
    navigationReducers = React.Children.map(Navigation.props.children, child => child.type.reducer).filter(
      chunk => chunk
    );
    enabledPlugins = React.Children.map(Navigation.props.children, child =>
      child.type.displayName && availablePlugins.includes(child.type.displayName) ? child.type.displayName : null
    ).filter(item => item !== null);
    React.Children.forEach(Navigation.props.children, child => {
      // Using onFilter and onSort prop for now
      if (child.props.onFilter || child.props.onSort) isControlled = true;
    });
  }

  return (
    <TableProvider
      isControlled={isControlled}
      data={data}
      keygen={keygen}
      reducers={navigationReducers.concat(reducers)}
      columns={columns}
      localStorageId={localStorageId}
      enabledPlugins={enabledPlugins}
    >
      <div>{isLoading ? "Loading..." : null}</div>
      {Navigation}
      <VirtualizedTable
        dataTableID={dataTableID}
        onExpandedRow={onExpandedRow}
        height={height}
        rowHeight={rowHeight}
        width={width}
        LoadMoreButton={LoadMoreButton}
        onKeyDownArrow={onKeyDownArrow}
        onClickCell={onClickCell}
      >
        {ColumnsDefinition}
      </VirtualizedTable>
    </TableProvider>
  );
}

DataTable.prpoTypes = propTypes;
DataTable.defaultProps = defaultProps;
DataTable.ColumnDefinition = ColumnDefinition;
DataTable.Navigation = Navigation;
DataTable.ColumnTypes = columnTypes;
DataTable.LoadMoreButton = LoadMoreButton;
