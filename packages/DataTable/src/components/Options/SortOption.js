import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import { columnTypes } from "../../constants";
import { useDataTableState, useDispatch } from "../../context";

export default function SortOption(props) {
  const { direction, columnId, columnType, momentParsingFormat } = props;
  const dispatch = useDispatch();
  const { data } = useDataTableState();

  function getColumnType() {
    return columnType || (typeof data[0][columnId] === "number" ? columnTypes.NUMBER : columnTypes.TEXT);
  }

  function handleSortBy() {
    dispatch({
      type: "SORT",
      payload: { columnId, direction, columnType: getColumnType(), momentParsingFormat },
    });
  }

  return <DropdownMenu.Item onClick={handleSortBy}>{`Sort by ${direction}`}</DropdownMenu.Item>;
}

SortOption.propTypes = {
  columnId: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  columnType: PropTypes.oneOf([columnTypes.TEXT, columnTypes.NUMBER, columnTypes.DATE]),
  momentParsingFormat: PropTypes.string,
};

SortOption.defaultProps = {
  columnType: null,
  momentParsingFormat: null,
};
