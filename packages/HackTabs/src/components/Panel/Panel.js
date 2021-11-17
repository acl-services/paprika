import React from "react";
import PropTypes from "prop-types";

import * as sc from "./Panel.styles";

const propTypes = {
  children: PropTypes.node,

  /** Controls if the option is selected or not */
  isSelected: PropTypes.bool,

  /** Should unmount or not when isSelected is false */
  shouldUnmount: PropTypes.bool,
};

const defaultProps = {
  children: null,
  isSelected: false,
  shouldUnmount: true,
};

const Panel = props => {
  const { isSelected, shouldUnmount, children, ...moreProps } = props;

  if (!isSelected && shouldUnmount) {
    return null;
  }

  return (
    <sc.Panel
      isSelected={isSelected}
      shouldUnmount={shouldUnmount}
      {...moreProps}
      role="tabpanel"
      data-pka-anchor="tabs.panel"
    >
      {children}
    </sc.Panel>
  );
};

Panel.displayName = "Tabs.Panel";
Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
export default Panel;
