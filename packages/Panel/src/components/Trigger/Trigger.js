import React from "react";
import Button from "@paprika/button";
import PropTypes from "prop-types";

const Trigger = React.forwardRef((props, ref) => (
  <Button ref={ref} {...props} isSemantic={false} data-pka-anchor="panel.trigger" />
));

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {};

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;
Trigger.displayName = "Panel.Trigger";

export default Trigger;
