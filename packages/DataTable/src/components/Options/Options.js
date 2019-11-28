import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import ArrowDown from "@paprika/icon/lib/ArrowDown";
import SortOption from "./SortOption";
import { useDispatch, useDataTableState } from "../../context";

export default function Options(props) {
  const { columnId } = props;
  const dispatch = useDispatch();
  const { sortDirections, type, momentParsingFormat, canHide } = useDataTableState().columns[columnId];

  // TODO: Checking if need to show options icon, later we need to check filtering rules..
  const hasOptions = canHide || (sortDirections && sortDirections.length > 0);
  if (!hasOptions) return null;

  return (
    <DropdownMenu
      align="bottom"
      renderTrigger={({ isOpen, handleOpenMenu }) => (
        <DropdownMenu.Trigger
          isOpen={isOpen}
          onOpenMenu={handleOpenMenu}
          icon={<ArrowDown />}
          kind="minor"
          size="small"
        />
      )}
    >
      {sortDirections
        ? sortDirections.map(direction => (
            <SortOption
              key={direction}
              columnId={columnId}
              direction={direction}
              columnType={type}
              momentParsingFormat={momentParsingFormat}
            />
          ))
        : null}
      {canHide ? (
        <DropdownMenu.Item
          onClick={() => {
            dispatch({ type: "TOGGLE_COLUMN", payload: columnId });
          }}
        >
          Hide this column
        </DropdownMenu.Item>
      ) : null}
    </DropdownMenu>
  );
}

Options.propTypes = {
  columnId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Options.defaultProps = {};
