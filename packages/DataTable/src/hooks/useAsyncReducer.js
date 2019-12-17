import React from "react";

const useAsyncReducer = (reducer, initialState = null) => {
  const [state, setState] = React.useState(initialState);
  let isUpdatingState = false;
  const pendingActions = React.useRef([]);

  const dispatch = async action => {
    console.log("DISPATCH", action.type, action.payload);
    if (isUpdatingState) {
      pendingActions.current = [...pendingActions.current, action];
    } else {
      isUpdatingState = true;
      const result = reducer(state, action);
      try {
        const newState = await result;
        isUpdatingState = false;
        setState(newState);
      } catch (err) {
        isUpdatingState = false;
        setState({ ...state, error: err });
      }
    }
  };

  React.useEffect(() => {
    const newPendingActions = [...pendingActions.current];
    if (newPendingActions.length > 0) {
      dispatch(newPendingActions.shift());
      pendingActions.current = newPendingActions;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return [state, dispatch];
};

export default useAsyncReducer;
