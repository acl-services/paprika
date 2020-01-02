import React from "react";
import Button from "@paprika/button";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {};

const Trigger = React.forwardRef((props, ref) => {
  return <Button ref={ref} {...props} isSemantic={false} data-pka-anchor="sidepanel.trigger" />;
});

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;
Trigger.displayName = "SidePanel.Trigger";

export default Trigger;
