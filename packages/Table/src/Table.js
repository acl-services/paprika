/* eslint-disable react/no-array-index-key */

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { extractChildren } from "@paprika/helpers";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import ColumnDefinition from "./components/ColumnDefinition";
import ViewportBlock from "./components/ViewportBlock/ViewportBlock";
import HeadersShells, { Headers } from "./components/Headers";
import * as sc from "./Table.styles";

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

  const { "Table.ColumnDefinition": extractedColumnDefinitions, "Table.Headers": extractedHeaders } = extractChildren(
    children,
    ["Table.ColumnDefinition", "Table.Headers"]
  );

  let ColumnDefinitions = extractedColumnDefinitions;

  if (!Array.isArray(extractedColumnDefinitions)) {
    // when there is only one component extracted function return the element not an array of elements
    ColumnDefinitions = [extractedColumnDefinitions];
  }

  const renderRowContent = (row, rowIndex) => (
    <>
      {ColumnDefinitions.map((columnDefinition, columnIndex) => {
        const position = { "data-row-index": rowIndex, "data-column-index": columnIndex };

        const {
          cell,
          header,
          width,
          sticky,
          cellProps: _cellProps,
          colSpan,
          ...moreColumnProps
        } = columnDefinition.props;

        const cellProps =
          typeof _cellProps === "function" ? _cellProps({ ...columnDefinition.props, row, rowIndex, columnIndex }) : {};

        if (typeof cell === "function")
          return (
            <sc.TD
              cellPropsResetCSS={cellPropsResetCSS}
              borderType={borderType}
              key={columnIndex}
              width={width}
              sticky={sticky}
              {...cellProps}
              {...moreColumnProps}
              {...position}
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
              {...cellProps}
              {...moreColumnProps}
              {...position}
            >
              {typeof row[cell] !== "undefined" ? row[cell] : `Error: ${cell} doesn't exist`}
            </sc.TD>
          );

        throw new Error("Cell prop should be either of type string or function");
      })}
    </>
  );

  return (
    <sc.Table aria-label={a11yText} id={tableId} {...moreProps} ref={ref}>
      <Headers extractedHeaders={extractedHeaders} ColumnDefinitions={ColumnDefinitions} borderType={borderType} />
      <sc.TBody hasZebraStripes={hasZebraStripes}>
        {props.onlyRenderRowsInView
          ? data.map((row, rowIndex) => {
              return (
                <ViewportBlock elementType="tr" key={rowIndex} id={`table-${rowIndex}-viewport`}>
                  {renderRowContent(row, rowIndex)}
                </ViewportBlock>
              );
            })
          : data.map((row, rowIndex) => {
              return <tr key={rowIndex}>{renderRowContent(row, rowIndex)}</tr>;
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
  /** Will only render table rows currently in the viewport */
  onlyRenderRowsInView: PropTypes.bool,
  /** Will fire each time a new cell receives focus */
  onFocus: PropTypes.func,
  /** Will fire each time a selected cell loses focus */
  onBlur: PropTypes.func,
  /** Will fire each time user clicks on a cell */
  onClick: PropTypes.func,
};

const defaultProps = {
  borderType: Table.types.border.HORIZONTAL,
  data: [],
  enableArrowKeyNavigation: false,
  hasZebraStripes: false,
  onlyRenderRowsInView: false,
  onBlur: () => {},
  onClick: () => {},
  onFocus: () => {},
};

Table.displayName = "Table";
Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
Table.ColumnDefinition = ColumnDefinition;
Table.Headers = HeadersShells;

export default Table;
