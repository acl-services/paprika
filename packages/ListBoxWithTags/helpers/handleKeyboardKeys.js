import * as actionTypes from "@paprika/listbox/store/actionTypes";

// this allowed the user navigate between the tags with [←] [→] left and right arrows
const handleKeyboardKeys = ({ state, dispatch, activeTag, setActiveTag, refTagInput }) => event => {
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
        (refTagInput.current && index === state.selectedOptions.length - 1 && event.key === "ArrowRight")
      ) {
        refTagInput.current.focus();
        setActiveTag(-1);
        return;
      }

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

export default handleKeyboardKeys;
