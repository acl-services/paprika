import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import { useDataTableState, useDispatch } from "../../context";
import getColumnType from "../../helpers/getColumnType";

export default function SortOption(props) {
  const { direction, columnId, momentParsingFormat } = props;
  const dispatch = useDispatch();
  const { data, columns } = useDataTableState();

  function handleSortBy() {
    dispatch({
      type: "SORT",
      payload: { columnId, direction, columnType: getColumnType(data, columns, columnId), momentParsingFormat },
    });
  }

  return <DropdownMenu.Item onClick={handleSortBy}>{`Sort by ${direction}`}</DropdownMenu.Item>;
}

SortOption.propTypes = {
  columnId: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  momentParsingFormat: PropTypes.string,
};

SortOption.defaultProps = {
  momentParsingFormat: null,
};
