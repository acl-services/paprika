import React from "react";
import PropTypes from "prop-types";

import * as sc from "./Content.styles";

export default function Content(props) {
  const { children, hasDivider, ...moreProps } = props;

  return (
    <sc.Content hasDivider={hasDivider} {...moreProps}>
      {children}
    </sc.Content>
  );
}

const propTypes = {
  children: PropTypes.node,

  /** If has a divider between collapsible header and content. */
  hasDivider: PropTypes.bool,
};

const defaultProps = {
  children: null,
  hasDivider: false,
};

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
Content.displayName = "CollapsibleCard.Content";
