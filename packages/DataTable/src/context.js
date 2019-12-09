import React from "react";
import PropTypes from "prop-types";
import isMatchWith from "lodash.ismatchwith";
import tableReducer from "./reducers/table";
import useAsyncReducer from "./hooks/useAsyncReducer";
import filterTesters from "./helpers/filterTesters";
import sort from "./helpers/sort";
import { columnTypes, logicalFilterOperators } from "./constants";

const TableStateContext = React.createContext();
const TableDispatchContext = React.createContext();

function TableProvider(props) {
  const { isControlled, data, keygen, reducers, columns } = props;
  const initialState = {
    keyGrid: 0,
    isControlled,
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

function useData() {
  const {
    isControlled,
    data,
    columns,
    filters,
    sortColumn,
    sortDirection,
    keygen,
    logicalFilterOperator,
  } = useDataTableState();
  let sortedData = [];
  let filteredData = [];

  function calculateResult() {
    if (isControlled) return data;
    if (sortColumn && sortDirection) {
      sortedData = sort({
        data,
        columnId: sortColumn,
        direction: sortDirection,
        columnType:
          columns[sortColumn].type || (typeof data[0][sortColumn] === "number" ? columnTypes.NUMBER : columnTypes.TEXT),
        momentParsingFormat: columns[sortColumn].momentParsingFormat,
      });
    }

    if (filters.length > 0) {
      filteredData = data.filter(row => {
        // checking if filter.rule exist, will removed after having all the rules
        const tester = filter =>
          filter.rule ? filterTesters[filter.rule](row[filter.columnId], filter.value, columns[filter.columnId]) : true;

        switch (logicalFilterOperator) {
          case logicalFilterOperators.AND:
            return filters.every(tester);
          case logicalFilterOperators.OR:
            return filters.some(tester);
          default:
            return true;
        }
      });
    }

    if (sortedData.length === 0 && filters.length === 0) return data;

    if (sortedData.length > 0 && filteredData.length > 0)
      return sortedData.filter(row => filteredData.find(filteredRow => row[keygen] === filteredRow[keygen]));

    return sortedData.length > 0 ? sortedData : filteredData;
  }

  const result = React.useMemo(calculateResult, [
    data,
    columns,
    filters,
    sortColumn,
    sortDirection,
    keygen,
    logicalFilterOperator,
  ]);

  return result;
}

TableProvider.propTypes = {
  children: PropTypes.node.isRequired,
  isControlled: PropTypes.bool.isRequired,
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

export { TableProvider, useDataTableState, useDispatch, useData };
