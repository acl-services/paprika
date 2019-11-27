import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import ArrowDown from "@paprika/icon/lib/ArrowDown";
import { sortDirections, columnTypes } from "../../constants";
import SortOption from "./SortOption";
import { useDispatch } from "../../context";

export default function Options(props) {
  const { sortDirections, id, type, momentParsingFormat, canHide } = props;
  const dispatch = useDispatch();

  // TODO: Checking if need to show options icon, later we need to check filtering rules..
  if (!sortDirections || sortDirections.length === 0) return null;

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
              columnId={id}
              direction={direction}
              columnType={type}
              momentParsingFormat={momentParsingFormat}
            />
          ))
        : null}
      {canHide ? (
        <DropdownMenu.Item
          onClick={() => {
            dispatch({ type: "TOGGLE_COLUMN", payload: id });
          }}
        >
          Hide this column
        </DropdownMenu.Item>
      ) : null}
    </DropdownMenu>
  );
}

Options.propTypes = {
  id: PropTypes.string.isRequired,
  sortDirections: PropTypes.arrayOf(PropTypes.oneOf([sortDirections.ASCEND, sortDirections.DESCEND])).isRequired,
  type: PropTypes.oneOf([columnTypes.TEXT, columnTypes.NUMBER, columnTypes.DATE]),
  momentParsingFormat: PropTypes.string,
};

Options.defaultProps = {
  type: null,
  momentParsingFormat: null,
};
