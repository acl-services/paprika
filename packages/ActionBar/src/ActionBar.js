import React from "react";
import PropTypes from "prop-types";
import * as types from "./types";
import * as sc from "./ActionBar.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ActionBar(props) {
  const { children } = props;
  return <sc.ActionBar>{children}</sc.ActionBar>;
}

ActionBar.propTypes = propTypes;
ActionBar.displayName = "ActionBar";
ActionBar.types = types;
