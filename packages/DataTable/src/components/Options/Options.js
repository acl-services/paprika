/* eslint-disable react/jsx-indent */
import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import ArrowDown from "@paprika/icon/lib/ArrowDown";
import useSort from "../../hooks/useSort";
import { sortDirections } from "../../constants";

export default function Options(props) {
  const { sortDirections, columnId } = props;
  const sort = useSort();

  function handleSortBy(direction) {
    return () => {
      sort(columnId, direction);
    };
  }

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
            <DropdownMenu.Item key={direction} onClick={handleSortBy(direction)}>
              {`Sort by ${direction}`}
            </DropdownMenu.Item>
          ))
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
