import React from "react";
import Option from "../Option";

export default function GroupSelectors(props) {
  let groupChildren = [];

  // const handleClick = groupId => (event, index, options, state, dispatch) => {
  //   if (state.selectedGroupSelectors.includes(groupId)) {
  //     dispatch({
  //       type: useListBox.types.deselectByGroup,
  //       payload: groupId,
  //     });
  //
  //     return;
  //   }
  //
  //   dispatch({
  //     type: useListBox.types.selectByGroup,
  //     payload: groupId,
  //   });
  // };

  if (props.hasGroupSelection) {
    const groupSelectors = React.Children.toArray(props.children).filter(
      option => option.type.componentType === "ListBox.Group"
    );

    if (groupSelectors.length) {
      groupChildren = groupSelectors.map(({ props }) => {
        return (
          <Option key={props.groupId} isGroupSelector groupId={props.groupId} renderChecker={() => null}>
            {props.label}
          </Option>
        );
      });
    }
  }

  return groupChildren;
}
