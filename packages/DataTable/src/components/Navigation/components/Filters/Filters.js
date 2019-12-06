/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Popover from "@paprika/popover";
import Button from "@paprika/button";
import nanoid from "nanoid";
import { useDataTableState, useDispatch } from "../../../..";
import FilterItem from "./FilterItem";
import { rulesByType } from "./rules";
import { FiltersPanelStyled } from "./Filters.styles";
import { columnTypes, logicalFilterOperators } from "../../../../constants";

export default function Filters() {
  const { filters, logicalFilterOperator, columnsOrder } = useDataTableState();
  const dispatch = useDispatch();

  function handleAddFilter() {
    dispatch({ type: "ADD_FILTER", payload: columnsOrder[0] });
  }

  function handleClickCondition(e) {
    dispatch({ type: "UPDATE_LOGICAL_FILTER_OPERATOR", payload: e.target.value });
  }

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
                defaultChecked={logicalFilterOperator === logicalFilterOperators.AND}
                onChange={handleClickCondition}
              />
              <label htmlFor={logicalFilterOperators.AND}>And</label>
              <input
                type="radio"
                name="condition"
                value={logicalFilterOperators.OR}
                defaultChecked={logicalFilterOperator === logicalFilterOperators.OR}
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
  function getColumnType(columnId) {
    return (
      action.changes.columns[columnId].type ||
      (typeof action.changes.data[0][columnId] === "number" ? columnTypes.NUMBER : columnTypes.TEXT)
    );
  }

  switch (action.type) {
    case "ADD_FILTER": {
      return {
        ...action.changes,
        filters: [
          ...action.changes.filters,
          {
            id: `FILTER_ID__${nanoid()}`,
            columnId: action.payload,
            rule: rulesByType[getColumnType([action.payload])][0],
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
      const newFilters = [...action.changes.filters];
      newFilters.find(filter => filter.id === action.payload.id)[action.payload.attribute] = action.payload.value;
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
    default:
      return action.changes;
  }
};
