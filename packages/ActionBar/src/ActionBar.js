import React from "react";
import PropTypes from "prop-types";

import { changeTypes, columnTypes } from "./constants";
import * as sc from "./ActionBar.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ActionBar(props) {
  const { children } = props;
  return <sc.ActionBar>{children}</sc.ActionBar>;
}

ActionBar.propTypes = propTypes;
ActionBar.displayName = "DataTable.ActionBar";
ActionBar.changeTypes = changeTypes;
ActionBar.columnTypes = columnTypes;
