import React from "react";
import PropTypes from "prop-types";
import FilterStyled from "./Filter.styles";
import useStore from "../../../../store/useStore";
import * as actionTypes from "../../../../store/actionTypes";
import handleKeyboardKeys from "../../../../helpers/handleKeyboardKeys";

const propTypes = {
  placeholder: PropTypes.string.isRequired,
  defaultTagInputText: PropTypes.string,
};
const defaultProps = {
  defaultTagInputText: "",
};

export default function TagInput(props) {
  // const [inputText, setInputText] = React.useState(props.defaultTagInputText);
  const [state, dispatch] = useStore();
  // const handleChange = event => {
  //   setInputText(event.target.value);
  // };

  const handleClick = event => {
    if (!state.isPopoverOpen) {
      dispatch({ type: actionTypes.openPopover });
    }
    event.stopPropagation();
  };

  // this allowed the user navigate between the tags with [←] [→] left and right arrows

  const handleKeyDown = event => {
    handleKeyboardKeys(state, dispatch)(event);

    if (event.key === "Tab" && document.activeElement === state.refFilterInput.current) {
      dispatch({ type: actionTypes.closePopover });
    }
    // Avoid propagation of the cursor
    // at the start or at end of the input when the user click Arrow Up or Down
    // Also prevent to firing the space bar or enter key while filtering
    // if (event.key === "Backspace") {
    //   event.stopPropagation();
    // }

    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // if (event.key === " ") {
    //   event.stopPropagation();
    // }
    //

    // /////////////////////////////////

    // if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    //   setActiveTag(null);
    //   if (!state.refFilterInput.current) {
    //     dispatch({ type: actionTypes.openPopover });
    //     return;
    //   }
    //
    //   state.refFilterInput.current.focus();
    //
    //   if (state.refFilterInput.current && (state.activeOption === 0 && event.key === "ArrowUp")) {
    //     state.refFilterInput.current.focus();
    //     setActiveTag(-1);
    //   }
    // }

    // if (state.selectedOptions.length) {
    //   if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    //     if (state.refFilterInput.current === document.activeElement) {
    //       state.refFilterInput.current.focus();
    //       setActiveTag(-1);
    //       return;
    //     }
    //
    //     if (activeTag === null) {
    //       setActiveTag(state.selectedOptions[0]);
    //
    //       return;
    //     }
    //
    //     // this means the focus is on the TagInput
    //     if (activeTag === -1) {
    //       if (event.key === "ArrowLeft") {
    //         setActiveTag(state.selectedOptions[state.selectedOptions.length - 1]);
    //       } else {
    //         setActiveTag(0);
    //       }
    //       state.refListBoxContainer.current.focus();
    //       return;
    //     }
    //
    //     const index = state.selectedOptions.indexOf(activeTag);
    //
    //     if (
    //       (state.refFilterInput.current && index === 0 && event.key === "ArrowLeft") ||
    //       (index === state.selectedOptions.length - 1 && event.key === "ArrowRight")
    //     ) {
    //       setActiveTag(-1);
    //       state.refFilterInput.current.focus();
    //       return;
    //     }
    //
    //     const currentActiveIndex = event.key === "ArrowLeft" ? index - 1 : index + 1;
    //     const nextIndex = (currentActiveIndex + state.selectedOptions.length) % state.selectedOptions.length;
    //
    //     setActiveTag(state.selectedOptions[nextIndex]);
    //     // state.refListBoxContainer.current.focus();
    //   }
    //
    //   if (event.key === "Backspace") {
    //     if (activeTag === null) {
    //       setActiveTag(state.selectedOptions[state.selectedOptions.length - 1]);
    //       return;
    //     }
    //
    //     if (state.selectedOptions.length - 1 >= 0) {
    //       dispatch({ type: actionTypes.unselectOptions, payload: [activeTag] });
    //       setActiveTag(state.selectedOptions[state.selectedOptions.length - 1]);
    //     } else {
    //       setActiveTag(null);
    //     }
    //   }
    // }
  };

  const handleBlur = () => {
    window.requestAnimationFrame(() => {
      if (
        !state.refTriggerContainer.current.contains(document.activeElement) &&
        state.refTriggerContainer.current !== document.activeElement &&
        !state.refListBoxContainer.current.contains(document.activeElement)
      ) {
        dispatch({ type: actionTypes.closePopover });
      }
    });
  };

  return (
    <FilterStyled
      placeholder={props.placeholder}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      onClick={handleClick}
      forceShowFilter
      defaultTextSearch={props.defaultTagInputText}
      hasSearchIcon={false}
    />
  );
}

TagInput.propTypes = propTypes;
TagInput.defaultProps = defaultProps;
