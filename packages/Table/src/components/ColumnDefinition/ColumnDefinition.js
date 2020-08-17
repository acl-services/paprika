/* eslint-disable react/no-unused-prop-types */
import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  cell: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};

export default function ColumnDefinition() {
  return <React.Fragment />;
}

ColumnDefinition.propTypes = propTypes;
ColumnDefinition.displayName = "Table.ColumnDefinition";
