import React from "react";
import Button from "@paprika/button";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {};

const Trigger = React.forwardRef((props, ref) => {
  // IMPORTANT this button can't be semantic, doing it will create a bug
  // for the user while interacting with the keyboard. As soon as the SidePanel
  // opens the keyUp event of the <button /> will fire triggering the close button which is the first
  // focusable element and will close it. Creating a weird LOOP EFFECT,
  // making imposible to open the SidePanel
  return (
    <Button ref={ref} {...props} isSemantic={false}>
      {props.children}
    </Button>
  );
});

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;
Trigger.componentType = "SidePanel.Trigger";

export default Trigger;
