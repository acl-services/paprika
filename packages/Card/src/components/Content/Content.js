import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Content.styles";

const propTypes = {
  /** Primary content. */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

function Content(props) {
  const { children } = props;

  return <sc.Content data-pka-anchor="card.content">{children}</sc.Content>;
}

Content.displayName = "Content";
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
