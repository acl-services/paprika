import React from "react";
import DropdownMenu from "@paprika/dropdown-menu";
import { useDataTableState } from "../../../..";
import SortTrigger from "./SortTrigger";

const noop = () => {};

export default function Sort() {
  const { sortColumn, sortDirection, columns, columnsOrder } = useDataTableState();
  const hasSortDirections = !!columnsOrder.find(
    columnId => columns[columnId].sortDirections && columns[columnId].sortDirections.length > 0
  );

  if (!hasSortDirections) return null;

  return (
    <DropdownMenu
      align="bottom"
      renderTrigger={({ isOpen, handleOpenMenu }) => (
        <DropdownMenu.Trigger isOpen={isOpen} onOpenMenu={handleOpenMenu}>
          {sortColumn && sortDirection ? `Sort ${sortColumn} by ${sortDirection}` : "Sort"}
        </DropdownMenu.Trigger>
      )}
    >
      {columnsOrder.map(columnId => {
        const { header, sortDirections, momentParsingFormat } = columns[columnId];
        if (!sortDirections || sortDirections.length === 0) return null;

        return (
          <DropdownMenu.Item key={columnId} onClick={noop}>
            Sort {header} by
            {sortDirections &&
              sortDirections.map(direction => (
                <SortTrigger
                  key={direction}
                  columnId={columnId}
                  direction={direction}
                  momentParsingFormat={momentParsingFormat}
                />
              ))}
          </DropdownMenu.Item>
        );
      })}
    </DropdownMenu>
  );
}

Sort.reducer = (state, action) => {
  if (action.type === "SORT")
    return {
      ...action.changes,
      sortColumn: action.payload.columnId,
      sortDirection: action.payload.direction,
    };

  return action.changes;
};
