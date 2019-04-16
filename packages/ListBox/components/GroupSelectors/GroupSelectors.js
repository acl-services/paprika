import React from "react";
import Option from "../Option";

export default function GroupSelectors(props) {
  let groupChildren = [];

  if (props.hasGroupSelection) {
    const groupSelectors = React.Children.toArray(props.children).filter(
      option => option.type.componentType === "ListBox.Group"
    );

    if (groupSelectors.length) {
      groupChildren = groupSelectors.map(({ props }) => {
        let labelSelector = props.label;
        if (props.labelSelector) {
          labelSelector = props.labelSelector;
        }

        return (
          <Option key={props.groupId} isGroupSelector groupId={props.groupId} renderChecker={() => null}>
            {labelSelector}
          </Option>
        );
      });
    }
  }

  return groupChildren;
}
