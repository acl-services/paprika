import React from "react";
import Popover from "@paprika/popover";
import Button from "@paprika/button";
import uuid from "uuid/v4";
import { useDataTableState, useDispatch } from "../../../..";
import FilterItem from "./FilterItem";

export default function Filters() {
  const { columns, columnsOrder, filters } = useDataTableState();
  const dispatch = useDispatch();

  function handleAddFilter() {
    dispatch({ type: "ADD_FILTER" });
  }

  return (
    <Popover align="bottom">
      <Popover.Trigger>Filters</Popover.Trigger>
      <Popover.Content>
        <Popover.Card>
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
            id: uuid(),
            columnId: action.changes.columnsOrder[0],
            rule: "is",
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
    default:
      return action.changes;
  }
};
