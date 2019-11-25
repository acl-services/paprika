import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import sort from "../../../../helpers/sort";
import { actions } from "../../../../constants";
import { useDataTableState } from "../../../..";
import SortTrigger from "./SortTrigger";

const propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    })
  ),
};

const defaultProps = {
  columns: [],
};

const noop = () => {};

export default function Sort(props) {
  const { sortColumn, sortDirection } = useDataTableState();
  const { columns } = props;
  const hasSortDirections = columns.find(({ sortDirections }) => sortDirections && sortDirections.length > 0);

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
      {columns.map(({ id: columnId, header, sortDirections, parsingFormat }) => {
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
                  columnType={columns.find(column => columnId === column.id).type}
                  parsingFormat={parsingFormat}
                />
              ))}
          </DropdownMenu.Item>
        );
      })}
    </DropdownMenu>
  );
}

Sort.propTypes = propTypes;
Sort.defaultProps = defaultProps;

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
        columnType: action.payload.columnType,
        parsingFormat: action.payload.parsingFormat,
      }).map(item => item[state.keygen]),
    };

  return action.changes;
};
