import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import ArrowDown from "@paprika/icon/lib/ArrowDown";
import { sortDirections } from "../../constants";
import SortOption from "./SortOption";

export default function Options(props) {
  const { sortDirections, id, type, parsingFormat } = props;

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
              parsingFormat={parsingFormat}
            />
          ))
        : null}
    </DropdownMenu>
  );
}

Options.propTypes = {
  id: PropTypes.string.isRequired,
  sortDirections: PropTypes.arrayOf(PropTypes.oneOf([sortDirections.ASCEND, sortDirections.DESCEND])),
  type: PropTypes.oneOf(["TEXT", "NUMBER", "DATE"]),
  parsingFormat: PropTypes.string,
};

Options.defaultProps = {
  sortDirections: [],
  type: null,
  parsingFormat: null,
};
