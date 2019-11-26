import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import { actions } from "../../constants";
import { useDispatch } from "../../context";

export default function SortOption(props) {
  const { direction, columnId, columnType, momentParsingFormat } = props;
  const dispatch = useDispatch();

  function handleSortBy() {
    dispatch({ type: actions.SORT, payload: { columnId, direction, columnType, momentParsingFormat } });
  }

  return <DropdownMenu.Item onClick={handleSortBy}>{`Sort by ${direction}`}</DropdownMenu.Item>;
}

SortOption.propTypes = {
  columnId: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  columnType: PropTypes.string,
  momentParsingFormat: PropTypes.string,
};

SortOption.defaultProps = {
  columnType: null,
  momentParsingFormat: null,
};
