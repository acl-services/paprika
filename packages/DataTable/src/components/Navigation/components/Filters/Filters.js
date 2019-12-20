/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import Popover from "@paprika/popover";
import Button from "@paprika/button";
import { useDataTableState, useDispatch } from "../../../..";
import FilterItem from "./FilterItem";
import { rulesByType } from "./rules";
import { FiltersPanelStyled } from "./Filters.styles";
import { logicalFilterOperators, plugins } from "../../../../constants";
import { useLocalStorage } from "../../../../context";
import useIsUpdated from "../../../../hooks/useIsUpdated";

const propTypes = {
  onFilter: PropTypes.func,
  defaultFilters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      columnId: PropTypes.string.isRequired,
      rule: PropTypes.string.isRequired,
      value: PropTypes.string,
    })
  ),
  defaultLogicalFilterOperator: PropTypes.string,
};

const defaultProps = {
  onFilter: null,
  defaultFilters: null,
  defaultLogicalFilterOperator: null,
};

export default function Filters(props) {
  const { onFilter, defaultFilters, defaultLogicalFilterOperator } = props;
  const { filters, logicalFilterOperator, columnsOrder, columns } = useDataTableState();
  const dispatch = useDispatch();
  const updateLocalStorage = useLocalStorage();
  const isFiltersUpdated = useIsUpdated(filters);
  const isLogicalFilterOperatorUpdated = useIsUpdated(logicalFilterOperator);
  const defaultCheckedOperator = defaultLogicalFilterOperator || logicalFilterOperator;

  function handleAddFilter() {
    dispatch({ type: "ADD_FILTER", payload: columnsOrder.find(columnId => columns[columnId].canFilter) });
  }

  function handleClickCondition(e) {
    dispatch({ type: "UPDATE_LOGICAL_FILTER_OPERATOR", payload: e.target.value });
  }

  React.useEffect(() => {
    if (defaultFilters || defaultLogicalFilterOperator) {
      dispatch({
        type: "RESET_FILTERS",
        payload: {
          filters: defaultFilters || [],
          logicalFilterOperator: defaultLogicalFilterOperator,
        },
      });
    }
    // Only runs for first time
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (!isFiltersUpdated && !isLogicalFilterOperatorUpdated) return;

    if (onFilter) onFilter(filters, logicalFilterOperator, columns);
    updateLocalStorage({ filters, logicalFilterOperator });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, logicalFilterOperator]);

  return (
    <Popover align="bottom" edge="left" isOpen maxWidth={1200}>
      <Popover.Trigger>Filters</Popover.Trigger>
      <Popover.Content>
        <Popover.Card>
          <FiltersPanelStyled>
            <fieldset>
              <legend>Condition: </legend>
              <input
                type="radio"
                name="condition"
                value={logicalFilterOperators.AND}
                defaultChecked={defaultCheckedOperator === logicalFilterOperators.AND}
                onChange={handleClickCondition}
              />
              <label htmlFor={logicalFilterOperators.AND}>And</label>
              <input
                type="radio"
                name="condition"
                value={logicalFilterOperators.OR}
                defaultChecked={defaultCheckedOperator === logicalFilterOperators.OR}
                onChange={handleClickCondition}
              />
              <label htmlFor={logicalFilterOperators.OR}>Or</label>
            </fieldset>

            {filters.map(filter => (
              <FilterItem key={filter.id} {...filter} />
            ))}
            <Button onClick={handleAddFilter} kind="minor">
              + Add filter
            </Button>
          </FiltersPanelStyled>
        </Popover.Card>
      </Popover.Content>
    </Popover>
  );
}

Filters.reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FILTER": {
      const columnId = action.payload;
      return {
        ...action.changes,
        filters: [
          ...action.changes.filters,
          {
            id: `FILTER_ID__${nanoid()}`,
            columnId,
            rule: rulesByType[action.changes.columns[columnId].type][0],
            value: "",
          },
        ],
      };
    }
    case "REMOVE_FILTER": {
      const newFilters = action.changes.filters.filter(filter => filter.id !== action.payload);
      return {
        ...action.changes,
        filters: newFilters,
      };
    }
    case "UPDATE_FILTER": {
      const newFilters = action.changes.filters.map(filter => {
        if (filter.id === action.payload.id) {
          return {
            ...filter,
            ...action.payload.changes,
          };
        }
        return filter;
      });
      return {
        ...action.changes,
        filters: newFilters,
      };
    }
    case "UPDATE_LOGICAL_FILTER_OPERATOR": {
      return {
        ...action.changes,
        logicalFilterOperator: action.payload,
      };
    }
    case "RESET_FILTERS": {
      return {
        ...action.changes,
        logicalFilterOperator: action.payload.logicalFilterOperator,
        filters: action.payload.filters,
      };
    }
    default:
      return action.changes;
  }
};

Filters.propTypes = propTypes;
Filters.defaultProps = defaultProps;
Filters.displayName = plugins.FILTERS;
