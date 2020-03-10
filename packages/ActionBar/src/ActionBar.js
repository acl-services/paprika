import React from "react";
import PropTypes from "prop-types";
import * as styled from "./ActionBar.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ActionBar(props) {
  const { children } = props;
  return <styled.ActionBar>{children}</styled.ActionBar>;
}

ActionBar.propTypes = propTypes;
ActionBar.displayName = "DataTable.ActionBar";
