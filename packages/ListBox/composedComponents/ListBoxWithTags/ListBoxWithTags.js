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
import Trigger from "./components/Trigger";

const propTypes = {
  placeholderForTagInput: PropTypes.string,
  hasCustomTags: PropTypes.bool,
  ...listBoxPropTypes,
};

const defaultProps = {
  placeholderForTagInput: "New option ...",
  hasCustomTags: false,
  ...listBoxdefaultProps,
};

function ListBoxWithTags(props) {
  const [state, dispatch] = useStore();
  const [activeTag, setActiveTag] = React.useState(null);

  function handleBackSpace(event) {
    if (event.key === "Backspace" && state.refFilterInput.current.value.length === 0) {
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

  function handleLeftAndRightArrows(event) {
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
  }

  const handleKeyDown = event => {
    // keeping always the filter with the focus on a keyboard interaction
    if (state.refFilterInput.current && (event.key === "ArrowUp" || event.key === "ArrowDown")) {
      state.refFilterInput.current.focus();
    }

    // this allowed the user navigate between the tags with [←] [→] left and right arrows
    if (state.selectedOptions.length) {
      handleLeftAndRightArrows(event);
      handleBackSpace(event);
    }
  };

  function renderLabel() {
    /* eslint-disable react/prop-types */
    return (
      <Trigger>
        <Tags
          activeTag={activeTag}
          hasCustomTags={props.hasCustomTags}
          placeholderForTagInput={props.placeholderForTagInput}
        />
        {!props.hasCustomTags && !state.selectedOptions.length ? state.placeholder : null}
      </Trigger>
    );
    /* eslint-enable react/prop-types */
  }

  React.useEffect(() => {
    if (state.isPopoverOpen && state.refFilterInput.current) {
      state.refFilterInput.current.focus();
    }
  }, [state.isPopoverOpen]);

  React.useEffect(() => {
    state.refFilterInput.current.focus();
  }, [state.selectedOptions]);

  React.useEffect(() => {
    if (state.lastActiveOptionIndexAffected) {
      const isHidden = state.options[state.lastActiveOptionIndexAffected].isHidden;

      if (isHidden) {
        dispatch({
          type: actionTypes.unhideOptions,
          payload: state.lastActiveOptionIndexAffected,
        });
        return;
      }
      dispatch({ type: actionTypes.hideOptions, payload: state.lastActiveOptionIndexAffected });
    }
  }, [state.lastActiveOptionIndexAffected]);

  React.useEffect(() => {
    if (!Object.keys(state.options).some(index => !state.options[index].isHidden)) {
      dispatch({ type: actionTypes.closePopover });
    }
  }, [state.options]);

  return (
    /* eslint-disable react/prop-types */
    <ListBox {...props} isPopoverEager={!props.hasCustomTags} onKeyDown={handleKeyDown} renderLabel={renderLabel}>
      {props.children}
    </ListBox>
    /* eslint-enable react/prop-types */
  );
}

export default function ListBoxWithTagsWithProvider(props) {
  return (
    <Provider
      {...props}
      preventOnBlurOnTrigger
      hasFilter={props.hasCustomTags ? false : props.hasFilter}
      isMulti
      options={props.children}
    >
      <ListBoxWithTags {...props} />
    </Provider>
  );
}

ListBoxWithTagsWithProvider.propTypes = propTypes;
ListBoxWithTagsWithProvider.defaultProps = defaultProps;
ListBoxWithTagsWithProvider.Option = Option;
ListBoxWithTagsWithProvider.Group = Group;
