/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import debounce from "lodash.debounce";
import { extractChildren, handleArrowKeys, arrowKeys } from "./helpers";
import * as styled from "./DataTable.styles";
import ColumnDefinition from "./components/ColumnDefinition";
import CheckBox from "./components/CheckBox";
import VirtualizeRows from "./VirtualizeRows";
import "@paprika/helpers/lib/dom/elementScrollToPolyfill";
import { TableProvider } from "./context";
import Options from "./components/Options";
import Controls from "./components/Controls";
import { sortDirections } from "./constants";

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

export default function DataTable(props) {
  const [activeRowOnMouseEnter, setActiveRowOnMouseEnter] = React.useState({ index: null, data: null });
  const [activeCell, setActiveCell] = React.useState({ rowIndex: null, dataRow: null, index: null, data: null });
  /** Props and initializers */
  const { data, children: childrenProps, height, rowHeight, width, keygen, onSort } = props;
  const refActivePage = React.useRef({ from: null, to: null });
  const refVirtualizeRows = React.useRef(null);
  const { "DataTable.ColumnDefinition": ColumnsDefinition } = extractChildren(childrenProps, [
    "DataTable.ColumnDefinition",
  ]);
  const columnsLength = ColumnsDefinition.length;
  const rowsLength = data.length;

  const delayedKeyDown = React.useRef(
    debounce(
      ({
        activeCell,
        columnsLength,
        delayedKeyDown,
        event,
        refActivePage,
        refVirtualizeRows,
        rowHeight,
        rowsLength,
        setActiveCell,
      }) =>
        handleArrowKeys({
          activeCell,
          columnsLength,
          delayedKeyDown,
          event,
          refActivePage,
          refVirtualizeRows,
          rowHeight,
          rowsLength,
          setActiveCell,
        }),
      15
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
        activeCell,
        columnsLength,
        event,
        refActivePage,
        refVirtualizeRows,
        rowHeight,
        rowsLength,
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
    <TableProvider data={data} keygen={keygen}>
      <Controls Columns={ColumnsDefinition} onSort={onSort} />
      <div onKeyDown={handleKeyDown} tabIndex="0">
        <VirtualizeRows
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
                    const { header: headerProp, width, sortDirections, id } = header.props;
                    return (
                      <styled.Cell key={`cell_${headerIndex}`} {...a11y.cell} $width={width} $height={rowHeight}>
                        {typeof headerProp === "function" ? headerProp(header.props) : headerProp}
                        {sortDirections ? (
                          <Options sortDirections={sortDirections} columnId={id} onSort={onSort} />
                        ) : null}
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
                      {ColumnsDefinition.map(Column => {
                        const { id, cell, width } = Column.props;
                        const index = `${row[keygen]}_${id}`;
                        const cellContent = typeof cell === "function" ? cell(row[id]) : row[cell];
                        return (
                          <styled.Cell
                            key={`cell_${row[keygen]}_${id}`}
                            {...a11y.cell}
                            $width={width}
                            $height={rowHeight}
                            data-pka-cell-index={index}
                            cellIndex={index}
                            activeCellIndex={activeCell.index}
                            onClick={handleClickCell({
                              index,
                              data: row,
                              dataRow: row,
                              rowIndex: keys[rowIndex],
                            })}
                          >
                            {cellContent}
                          </styled.Cell>
                        );
                      })}
                    </styled.Row>
                  );
                })}
              </>
            );
          }}
        </VirtualizeRows>
      </div>
    </TableProvider>
  );
}
/* eslint-enable react/no-array-index-key */
DataTable.prpoTypes = propTypes;
DataTable.defaultProps = defaultProps;
DataTable.ColumnDefinition = ColumnDefinition;
DataTable.SortDirections = { ...sortDirections, DEFAULT: Object.values(sortDirections) };
