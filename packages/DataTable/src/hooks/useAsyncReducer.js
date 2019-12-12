import React from "react";

const useAsyncReducer = (reducer, initialState = null) => {
  const [state, setState] = React.useState(initialState);
  console.log("initialize reducer");
  let isUpdatingState = false;
  const [pendingActions, setPendingActions] = React.useState([]);

  const dispatch = async action => {
    if (isUpdatingState) {
      setPendingActions(prevPendingActions => [...prevPendingActions, action]);
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
    if (pendingActions.length > 0) {
      dispatch(pendingActions.shift());
      setPendingActions(pendingActions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return [state, dispatch];
};

export default useAsyncReducer;
