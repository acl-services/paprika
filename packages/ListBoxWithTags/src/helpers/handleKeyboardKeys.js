import useListBox from "@paprika/listbox/lib/useListBox";

// this allowed the user navigate between the tags with [←] [→] left and right arrows
const handleKeyboardKeys = ({ state, dispatch, activeTag, setActiveTag }) => event => {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    setActiveTag(null);
    if (!state.refFilterInput.current) {
      dispatch({ type: useListBox.types.openPopover });
      return;
    }

    state.refFilterInput.current.focus();
  }

  if (state.selectedOptions.length) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      if (activeTag === null) {
        setActiveTag(state.selectedOptions[state.selectedOptions.length - 1]);
        return;
      }

      const index = state.selectedOptions.indexOf(activeTag);

      const currentActiveIndex = event.key === "ArrowLeft" ? index - 1 : index + 1;
      const nextIndex = (currentActiveIndex + state.selectedOptions.length) % state.selectedOptions.length;

      setActiveTag(state.selectedOptions[nextIndex]);
    }

    if (event.key === "Backspace") {
      if (activeTag === null) {
        return;
      }

      if (state.selectedOptions.length - 1 >= 0) {
        dispatch({ type: useListBox.types.unselectOptions, payload: [activeTag] });
        setActiveTag(state.selectedOptions[state.selectedOptions.length - 1]);
      } else {
        setActiveTag(null);
      }
    }
  }
};

export default handleKeyboardKeys;
