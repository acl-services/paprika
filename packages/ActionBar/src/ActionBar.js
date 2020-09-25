import React from "react";
import PropTypes from "prop-types";
import * as types from "./types";
import * as sc from "./ActionBar.styles";
import "@paprika/helpers/lib/dom/nanoIdPolyfill";

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
