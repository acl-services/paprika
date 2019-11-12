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
        return subset.map((row, index) => {
          return (
            <styled.Row {...a11y.row} $height={rowHeight} key={`row_${keys[index]}`}>
              <styled.Counter key={`row_index_${keys[index]}`}>{keys[index] + 1}</styled.Counter>
              {row.map((cell, i) => {
                return (
                  <styled.Cell
                    key={`cell_${keys[index]}_${i}`}
                    {...a11y.cell}
                    $width={ColumnsDefinition[i].props.width}
                    $height={rowHeight}
                  >
                    {ColumnsDefinition[i].props.renderCell ? ColumnsDefinition[i].props.renderCell(cell) : cell}
                  </styled.Cell>
                );
              })}
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
