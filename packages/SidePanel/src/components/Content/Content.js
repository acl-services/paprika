import React from "react";
import PropTypes from "prop-types";
import { contentCSS } from "./Content.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};
const defaultProps = {};

export default function Content(props) {
  return <div css={contentCSS}>{props.children}</div>;
}

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
