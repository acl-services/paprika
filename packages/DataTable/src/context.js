import React from "react";
import PropTypes from "prop-types";
import tableReducer from "./reducers/table";
import { actions } from "./constants";
import useAsyncReducer from "./hooks/useAsyncReducer";

const TableStateContext = React.createContext();
const TableDispatchContext = React.createContext();

function TableProvider(props) {
  const { data, keygen, reducers } = props;
  const initialState = {
    data: data || [],
    keygen,
    sortColumn: null,
    sortDirection: null,
    sortedOrder: null,
  };
  const isFirstRender = React.useRef(true);
  const memorizedReducer = React.useCallback(
    (state, action) => {
      const changes = tableReducer(state, action);
      return new Promise(resolve => {
        resolve(
          reducers.reduce(async (previousPromise, reducer) => {
            const prevChanges = await previousPromise;
            const result = reducer(state, { ...action, changes: prevChanges });
            if (typeof result.then === "function") {
              const finalResult = await result;
              return finalResult;
            }
            return result;
          }, changes)
        );
      });
    },
    [reducers]
  );
  const [state, dispatch] = useAsyncReducer(memorizedReducer, initialState);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    dispatch({ type: actions.RESET_DATA, payload: data });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isFirstRender]);

  return (
    <TableStateContext.Provider value={state}>
      <TableDispatchContext.Provider value={dispatch}>{props.children}</TableDispatchContext.Provider>
    </TableStateContext.Provider>
  );
}

function useDataTableState() {
  return React.useContext(TableStateContext);
}

function useDispatch() {
  return React.useContext(TableDispatchContext);
}

TableProvider.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  keygen: PropTypes.string.isRequired,
  reducers: PropTypes.arrayOf(PropTypes.func).isRequired,
};

TableProvider.defaultProps = {
  data: [],
};

export { TableProvider, useDataTableState, useDispatch };
