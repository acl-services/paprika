import React from "react";
import RawButton from "@paprika/raw-button";
import { extractChildren } from "@paprika/helpers";

export default function Switcher(props) {
  const { onEdit: onEditProps } = props;
  const [onEdit, setOnEdit] = React.useState(false);
  const { "Switcher.Value": value, "Switcher.Edit": edit } = extractChildren(props.children, [
    "Switcher.Value",
    "Switcher.Edit",
  ]);

  React.useEffect(() => {
    if (onEdit) {
      onEditProps();
    }
  }, [onEdit, onEditProps]);

  return onEdit ? (
    React.Children.map(edit.props.children, child => {
      return React.cloneElement(child, { ...child.props, setOnEdit, onEdit });
    })
  ) : (
    <RawButton onClick={() => setOnEdit(true)}>{value.props.children}</RawButton>
  );
}

Switcher.Value = () => {
  return <></>;
};
Switcher.Value.displayName = "Switcher.Value";

Switcher.Edit = () => {
  return <></>;
};
Switcher.Edit.displayName = "Switcher.Edit";
