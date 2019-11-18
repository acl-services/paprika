import React from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import RawButton from "@paprika/raw-button";
import { handleArrowKeys, arrowKeys } from "../../helpers";
import VirtualizeRows from "../../VirtualizeRows";
import * as styled from "./VirtualizedTable.styles";
import "@paprika/helpers/lib/dom/elementScrollToPolyfill";
import Options from "../Options";
import CheckBox from "../CheckBox";
import { useTableState } from "../../context";

export default function VirtualizedTable(props) {
  const { ColumnsDefinition, height, rowHeight, width, onSort } = props;
  const [activeRowOnMouseEnter, setActiveRowOnMouseEnter] = React.useState({ index: null, data: null });
  const [activeCell, setActiveCell] = React.useState({ rowIndex: null, dataRow: null, index: null, data: null });

  const refActivePage = React.useRef({ from: null, to: null });
  const refVirtualizeRows = React.useRef(null);
  const columnsLength = ColumnsDefinition.length;

  const { data, sortedOrder, keygen } = useTableState();

  const dataForRendering = sortedOrder
    ? sortedOrder.map(keygenValue => data.find(item => item[keygen] === keygenValue))
    : data;
  const rowsLength = dataForRendering.length;

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
    <div onKeyDown={handleKeyDown} tabIndex="0">
      <VirtualizeRows
        data={dataForRendering}
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
                    {ColumnsDefinition.map((Column, cellIndex) => {
                      const { id, cell, width } = Column.props;
                      const index = `${keys[rowIndex]}_${cellIndex}`;
                      const cellContent = typeof cell === "function" ? cell(row[id]) : row[cell];
                      return (
                        <styled.Cell
                          key={`cell_${index}`}
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
  );
}
/* eslint-enable react/no-array-index-key */

VirtualizedTable.propTypes = {
  ColumnsDefinition: PropTypes.arrayOf(
    PropTypes.shape({
      props: PropTypes.object.isRequired,
      type: PropTypes.func.isRequired,
    })
  ).isRequired,
  onSort: PropTypes.func,
  height: PropTypes.number.isRequired,
  width: PropTypes.number,
  rowHeight: PropTypes.number.isRequired,
};

VirtualizedTable.defaultProps = {
  onSort: null,
  width: null,
};
