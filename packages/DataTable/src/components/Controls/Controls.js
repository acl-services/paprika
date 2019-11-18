import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import DropdownMenu from "@paprika/dropdown-menu";
import { useTableState } from "../../context";
import useSort from "../../hooks/useSort";

export default function Controls(props) {
  const { ColumnsDefinition, onSort } = props;
  const sort = useSort();
  const { sortColumn, sortDirection } = useTableState();
  const hasSortDirections = ColumnsDefinition.find(
    ({ props: columnProp }) => columnProp.sortDirections && columnProp.sortDirections.length > 0
  );

  function handleSort(columnId, direction) {
    return () => {
      const hasBackendSort = !!onSort;
      sort(columnId, direction, hasBackendSort);
      if (onSort) onSort(columnId, direction);
    };
  }

  function renderSortingDropdown() {
    return (
      <DropdownMenu
        align="bottom"
        renderTrigger={({ isOpen, handleOpenMenu }) => (
          <DropdownMenu.Trigger isOpen={isOpen} onOpenMenu={handleOpenMenu}>
            {sortColumn && sortDirection ? `Sort ${sortColumn} by ${sortDirection}` : "Sort"}
          </DropdownMenu.Trigger>
        )}
      >
        {ColumnsDefinition.map(({ props: columnProp }) => (
          <DropdownMenu.Item key={columnProp.id} onClick={() => {}}>
            Sort {columnProp.header} by
            {columnProp.sortDirections &&
              columnProp.sortDirections.map(direction => (
                <Button key={direction} onClick={handleSort(columnProp.id, direction)} kind="minor">
                  {direction}
                </Button>
              ))}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu>
    );
  }

  return <React.Fragment>{hasSortDirections ? renderSortingDropdown() : null}</React.Fragment>;
}

Controls.propTypes = {
  ColumnsDefinition: PropTypes.arrayOf(
    PropTypes.shape({
      props: PropTypes.object.isRequired,
      type: PropTypes.func.isRequired,
    })
  ),
  onSort: PropTypes.func,
};

Controls.defaultProps = {
  ColumnsDefinition: [],
  onSort: null,
};
