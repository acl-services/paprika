import React from "react";
import Popover from "@paprika/popover";
import Sortable from "@paprika/sortable";
import { useDataTableState, useDispatch } from "../../../..";
import ColumnManagingItem from "./ColumnManagingItem";
import { plugins } from "../../../../constants";

export default function ColumnManaging() {
  const { columnsOrder } = useDataTableState();
  const dispatch = useDispatch();

  const handleChangeOrder = result => {
    const { source, destination } = result;

    if (destination === null || source === destination) return;

    const newOrder = [...columnsOrder];
    const movedChild = newOrder.splice(source, 1);
    newOrder.splice(destination, 0, ...movedChild);

    dispatch({ type: "REORDER__COLUMNS", payload: newOrder });
  };

  return (
    <Popover align="bottom">
      <Popover.Trigger>Show/hide column</Popover.Trigger>
      <Popover.Content>
        <Popover.Card>
          <Sortable onChange={handleChangeOrder}>
            {columnsOrder.map(columnId => (
              <Sortable.Item key={columnId} sortId={columnId}>
                <ColumnManagingItem key={columnId} columnId={columnId} />
              </Sortable.Item>
            ))}
          </Sortable>
        </Popover.Card>
      </Popover.Content>
    </Popover>
  );
}

ColumnManaging.reducer = (state, action) => {
  if (action.type === "TOGGLE_COLUMN") {
    const columns = action.changes.columns;
    const newColumn = {
      ...columns[action.payload],
      isHidden: !columns[action.payload].isHidden,
    };
    return {
      ...action.changes,
      columns: {
        ...columns,
        [action.payload]: newColumn,
      },
    };
  }

  if (action.type === "REORDER__COLUMNS") {
    return {
      ...action.changes,
      columnsOrder: action.payload,
    };
  }

  return action.changes;
};

ColumnManaging.displayName = plugins.COLUMN_MANAGING;
