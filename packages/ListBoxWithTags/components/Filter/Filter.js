import React from "react";
import PropTypes from "prop-types";
import useListBox from "@paprika/listbox/store/useListBox";
import handleKeyboardKeys from "@paprika/listbox/helpers/handleKeyboardKeys";
import FilterStyled from "./Filter.styles";

const propTypes = {
  defaultTagInputText: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  setActiveTag: PropTypes.func.isRequired,
  onAddCustomTag: PropTypes.func.isRequired,
};

const defaultProps = {
  defaultTagInputText: "",
};

export default function TagInput(props) {
  const [state, dispatch] = useListBox();
  const [filterText, setFilterText] = React.useState(props.defaultTagInputText);
  function openPopover() {
    dispatch({
      type: useListBox.types.openPopover,
    });
  }

  function closePopover() {
    dispatch({ type: useListBox.types.closePopover });
  }

  const handleClick = event => {
    if (!state.isPopoverOpen) {
      openPopover();
    }
    event.stopPropagation();
  };

  // this allowed the user navigate between the tags with [←] [→] left and right arrows

  const handlePressEnterKey = event => {
    if (event.target.value) {
      props.onAddCustomTag(state, event.target.value);
      setFilterText("");
    }
  };

  const handleKeyDown = event => {
    if (!state.isPopoverOpen) {
      openPopover();
    }

    if (event.key === "Enter") {
      if (state.hasNoResults) {
        handlePressEnterKey(event);
        return;
      }
    }

    if (event.key === " ") {
      event.stopPropagation();
      return;
    }

    if (event.key === "Backspace" && event.target.value.length) {
      event.stopPropagation();
    }

    if ((event.key === "ArrowLeft" || event.key === "ArrowRight") && event.target.value.length) {
      event.stopPropagation();
    }

    if (event.key === "Tab") {
      closePopover();
    }

    handleKeyboardKeys(state, dispatch)(event);
  };

  const handleBlur = () => {
    window.requestAnimationFrame(() => {
      if (document.activeElement !== state.refListBoxContainer.current) {
        closePopover();
        props.setActiveTag(null);
      }
    });
  };

  const handleFilterChange = event => {
    if (event.target.value.length) {
      props.setActiveTag(null);
    }

    setFilterText(event.target.value);
  };

  React.useLayoutEffect(() => {
    if (state.isPopoverOpen) {
      state.refFilterInput.current.focus();
      setFilterText("");
    }
  }, [state.selectedOptions]);

  return (
    <FilterStyled
      placeholder={props.placeholder}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      onClick={handleClick}
      onChangeFilter={handleFilterChange}
      forceShowFilter
      value={filterText}
      hasSearchIcon={false}
    />
  );
}

TagInput.propTypes = propTypes;
TagInput.defaultProps = defaultProps;
