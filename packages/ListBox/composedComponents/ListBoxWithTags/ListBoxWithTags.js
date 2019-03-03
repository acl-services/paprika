import React from "react";
// Listbox
import ListBox, { propTypes, defaultProps } from "../../ListBox";
import Option from "../../components/Option";
import Group from "../../components/Group";
import Provider from "../../store/Provider";
import Tags from "./components/Tags";
import useStore from "../../store/useStore";
import * as actionTypes from "../../store/actionTypes";

// Custom Componeent for ListBoxWithTags
import Trigger from "./components/TriggerButton";

function ListBoxWithTags(props) {
  const [state, dispatch] = useStore();
  const [activeTag, setActiveTag] = React.useState(null);

  // this allowed the user navigate between the tags with [←] [→] left and right arrows
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

  function renderLabel() {
    return <Trigger>{state.selectedOptions.length ? <Tags activeTag={activeTag} /> : state.placeholder}</Trigger>;
  }

  return (
    <ListBox onKeyDown={handleKeyDown} {...props} renderLabel={renderLabel}>
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
