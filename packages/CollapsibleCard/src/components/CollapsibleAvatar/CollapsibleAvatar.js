import React from "react";
import PropTypes from "prop-types";
import tokens from "@paprika/tokens";

import * as sc from "./CollapsibleAvatar.styles";

export default function CollapsibleAvatar(props) {
  const { children, ...moreProps } = props;

  return (
    <sc.CollapsibleAvatar backgroundColor={tokens.color.blackLighten10} {...moreProps}>
      {children}
    </sc.CollapsibleAvatar>
  );
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

CollapsibleAvatar.propTypes = propTypes;
CollapsibleAvatar.defaultProps = defaultProps;
CollapsibleAvatar.displayName = "CollapsibleCard.Avatar";
