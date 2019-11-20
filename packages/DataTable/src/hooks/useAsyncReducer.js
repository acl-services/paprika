import React from "react";

const useAsyncReducer = (reducer, initialState = null) => {
  const [state, setState] = React.useState(initialState);

  const dispatch = async action => {
    const result = reducer(state, action);
    if (typeof result.then === "function") {
      try {
        const newState = await result;
        setState(newState);
      } catch (err) {
        setState({ ...state, error: err });
      }
    } else {
      setState(result);
    }
  };

  return [state, dispatch];
};

export default useAsyncReducer;
