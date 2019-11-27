import React from "react";

const useAsyncReducer = (reducer, initialState = null) => {
  const [state, setState] = React.useState(initialState);

  const dispatch = async action => {
    const result = reducer(state, action);

    console.log("dispatch setState");
    try {
      const newState = await result;
      setState(newState);
    } catch (err) {
      setState({ ...state, error: err });
    }
  };

  return [state, dispatch];
};

export default useAsyncReducer;
