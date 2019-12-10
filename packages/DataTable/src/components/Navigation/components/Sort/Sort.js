import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import { useDataTableState } from "../../../..";
import SortTrigger from "./SortTrigger";

const propTypes = {
  onSort: PropTypes.func,
};

const defaultProps = {
  onSort: null,
};

const noop = () => {};

export default function Sort(props) {
  const { onSort } = props;
  const { sortColumn, sortDirection, columns, columnsOrder } = useDataTableState();
  const hasSortDirections = !!columnsOrder.find(
    columnId => columns[columnId].sortDirections && columns[columnId].sortDirections.length > 0
  );
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else if (onSort) {
      onSort({ columnId: sortColumn, direction: sortDirection });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortColumn, sortDirection]);

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

Sort.propTypes = propTypes;
Sort.defaultProps = defaultProps;
