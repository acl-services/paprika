/* eslint-disable react/no-unused-prop-types */
import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /** Each time a cell is renderer this prop will be call either to read a string value or to execute a cell function */
  cell: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  /** Give you access to return an object (styles, className, data-qa, etc) to render on top of each <td /> element */
  cellProps: PropTypes.func,
  /** Represent the header for the column can either be a string or a function */
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  /** Determine if a column should behave as a sticky column or not, received a number representing the space between the left side and the column pixels
   *  internally the default value is zero
   */
  sticky: PropTypes.number,
};

const defaultProps = {
  sticky: undefined,
  cellProps: undefined,
};

export default function ColumnDefinition() {
  return <></>;
}

ColumnDefinition.propTypes = propTypes;
ColumnDefinition.defaultProps = defaultProps;

ColumnDefinition.displayName = "Table.ColumnDefinition";
