/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import debounce from "lodash.debounce";
import { extractChildren, handleArrowKeys, arrowKeys } from "./helpers";
import * as styled from "./Table.styles";
import ColumnDefinition from "./components/ColumnDefinition";
import CheckBox from "./components/CheckBox";
import Events from "./components/Events";
import VirtualizeRows from "./VirtualizeRows";
import "@paprika/helpers/lib/dom/elementScrollToPolyfill";

const propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  rowHeight: PropTypes.number,
};

const defaultProps = {
  height: 600,
  width: null,
  rowHeight: 32,
};

export default function Table(props) {
  const [activeRowOnMouseEnter, setActiveRowOnMouseEnter] = React.useState({ index: null, data: null });
  const [activeCell, setActiveCell] = React.useState({ rowIndex: null, dataRow: null, index: null, data: null });
  /** Props and initializers */
  const { data, children: childrenProps, height, rowHeight, width } = props;
  const refActivePage = React.useRef({ from: null, to: null });
  const refVirtualizeRows = React.useRef(null);
  const { "DataTable.ColumnDefinition": ColumnsDefinition } = extractChildren(childrenProps, [
    "DataTable.ColumnDefinition",
  ]);
  const columnsLength = ColumnsDefinition.length;
  const rowsLength = data.length;

  const delayedKeyDown = React.useRef(
    debounce(
      ({ event, activeCell, rowsLength, refActivePage, columnsLength, refVirtualizeRows, rowHeight, setActiveCell }) =>
        handleArrowKeys({
          event,
          activeCell,
          rowsLength,
          refActivePage,
          columnsLength,
          refVirtualizeRows,
          rowHeight,
          setActiveCell,
        }),
      5
    )
  ).current;

  const handleClickCell = ({ index, data, dataRow, rowIndex }) => () => {
    if (activeCell.index !== index) {
      setActiveCell(() => ({
        index,
        data,
        dataRow,
        rowIndex,
      }));
    }
  };

  const handleMouseEnter = (data, rowIndex, keys) => () => {
    setActiveRowOnMouseEnter(() => ({ index: keys[rowIndex], data }));
  };

  const handleMouseLeave = (/* row, rowIndex */) => () => {};

  function handleKeyDown(event) {
    if (arrowKeys.includes(event.key)) {
      event.preventDefault();
      delayedKeyDown({
        event,
        activeCell,
        rowsLength,
        refActivePage,
        columnsLength,
        refVirtualizeRows,
        rowHeight,
        setActiveCell,
      });
      event.persist();
    }
  }

  /* eslint-disable jsx-a11y/no-static-element-interactions */
  /* eslint-disable jsx-a11y/no-noninteractive-tabindex  */
  // need more research about how to treat this case we is not a button but we need the click
  /* eslint-disable react/no-array-index-key */
  // when rendering the keys for the cell we need to use the index no other way to have an unique key
  return (
    <div onKeyDown={handleKeyDown} tabIndex="0">
      <VirtualizeRows
        data={data}
        gridRowHeight={rowHeight}
        gridLength={data.length}
        gridHeight={height}
        gridWidth={width}
        ref={refVirtualizeRows}
      >
        {(subset, keys, a11y) => {
          // this information will help to calculated next and previous ArrowUp and ArrowDown
          refActivePage.current.from = keys[0];
          refActivePage.current.to = keys[keys.length - 1];

          return (
            <>
              <styled.HeaderRow {...a11y.row} $height={rowHeight}>
                <styled.Counter>
                  <styled.Check>
                    <input type="checkbox" />
                  </styled.Check>
                  <styled.Expand />
                </styled.Counter>
                {ColumnsDefinition.map((header, headerIndex) => {
                  return (
                    <styled.Cell
                      key={`cell_${headerIndex}`}
                      {...a11y.cell}
                      $width={header.props.width}
                      $height={rowHeight}
                    >
                      {header.props.children}
                    </styled.Cell>
                  );
                })}
              </styled.HeaderRow>
              {subset.map((row, rowIndex) => {
                const rowKey = `row_${keys[rowIndex]}`;
                return (
                  <styled.Row
                    onMouseEnter={handleMouseEnter(row, rowIndex, keys)}
                    onMouseLeave={handleMouseLeave(row, rowIndex, keys)}
                    {...a11y.row}
                    $height={rowHeight}
                    key={rowKey}
                  >
                    <styled.Counter key={`row_index_${keys[rowIndex]}`}>
                      <styled.Check>
                        <CheckBox indexRowOnMouseEnter={activeRowOnMouseEnter.index} index={keys[rowIndex]} />
                      </styled.Check>
                      <styled.Expand>
                        <RawButton>⇗</RawButton>
                      </styled.Expand>
                    </styled.Counter>
                    {/* eslint-disable react/no-array-index-key */}
                    {row.map((cell, cellIndex) => {
                      const index = `${keys[rowIndex]}_${cellIndex}`;
                      return (
                        <styled.Cell
                          key={`cell_${keys[rowIndex]}_${cellIndex}`}
                          {...a11y.cell}
                          $width={ColumnsDefinition[cellIndex].props.width}
                          $height={rowHeight}
                          data-pka-cell-index={index}
                          cellIndex={index}
                          activeCellIndex={activeCell.index}
                          onClick={handleClickCell({
                            index,
                            data: cell,
                            dataRow: row,
                            rowIndex: keys[rowIndex],
                          })}
                        >
                          {ColumnsDefinition[cellIndex].props.renderCell
                            ? ColumnsDefinition[cellIndex].props.renderCell(cell)
                            : cell}
                        </styled.Cell>
                      );
                    })}
                    {/* eslint-enable react/no-array-index-key */}
                  </styled.Row>
                );
              })}
            </>
          );
        }}
      </VirtualizeRows>
    </div>
  );
}
/* eslint-enable react/no-array-index-key */
Table.prpoTypes = propTypes;
Table.defaultProps = defaultProps;
Table.ColumnDefinition = ColumnDefinition;
Table.Events = Events;
Table.types = { integer: "integer", string: "string", date: "date", object: "object" };
