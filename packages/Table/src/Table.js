/* eslint-disable react/no-array-index-key */
import React from "react";

import extractChildren from "@paprika/helpers/lib/extractChildren";
import PropTypes from "prop-types";
import ColumnDefinition from "./components/ColumnDefinition";
import * as types from "./types";
import * as sc from "./Table.styles";

const propTypes = {
  /** Define the look for borders in the table Table.types.GRID, Table.types.NONE, etc.  */
  borderType: PropTypes.oneOf([types.GRID, types.NONE, types.HORIZONTAL, types.VERTICAL]),
  /**  Accessible description of the table */
  a11yText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  /** Add an alternating background on the table rows */
  hasZebraStripes: PropTypes.bool,
  /** Array of data to be stored in the Table */
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

const defaultProps = {
  borderType: types.GRID,
  data: [],
  hasZebraStripes: false,
};

export default function Table(props) {
  const { borderType, children, hasZebraStripes, data, a11yText, ...moreProps } = props;

  const { "Table.ColumnDefinition": extractedColumnDefinitions } = extractChildren(children, [
    "Table.ColumnDefinition",
  ]);

  let ColumnDefinitions = extractedColumnDefinitions;

  if (!Array.isArray(extractedColumnDefinitions)) {
    // when there is only one component extracted function return the element not an array of elements
    ColumnDefinitions = [extractedColumnDefinitions];
  }

  return (
    <sc.Table aria-label={a11yText} {...moreProps}>
      <sc.Thead>
        <tr>
          {ColumnDefinitions.map((columnDefinition, columnIndex) => {
            const { header } = columnDefinition.props;

            if (typeof header === "function")
              return (
                <sc.TH borderType={borderType} key={columnIndex}>
                  {header({ header: columnDefinition.props, columnIndex })}
                </sc.TH>
              );
            if (typeof header === "string")
              return (
                <sc.TH borderType={borderType} key={columnIndex}>
                  {header}
                </sc.TH>
              );

            throw new Error("Header should be either of type string or function");
          })}
        </tr>
      </sc.Thead>
      <sc.TBody hasZebraStripes={hasZebraStripes}>
        {data.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {ColumnDefinitions.map((columnDefinition, columnIndex) => {
                const { cell, ...moreProps } = columnDefinition.props;

                if (typeof cell === "function")
                  return (
                    <sc.TD borderType={borderType} key={columnIndex} {...moreProps}>
                      {cell({ row, rowIndex, columnIndex })}
                    </sc.TD>
                  );
                if (typeof cell === "string")
                  return (
                    <sc.TD borderType={borderType} key={columnIndex} {...moreProps}>
                      {typeof row[cell] !== "undefined" ? row[cell] : `Error: ${cell} doesn't exist`}
                    </sc.TD>
                  );

                throw new Error("Cell prop should be either of type string or function");
              })}
            </tr>
          );
        })}
      </sc.TBody>
    </sc.Table>
  );
}

Table.displayName = "Table";
Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
Table.ColumnDefinition = ColumnDefinition;
Table.types = types;
