import React from "react";
import PropTypes from "prop-types";
import tableReducer from "./reducers/table";
import { actions } from "./constants";
import useAsyncReducer from "./hooks/useAsyncReducer";

const TableStateContext = React.createContext();
const TableDispatchContext = React.createContext();

function TableProvider(props) {
  const { data, keygen, plugins } = props;
  const initialState = {
    data,
    keygen,
    sortColumn: null,
    sortDirection: null,
    sortedOrder: null,
  };
  const reducer = (state, action) => {
    const changes = tableReducer(state, action);
    return new Promise(resolve => {
      resolve(
        plugins.reduce(async (prevState, reducer) => {
          const result = await reducer(prevState, { ...action, changes });
          return result;
        }, state)
      );
    });
  };
  const [state, dispatch] = useAsyncReducer(reducer, initialState);

  React.useEffect(() => {
    dispatch({ type: actions.RESET_DATA, payload: data });
  }, [data]);

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
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  keygen: PropTypes.string.isRequired,
  plugins: PropTypes.arrayOf(PropTypes.func).isRequired,
};

export { TableProvider, useDataTableState, useDispatch };
