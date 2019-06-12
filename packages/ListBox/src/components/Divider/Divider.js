import React from "react";
import PropTypes from "prop-types";
import { dividerCSS } from "./Divider.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Divider(props) {
  return <li css={dividerCSS}>{props.children}</li>;
}

Divider.propTypes = propTypes;
