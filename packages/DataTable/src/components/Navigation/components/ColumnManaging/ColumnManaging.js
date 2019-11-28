import React from "react";
import DropdownMenu from "@paprika/dropdown-menu";
import { useDataTableState } from "../../../..";
import ColumnManagingItem from "./ColumnManagingItem";

export default function ColumnManaging() {
  const { columns, columnsOrder } = useDataTableState();

  return (
    <DropdownMenu
      align="bottom"
      renderTrigger={({ isOpen, handleOpenMenu }) => (
        <DropdownMenu.Trigger isOpen={isOpen} onOpenMenu={handleOpenMenu}>
          Show/hide column
        </DropdownMenu.Trigger>
      )}
    >
      {columnsOrder.map(columnId => {
        const { header, canHide } = columns[columnId];
        if (!canHide) return null;

        return <ColumnManagingItem key={columnId} header={header} columnId={columnId} />;
      })}
    </DropdownMenu>
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

  return action.changes;
};
