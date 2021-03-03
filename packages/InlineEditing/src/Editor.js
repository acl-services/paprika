import React from "react";
import RawButton from "@paprika/raw-button";
import PropTypes from "prop-types";
import extractChildren from "@paprika/helpers/lib/extractChildren";

const Editor = React.forwardRef((props, ref) => {
  const { onEdit: onEditProps, isEditing, setIsEditing } = props;
  const { "Editor.Value": editorValue, "Editor.Edit": edit } = extractChildren(props.children, [
    "Editor.Value",
    "Editor.Edit",
  ]);

  React.useEffect(() => {
    if (isEditing) {
      onEditProps();
    }
  }, [isEditing, onEditProps]);

  return isEditing ? (
    edit.props.children
  ) : (
    <RawButton className="inline-editing-raw-button" ref={ref} onClick={() => setIsEditing(true)}>
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
  onEdit: PropTypes.func.isRequired,
  setIsEditing: PropTypes.func.isRequired,
};

Editor.propTypes = propTypes;

export default Editor;
