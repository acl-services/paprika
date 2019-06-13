import React from "react";
import PropTypes from "prop-types";

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
    <div {...moreProps} role="tabpanel">
      {children}
    </div>
  );
};

Panel.displayName = "Tabs.Panel";
Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
export default Panel;
