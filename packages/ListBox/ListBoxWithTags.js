import React from "react";
import ListBox, { propTypes, defaultProps } from "./ListBox";
import Option from "./components/Option";
import Group from "./components/Group";
import TagButton from "./components/TagButton";
import { TagStyled } from "./components/TagButton/Tag.styles";
import Provider from "./store/Provider";
import useStore from "./store/useStore";

import * as actionTypes from "./store/actionTypes";

function ListBoxWithTags(props) {
  const [state, dispatch] = useStore();
  const [activeTag, setActiveTag] = React.useState(null);

  const handleDeleteTag = key => event => {
    event.stopPropagation();
    dispatch({
      type: actionTypes.unselectOptions,
      payload: [key],
    });
  };

  const handleKeyDown = event => {
    if (state.selectedOptions.length) {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        if (activeTag === null) {
          setActiveTag(state.selectedOptions[0]);
          return;
        }

        const index = state.selectedOptions.indexOf(activeTag);
        const currentActiveIndex = event.key === "ArrowLeft" ? index - 1 : index + 1;
        const nextIndex = (currentActiveIndex + state.selectedOptions.length) % state.selectedOptions.length;
        setActiveTag(state.selectedOptions[nextIndex]);
      }

      if (event.key === "Backspace") {
        if (activeTag === null) {
          setActiveTag(state.selectedOptions[state.selectedOptions.length - 1]);
          return;
        }

        if (state.selectedOptions.length - 1 >= 0) {
          dispatch({ type: actionTypes.unselectOptions, payload: [activeTag] });
          setActiveTag(state.selectedOptions[state.selectedOptions.length - 1]);
        } else {
          setActiveTag(null);
        }
      }
    }
  };

  function Tags() {
    return state.selectedOptions
      .map(key => {
        if (state.selectedOptions.includes(state.options[key].index)) {
          const label = state.options[key].label;
          return (
            <TagStyled
              isTagActive={activeTag === Number.parseInt(key, 10)}
              key={label}
              onRemove={handleDeleteTag(key)}
              isDisabled={state.isDisabled}
              label={label}
            />
          );
        }
        return null;
      })
      .map(tag => tag);
  }

  function renderLabel() {
    return <TagButton>{state.selectedOptions.length ? <Tags /> : state.placeholder}</TagButton>;
  }

  return (
    <ListBox onKeyDown={handleKeyDown} isPopoverOpen {...props} renderLabel={renderLabel}>
      {props.children} {/* eslint-disable-line */}
    </ListBox>
  );
}

export default function ListBoxWithTagsWithProvider(props) {
  return (
    <Provider {...props} isMulti options={props.children}>
      <ListBoxWithTags {...props} />
    </Provider>
  );
}

ListBoxWithTagsWithProvider.propTypes = propTypes;
ListBoxWithTagsWithProvider.defaultProps = defaultProps;
ListBoxWithTagsWithProvider.Option = Option;
ListBoxWithTagsWithProvider.Group = Group;
