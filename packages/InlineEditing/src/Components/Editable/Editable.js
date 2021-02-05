import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Editable.styles";
import types from "../../types";

const Editable = React.forwardRef((props, ref) => {
  const on = types.status;
  const [status, setStatus] = React.useState(on.IDLE);

  React.useImperativeHandle(ref, () => ({
    onFocus: () => {
      setStatus(on.FOCUS);
    },
    onBlur: () => {
      setStatus(on.IDLE);
    },
    onInteraction: () => {
      setStatus(prev => {
        if (prev === on.FOCUS || prev === on.EDITING) {
          return on.EDITING;
        }

        return on.FOCUS;
      });
    },
  }));

  return (
    <sc.CellOverflow status={on}>
      {React.cloneElement(props.children, { ...props.children.props, status, types })}
    </sc.CellOverflow>
  );
});

Editable.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Editable;
