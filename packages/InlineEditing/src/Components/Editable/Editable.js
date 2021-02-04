import React from "react";
import PropTypes from "prop-types";

const Editable = React.forwardRef((props, ref) => {
  const [status, setStatus] = React.useState("idle");

  React.useImperativeHandle(ref, () => ({
    onFocus: () => {
      setStatus("focus");
    },
    onBlur: () => {
      setStatus("idle");
    },
    onInteraction: () => {
      setStatus(prev => {
        if (prev === "focus" || prev === "editing") {
          return "editing";
        }

        return "focus";
      });
    },
  }));

  const types = {
    IDLE: "idle",
    FOCUS: "focus",
    EDITING: "editing",
  };

  return React.cloneElement(props.children, { ...props.children.props, status, types: { types } });
});

Editable.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Editable;
