import * as actionTypes from "../store/actionTypes";

const handleImperative = (state, dispatch) => () => {
  return {
    clear: () => {
      dispatch({ type: actionTypes.clear });
    },
    reset: () => {
      dispatch({ type: actionTypes.reset });
    },
    focus: () => {
      state.refTrigger.current.focus();
    },
    selected: state.isMulti ? state.selectedOptions : state.selectedOptions[0],
    options: state.options,
  };
};

export default handleImperative;
