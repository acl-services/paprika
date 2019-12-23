import React from "react";
import PropTypes from "prop-types";

import { panelStyles } from "./Panel.styles";

const propTypes = {
  children: PropTypes.node,
  isSelected: PropTypes.bool,
};

const defaultProps = {
  children: null,
  isSelected: false,
};

const Panel = props => {
  const { isSelected, children, ...moreProps } = props;

  if (!isSelected) {
    return null;
  }

  return (
    <div {...moreProps} css={panelStyles} role="tabpanel" data-pka-anchor="panel">
      {children}
    </div>
  );
};

Panel.displayName = "Tabs.Panel";
Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
export default Panel;
