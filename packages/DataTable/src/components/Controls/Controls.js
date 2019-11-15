import React from "react";
import PropType from "prop-types";
import Button from "@paprika/button";
import DropdownMenu from "@paprika/dropdown-menu";
import { useTableState } from "../../context";
import useSort from "../../hooks/useSort";

export default function Controls(props) {
  const { Columns, onSort } = props;
  const sort = useSort();
  const { sortColumn, sortDirection } = useTableState();

  function handleSort(columnId, direction) {
    return () => {
      sort(columnId, direction, !!onSort);
      if (onSort) onSort(columnId, direction);
    };
  }

  return (
    <React.Fragment>
      <DropdownMenu
        align="bottom"
        renderTrigger={({ isOpen, handleOpenMenu }) => (
          <DropdownMenu.Trigger isOpen={isOpen} onOpenMenu={handleOpenMenu}>
            {sortColumn && sortDirection ? `Sort ${sortColumn} by ${sortDirection}` : "Sort"}
          </DropdownMenu.Trigger>
        )}
      >
        {Columns.map(({ props: columnProp }) => {
          if (columnProp.sortDirections) {
            return (
              <DropdownMenu.Item key={columnProp.id} onClick={() => {}}>
                Sort {columnProp.header} by
                {columnProp.sortDirections.map(direction => (
                  <Button onClick={handleSort(columnProp.id, direction)} kind="minor">
                    {direction}
                  </Button>
                ))}
              </DropdownMenu.Item>
            );
          }
          return null;
        })}
      </DropdownMenu>
    </React.Fragment>
  );
}

Controls.propTypes = {
  Columns: PropType.arrayOf(PropType.func).isRequired,
  onSort: PropType.func,
};

Controls.defaultProps = {
  onSort: null,
};
