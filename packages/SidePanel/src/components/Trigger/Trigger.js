import React from "react";
import Button from "@paprika/button";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {};

const Trigger = React.forwardRef((props, ref) => {
  return <Button ref={ref} {...props} />;
});

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;
Trigger.componentType = "SidePanel.Trigger";

export default Trigger;
