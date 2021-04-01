import React from "react";
import RawButton from "@paprika/raw-button";
import PropTypes from "prop-types";
import extractChildren from "@paprika/helpers/lib/extractChildren";

const Editor = React.forwardRef((props, ref) => {
  const { isEditing, onClick } = props;
  const { "Editor.Value": editorValue, "Editor.Edit": edit } = extractChildren(props.children, [
    "Editor.Value",
    "Editor.Edit",
  ]);

  function handleClick(event) {
    onClick(event);
  }

  return isEditing ? (
    edit.props.children
  ) : (
    <RawButton style={{ width: "100%" }} data-pka-anchor="inline-editing.raw-button" ref={ref} onClick={handleClick}>
      {editorValue.props.children}
    </RawButton>
  );
});

Editor.Value = () => {
  return <></>;
};
Editor.Value.displayName = "Editor.Value";

Editor.Edit = () => {
  return <></>;
};

Editor.Edit.displayName = "Editor.Edit";

const propTypes = {
  children: PropTypes.node.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: () => {},
};

Editor.propTypes = propTypes;
Editor.defaultProps = defaultProps;

export default Editor;
