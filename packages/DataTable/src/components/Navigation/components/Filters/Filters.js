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
  const { filters, logicalFilterOperator } = useDataTableState();
  const dispatch = useDispatch();

  function handleAddFilter() {
    dispatch({ type: "ADD_FILTER" });
  }

  function handleClickCondition(e) {
    dispatch({ type: "UPDATE_LOGICAL_FILTER_OPERATOR", payload: e.target.value });
  }

  console.log(filters);

  return (
    <Popover align="bottom" edge="left" maxWidth={1200}>
      <Popover.Trigger>Filters</Popover.Trigger>
      <Popover.Content>
        <Popover.Card>
          <FiltersPanelStyled>
            <input
              type="radio"
              name="condition"
              value={logicalFilterOperators.AND}
              defaultChecked={logicalFilterOperator === logicalFilterOperators.AND}
              onChange={handleClickCondition}
            />
            And
            <input
              type="radio"
              name="condition"
              value={logicalFilterOperators.OR}
              defaultChecked={logicalFilterOperator === logicalFilterOperators.OR}
              onChange={handleClickCondition}
            />
            Or
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
            columnId: action.changes.columnsOrder[0],
            rule: rulesByType[getColumnType([action.changes.columnsOrder[0]])][0],
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
