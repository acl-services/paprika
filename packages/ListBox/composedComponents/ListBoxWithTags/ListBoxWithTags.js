import React from "react";
import PropTypes from "prop-types";
// Listbox
import ListBox, { propTypes as listBoxPropTypes, defaultProps as listBoxdefaultProps } from "../../ListBox";
import Option from "../../components/Option";
import Group from "../../components/Group";
import Provider from "../../store/Provider";
import Tags from "./components/Tags";
import useStore from "../../store/useStore";
import * as actionTypes from "../../store/actionTypes";

// Custom Componeent for ListBoxWithTags
import Trigger from "./components/TriggerButton";

const propTypes = {
  hasTagInput: PropTypes.bool,
  placeholderForTagInput: PropTypes.string,
  ...listBoxPropTypes,
};

const defaultProps = {
  hasTagInput: false,
  placeholderForTagInput: "New option ...",
  ...listBoxdefaultProps,
};

function ListBoxWithTags(props) {
  const refTagInput = React.useRef();
  const [state, dispatch] = useStore();
  const [activeTag, setActiveTag] = React.useState(null);

  // this allowed the user navigate between the tags with [←] [→] left and right arrows
  const handleKeyDown = event => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      setActiveTag(null);
      if (!state.refFilterInput.current) {
        dispatch({ type: actionTypes.openPopover });
        return;
      }

      state.refFilterInput.current.focus();

      if (refTagInput.current && (state.activeOption === 0 && event.key === "ArrowUp")) {
        refTagInput.current.focus();
        setActiveTag(-1);
      }
    }

    if (state.selectedOptions.length) {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        if (state.refFilterInput.current === document.activeElement) {
          refTagInput.current.focus();
          setActiveTag(-1);
          return;
        }

        if (activeTag === null) {
          setActiveTag(state.selectedOptions[0]);

          return;
        }

        // this means the focus is on the TagInput
        if (activeTag === -1) {
          if (event.key === "ArrowLeft") {
            setActiveTag(state.selectedOptions[state.selectedOptions.length - 1]);
          } else {
            setActiveTag(0);
          }
          state.refListBoxContainer.current.focus();
          return;
        }

        const index = state.selectedOptions.indexOf(activeTag);

        if (
          (refTagInput.current && index === 0 && event.key === "ArrowLeft") ||
          (index === state.selectedOptions.length - 1 && event.key === "ArrowRight")
        ) {
          setActiveTag(-1);
          refTagInput.current.focus();
          return;
        }

        const currentActiveIndex = event.key === "ArrowLeft" ? index - 1 : index + 1;
        const nextIndex = (currentActiveIndex + state.selectedOptions.length) % state.selectedOptions.length;

        setActiveTag(state.selectedOptions[nextIndex]);
        // state.refListBoxContainer.current.focus();
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
    /* eslint-disable react/prop-types */
    return (
      <Trigger>
        {state.selectedOptions.length ? (
          <Tags
            activeTag={activeTag}
            hasTagInput={props.hasTagInput}
            placeholderForTagInput={props.placeholderForTagInput}
            refTagInput={refTagInput}
          />
        ) : (
          state.placeholder
        )}
      </Trigger>
    );
    /* eslint-enable react/prop-types */
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
