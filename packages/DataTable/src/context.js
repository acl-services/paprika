import React from "react";
import PropTypes from "prop-types";
import tableReducer from "./reducers/table";
import { actions } from "./constants";

const TableStateContext = React.createContext();
const TableDispatchContext = React.createContext();

function TableProvider(props) {
  const { data, keygen, plugins } = props;
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      const changes = tableReducer(state, action);
      return plugins.reduce((prevState, reducer) => reducer(prevState, { ...action, changes }), state);
    },
    {
      data,
      keygen,
      sortColumn: null,
      sortDirection: null,
      sortedOrder: null,
    }
  );

  React.useEffect(() => {
    dispatch({ type: actions.RESET_DATA, payload: data });
  }, [data]);

  return (
    <TableStateContext.Provider value={state}>
      <TableDispatchContext.Provider value={dispatch}>{props.children}</TableDispatchContext.Provider>
    </TableStateContext.Provider>
  );
}

function useTableState() {
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

export { TableProvider, useTableState, useDispatch };
