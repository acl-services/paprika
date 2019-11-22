import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import DropdownMenu from "@paprika/dropdown-menu";
import sort from "../../../../helpers/sort";
import { actions } from "../../../../constants";

import { useDispatch, useDataTableState } from "../../../..";

const propTypes = {
  ColumnsDefinition: PropTypes.arrayOf(
    PropTypes.shape({
      props: PropTypes.object.isRequired,
      type: PropTypes.func.isRequired,
    })
  ),
};
const defaultProps = { ColumnsDefinition: [] };

const noop = () => {};

export default function Sort(props) {
  const dispatch = useDispatch();
  const { sortColumn, sortDirection } = useDataTableState();
  const { ColumnsDefinition } = props;
  const hasSortDirections = ColumnsDefinition.find(
    ({ props: columnProp }) => columnProp.sortDirections && columnProp.sortDirections.length > 0
  );

  function handleSort(columnId, direction) {
    return () => dispatch({ type: actions.SORT, payload: { columnId, direction } });
  }

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

Sort.propTypes = propTypes;
Sort.defaultProps = defaultProps;
Sort.displayName = "DataTable.Navigation.Sort";

Sort.reducer = (state, action) => {
  if (action.type === actions.SORT)
    return {
      ...action.changes,
      sortColumn: action.payload.columnId,
      sortDirection: action.payload.direction,
      sortedOrder: sort({
        data: action.changes.data,
        columnId: action.payload.columnId,
        direction: action.payload.direction,
      }).map(item => item[state.keygen]),
    };

  return action.changes;
};
