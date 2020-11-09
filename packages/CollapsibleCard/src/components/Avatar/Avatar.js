import React from "react";
import PropTypes from "prop-types";
import tokens from "@paprika/tokens";

import * as sc from "./Avatar.styles";

export default function Avatar(props) {
  const { children, ...moreProps } = props;

  return (
    <sc.CollapsibleAvatar aria-hidden backgroundColor={tokens.color.blackLighten10} {...moreProps}>
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

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;
Avatar.displayName = "CollapsibleCard.Avatar";
