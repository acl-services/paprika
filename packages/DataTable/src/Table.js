/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { extractChildren } from "./helpers";
import * as styled from "./Table.styles";
import ColumnDefinition from "./components/ColumnDefinition";
import VirtualizeRows from "./VirtualizeRows";

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
  /** Props and initializers */
  const { data, children: childrenProps, height, rowHeight, width } = props;

  const { "DataTable.ColumnDefinition": ColumnsDefinition } = extractChildren(childrenProps, [
    "DataTable.ColumnDefinition",
  ]);

  return (
    <VirtualizeRows
      data={data}
      gridRowHeight={rowHeight}
      gridLength={data.length}
      gridHeight={height}
      gridWidth={width}
    >
      {(subset, keys, a11y) => {
        return subset.map((row, rowIndex) => {
          return (
            <styled.Row {...a11y.row} $height={rowHeight} key={`row_${keys[rowIndex]}`}>
              <styled.Counter key={`row_index_${keys[rowIndex]}`}>{keys[rowIndex] + 1}</styled.Counter>
              {/* eslint-disable react/no-array-index-key */}
              {row.map((cell, cellIndex) => {
                return (
                  <styled.Cell
                    key={`cell_${keys[rowIndex]}_${cellIndex}`}
                    {...a11y.cell}
                    $width={ColumnsDefinition[cellIndex].props.width}
                    $height={rowHeight}
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
        });
      }}
    </VirtualizeRows>
  );
}

Table.prpoTypes = propTypes;
Table.defaultProps = defaultProps;
Table.ColumnDefinition = ColumnDefinition;
Table.types = { integer: "integer", string: "string", date: "date", object: "object" };
