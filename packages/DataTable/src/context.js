import React from "react";
import PropTypes from "prop-types";
import isMatchWith from "lodash.ismatchwith";
import tableReducer from "./reducers/table";
import useAsyncReducer from "./hooks/useAsyncReducer";
import { logicalFilterOperators, plugins } from "./constants";

const TableStateContext = React.createContext();
const TableDispatchContext = React.createContext();

function TableProvider(props) {
  const { isControlled, data, keygen, reducers, columns, enabledPlugins } = props;
  const initialState = {
    keyGrid: 0,
    isControlled,
    enabledPlugins,
    data: data || [],
    dataForRendering: data || [],
    keygen,
    sortColumn: null,
    sortDirection: null,
    columnsOrder: columns.map(column => column.id),
    columns: columns.reduce((columnsObject, column) => ({ ...columnsObject, [column.id]: column }), {}),
    filters: [],
    logicalFilterOperator: logicalFilterOperators.AND,
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

    dispatch({ type: "RESET_STATE", payload: { data } });
    // Watching data
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isFirstRender]);

  React.useEffect(() => {
    const newColumns = columns.reduce((columnsObject, column) => ({ ...columnsObject, [column.id]: column }), {});
    const isVisibilityChanged = !isMatchWith(newColumns, state.columns, (newColumn, column) => {
      return newColumn.id === column.id && newColumn.isHidden === column.isHidden;
    });

    if (isVisibilityChanged) {
      dispatch({
        type: "RESET_STATE",
        payload: {
          columns: newColumns,
        },
      });
    }
    // Watching isHidden
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns]);

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
  isControlled: PropTypes.bool.isRequired,
  enabledPlugins: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(plugins).map(key => plugins[key]))).isRequired,
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  keygen: PropTypes.string.isRequired,
  reducers: PropTypes.arrayOf(PropTypes.func).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    })
  ),
};

TableProvider.defaultProps = {
  data: [],
  columns: [],
};

export { TableProvider, useDataTableState, useDispatch };
