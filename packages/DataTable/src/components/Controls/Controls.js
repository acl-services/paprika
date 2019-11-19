import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import DropdownMenu from "@paprika/dropdown-menu";
import { useTableState } from "../../context";
import useSort from "../../hooks/useSort";

const noop = () => {};

export default function Controls(props) {
  const { ColumnsDefinition } = props;
  const sort = useSort();
  const { sortColumn, sortDirection } = useTableState();
  const hasSortDirections = ColumnsDefinition.find(
    ({ props: columnProp }) => columnProp.sortDirections && columnProp.sortDirections.length > 0
  );

  function handleSort(columnId, direction) {
    return () => sort(columnId, direction);
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
        {ColumnsDefinition.map(({ props: columnProp }) => {
          const { id: columnId, header, sortDirections } = columnProp;

          if (!sortDirections || sortDirections.length === 0) return null;

          return (
            <DropdownMenu.Item key={columnId} onClick={noop}>
              Sort {header} by
              {sortDirections &&
                sortDirections.map(direction => (
                  <Button key={direction} onClick={handleSort(columnId, direction)} kind="minor">
                    {direction}
                  </Button>
                ))}
            </DropdownMenu.Item>
          );
        })}
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
};

Controls.defaultProps = {
  ColumnsDefinition: [],
};
