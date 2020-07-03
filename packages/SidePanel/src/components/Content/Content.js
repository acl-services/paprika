import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Content.styles";

const propTypes = {
  /** Body content of the Content */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

export default function Content(props) {
  const { children } = props;
  return (
    <sc.contentStyles data-pka-anchor="sidepanel.content" {...props}>
      {children}
    </sc.contentStyles>
  );
}

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
Content.displayName = "SidePanel.Content";
