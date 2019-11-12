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
    <VirtualizeRows data={data} gridRowHeight={rowHeight} gridLength={data.length} gridHeight={height}>
      {subset => {
        return subset.map((row, index) => {
          return (
            <styled.Row height={rowHeight} key={`tr_${index}`}>
              {row.map((cell, i) => {
                return (
                  <div key={`td_${i}`}>
                    {ColumnsDefinition[i].props.renderCell ? ColumnsDefinition[i].props.renderCell(cell) : cell}
                  </div>
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
