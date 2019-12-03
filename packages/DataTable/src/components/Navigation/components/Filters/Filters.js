import React from "react";
import Popover from "@paprika/popover";
import Button from "@paprika/button";
import nanoid from "nanoid";
import { useDataTableState, useDispatch } from "../../../..";
import FilterItem from "./FilterItem";
import rules from "./rules";

export default function Filters() {
  const { filters, logicalFilterOperator } = useDataTableState();
  const dispatch = useDispatch();

  function handleAddFilter() {
    dispatch({ type: "ADD_FILTER" });
  }

  function handleClickCondition(e) {
    dispatch({ type: "UPDATE_LOGICAL_FILTER_OPERATOR", payload: e.target.value });
  }

  return (
    <Popover align="bottom" edge="left" isOpen onClose={() => {}} maxWidth={1200}>
      <Popover.Trigger>Filters</Popover.Trigger>
      <Popover.Content>
        <Popover.Card>
          <input
            type="radio"
            name="condition"
            value="and"
            checked={logicalFilterOperator === "and"}
            onClick={handleClickCondition}
          />
          And
          <input
            type="radio"
            name="condition"
            value="or"
            checked={logicalFilterOperator === "or"}
            onClick={handleClickCondition}
          />
          Or
          {filters.map(filter => (
            <FilterItem key={filter.id} {...filter} />
          ))}
          <Button onClick={handleAddFilter} kind="minor">
            + Add filter
          </Button>
        </Popover.Card>
      </Popover.Content>
    </Popover>
  );
}

Filters.reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FILTER": {
      return {
        ...action.changes,
        filters: [
          ...action.changes.filters,
          {
            id: `FILTER_ID__${nanoid()}`,
            columnId: action.changes.columnsOrder[0],
            rule: rules[action.changes.columns[action.changes.columnsOrder[0]].type][0],
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
