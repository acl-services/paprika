import React from "react";
import Button from "@paprika/button";
import PropTypes from "prop-types";
import * as types from "../../types";

const Trigger = React.forwardRef((props, ref) => {
  return <Button ref={ref} {...props} isSemantic={false} data-pka-anchor="side-panel.trigger" />;
});

Trigger.types = {
  kind: types.sidePanelKinds,
};

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {};

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;
Trigger.displayName = "SidePanel.Trigger";

export default Trigger;
