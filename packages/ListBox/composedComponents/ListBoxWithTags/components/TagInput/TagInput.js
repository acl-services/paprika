import React from "react";
import PropTypes from "prop-types";
import TagInputStyled from "./TagInput.styles";
import useStore from "../../../../store/useStore";
import * as actionTypes from "../../../../store/actionTypes";

const propTypes = {
  placeholder: PropTypes.string.isRequired,
  defaultTagInputText: PropTypes.string,
};
const defaultProps = {
  defaultTagInputText: "",
};

const TagInput = React.forwardRef((props, ref) => {
  const [inputText, setInputText] = React.useState(props.defaultTagInputText);
  const [state, dispatch] = useStore();
  const handleChange = event => {
    setInputText(event.target.value);
  };

  const handleClick = event => {
    event.stopPropagation();
  };

  const handleKeyDown = event => {
    // Avoid propagation of the cursor
    // at the start or at end of the input when the user click Arrow Up or Down
    // Also prevent to firing the space bar or enter key while filtering
    if (event.key === "Backspace") {
      event.stopPropagation();
    }

    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      state.refFilterInput.current.focus();
      event.preventDefault();
      event.stopPropagation();
    }

    if (event.key === " ") {
      event.stopPropagation();
    }

    if ((event.key === "ArrowLeft" || event.key === "ArrowRight") && ref.current.value !== "") {
      event.stopPropagation();
    }
  };

  const handleBlur = () => {
    window.requestAnimationFrame(() => {
      if (
        state.refListBoxContainer &&
        state.refListBoxContainer.current &&
        !state.refListBoxContainer.current.contains(document.activeElement)
      ) {
        dispatch({ type: actionTypes.closePopover });
      }
    });
  };

  return (
    <TagInputStyled
      ref={ref}
      data-paprika-prevent="onBlur"
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      defaultValue={inputText}
      onChange={handleChange}
      onClick={handleClick}
      tabIndex={-1}
      placeholder={props.placeholder}
    />
  );
});

export default TagInput;

TagInput.propTypes = propTypes;
TagInput.defaultProps = defaultProps;
