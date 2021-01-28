import React from "react";
// import PropTypes from "prop-types";
import * as sc from "./InlineEditing.styles";

const propTypes = {};
const defaultProps = {};

export default function InlineEditing(props) {
  const { onChange, value, widget, isEditing, onEditing } = props;
  const refOutput = React.useRef(null);

  function handleFinish() {
    // this need to fire once the dom object has changed
    // and the Output component is visible
    window.requestAnimationFrame(() => {
      refOutput.current.onFinished();
    });
    onEditing();
  }

  function handleCancel() {
    // this need to fire once the dom object has changed
    // and the Output component is visible
    window.requestAnimationFrame(() => {
      refOutput.current.onCancel();
    });
    onEditing();
  }

  if ("Input" in widget && "Output" in widget) {
    return (
      <>
        <sc.Visible isVisible={isEditing} {...(isEditing ? "" : { "aria-hidden": "true" })}>
          <widget.Input
            isEditing={isEditing}
            onCancel={handleCancel}
            onChange={onChange}
            onEditing={onEditing}
            onFinish={handleFinish}
            value={value}
          />
        </sc.Visible>
        <sc.Visible isVisible={!isEditing} {...(!isEditing ? "" : { "aria-hidden": "true" })}>
          <widget.Output ref={refOutput} onEditing={onEditing} isEditing={isEditing} value={value} />
        </sc.Visible>
      </>
    );
  }

  throw new Error("widget prop lacks of Output or Input function");
}

InlineEditing.propTypes = propTypes;
InlineEditing.defaultProps = defaultProps;
