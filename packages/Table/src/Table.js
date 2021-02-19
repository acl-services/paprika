/* eslint-disable react/no-array-index-key */
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { extractChildren } from "@paprika/helpers";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import ColumnDefinition from "./components/ColumnDefinition";
import * as sc from "./Table.styles";
import { handleBlur, handleFocus, handleKeyDown, handleClick } from "./event";

const Table = React.forwardRef((props, ref) => {
  const {
    a11yText,
    borderType,
    children,
    data,
    enableArrowKeyNavigation,
    hasZebraStripes,
    onBlur,
    onClick,
    onFocus,
    /** for internal use */
    cellPropsResetCSS = false, // eslint-disable-line
    ...moreProps
  } = props;
  const [tableId] = React.useState(() => `table_${uuidv4()}`);

  const refFocus = React.useRef(null);

  const { "Table.ColumnDefinition": extractedColumnDefinitions } = extractChildren(children, [
    "Table.ColumnDefinition",
  ]);

  let ColumnDefinitions = extractedColumnDefinitions;

  if (!Array.isArray(extractedColumnDefinitions)) {
    // when there is only one component extracted function return the element not an array of elements
    ColumnDefinitions = [extractedColumnDefinitions];
  }

  const qty = {
    columnsLength: extractedColumnDefinitions.length,
    rowsLength: data.length,
  };

  const arrowKeyNavigationProps = enableArrowKeyNavigation
    ? {
        onFocus: handleFocus({ refFocus, tableId, onFocus }),
        onBlur: handleBlur({ refFocus, tableId, onBlur }),
        onKeyDown: handleKeyDown({ refFocus, tableId, onFocus, ...qty }),
        onClick: handleClick({ refFocus, tableId, onClick }),
        tabIndex: -1,
      }
    : {};

  return (
    <sc.Table
      {...(enableArrowKeyNavigation ? { role: "grid" } : {})}
      aria-label={a11yText}
      id={tableId}
      {...moreProps}
      ref={ref}
    >
      <sc.Thead>
        <tr>
          {ColumnDefinitions.map((columnDefinition, columnIndex) => {
            const { cell, header, ...moreColumnProps } = columnDefinition.props;

            if (typeof header === "function")
              return (
                <sc.TH borderType={borderType} key={columnIndex} {...moreColumnProps}>
                  {header({ header: columnDefinition.props, columnIndex })}
                </sc.TH>
              );
            if (typeof header === "string")
              return (
                <sc.TH borderType={borderType} key={columnIndex} {...moreColumnProps}>
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
                const position = { "data-row-index": rowIndex, "data-column-index": columnIndex };

                const { cell, header, ...moreColumnProps } = columnDefinition.props;

                if (typeof cell === "function")
                  return (
                    <sc.TD
                      cellPropsResetCSS={cellPropsResetCSS}
                      borderType={borderType}
                      key={columnIndex}
                      {...moreColumnProps}
                      {...position}
                      {...arrowKeyNavigationProps}
                      {...(columnIndex === 0 && rowIndex === 0 ? { tabIndex: 0 } : {})}
                    >
                      {cell({ row, rowIndex, columnIndex })}
                    </sc.TD>
                  );
                if (typeof cell === "string")
                  return (
                    <sc.TD
                      cellPropsResetCSS={cellPropsResetCSS}
                      borderType={borderType}
                      key={columnIndex}
                      {...moreColumnProps}
                      {...position}
                      {...arrowKeyNavigationProps}
                      {...(columnIndex === 0 && rowIndex === 0 ? { tabIndex: 0 } : {})}
                    >
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
});

Table.types = {
  border: constants.gridTypes,
};

const propTypes = {
  /** Define the look for borders in the table */
  borderType: PropTypes.oneOf([
    Table.types.border.GRID,
    Table.types.border.NONE,
    Table.types.border.HORIZONTAL,
    Table.types.border.VERTICAL,
  ]),
  /**  Accessible description of the table */
  a11yText: PropTypes.string.isRequired,
  /** 👶👶👶👶👶👶😸 */
  children: PropTypes.node.isRequired,
  /** Add an alternating background on the table rows */
  hasZebraStripes: PropTypes.bool,
  /** Array of data to be stored in the Table */
  data: PropTypes.arrayOf(PropTypes.shape({})),
  /** For authors use only, use case: inline editing. */
  enableArrowKeyNavigation: PropTypes.bool,
  /** It will be call each time a new cell received the focus */
  onFocus: PropTypes.func,
  /** It will be call each time a current selected cell lose focus */
  onBlur: PropTypes.func,
  /** It will be fire each time an user click on a cell */
  onClick: PropTypes.func,
};

const defaultProps = {
  borderType: Table.types.border.HORIZONTAL,
  data: [],
  enableArrowKeyNavigation: false,
  hasZebraStripes: false,
  onBlur: () => {},
  onClick: () => {},
  onFocus: () => {},
};

Table.displayName = "Table";
Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
Table.ColumnDefinition = ColumnDefinition;

export default Table;
