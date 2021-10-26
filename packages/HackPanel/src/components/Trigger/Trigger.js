import React from "react";
import Button from "@paprika/button";
import PropTypes from "prop-types";
import MenuIcon from "@paprika/icon/lib/Menu";
import * as types from "../../types";

const Trigger = React.forwardRef((props, ref) => (
  <Button.Icon ref={ref} {...props} isSemantic={false} data-pka-anchor="panel.trigger" kind="minor" >
    <MenuIcon />
  </Button.Icon>
));

Trigger.types = {
  kind: types.kinds,
};

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {};

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;
Trigger.displayName = "Panel.Trigger";

export default Trigger;
