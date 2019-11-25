import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import { actions } from "../../constants";
import { useDispatch } from "../../context";

export default function SortOption(props) {
  const { direction, columnId } = props;
  const dispatch = useDispatch();

  function handleSortBy() {
    dispatch({ type: actions.SORT, payload: { columnId, direction } });
  }

  return <DropdownMenu.Item onClick={handleSortBy}>{`Sort by ${direction}`}</DropdownMenu.Item>;
}

SortOption.propTypes = {
  columnId: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};
