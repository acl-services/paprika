import React from "react";
import PropTypes from "prop-types";

import * as sc from "./Panel.styles";

const propTypes = {
  children: PropTypes.node,
  /** Controls if the option is selected or not */

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
    <sc.Panel {...moreProps} role="tabpanel" data-pka-anchor="tabs.panel">
      {children}
    </sc.Panel>
  );
};

Panel.displayName = "Tabs.Panel";
Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
export default Panel;
