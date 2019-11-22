import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import ArrowDown from "@paprika/icon/lib/ArrowDown";
import { sortDirections } from "../../constants";
import SortOption from "./SortOption";

export default function Options(props) {
  const { sortDirections, columnId } = props;

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
        ? sortDirections.map(direction => <SortOption key={direction} columnId={columnId} direction={direction} />)
        : null}
    </DropdownMenu>
  );
}

Options.propTypes = {
  columnId: PropTypes.string.isRequired,
  sortDirections: PropTypes.arrayOf(PropTypes.oneOf([sortDirections.ASCEND, sortDirections.DESCEND])),
};

Options.defaultProps = {
  sortDirections: [],
};
