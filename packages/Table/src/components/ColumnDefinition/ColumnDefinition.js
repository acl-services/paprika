/* eslint-disable react/no-unused-prop-types */
import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /** Each time a cell is renderer this prop will be call either to read a string value or to execute a cell function */
  cell: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  /** Represent the header for the column can either be a string or a function */
  cellProps: PropTypes.func,
  cellPropsResetCSS: PropTypes.bool,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  /** Determine if a column should behave as a sticky column or not, received a number representing the space between the left side and the column pixels
   *  internally the default value is zero
   */
  sticky: PropTypes.number,
};

const defaultProps = {
  sticky: undefined,
  cellProps: undefined,
  cellPropsResetCSS: undefined,
};

export default function ColumnDefinition() {
  return <React.Fragment />;
}

ColumnDefinition.propTypes = propTypes;
ColumnDefinition.defaultProps = defaultProps;

ColumnDefinition.displayName = "Table.ColumnDefinition";
