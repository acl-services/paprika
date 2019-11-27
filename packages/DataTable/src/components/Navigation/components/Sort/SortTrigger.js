import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import { sortDirections, columnTypes } from "../../../../constants";

import { useDataTableState, useDispatch } from "../../../..";

const propTypes = {
  columnId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  direction: PropTypes.oneOf([sortDirections.ASCEND, sortDirections.DESCEND]).isRequired,
  columnType: PropTypes.string,
  momentParsingFormat: PropTypes.string,
};

const defaultProps = {
  columnType: null,
  momentParsingFormat: null,
};

export default function SortTrigger(props) {
  const { columnId, direction, columnType, momentParsingFormat } = props;
  const dispatch = useDispatch();
  const { data } = useDataTableState();

  function getColumnType() {
    return columnType || (typeof data[0][columnId] === "number" ? columnTypes.NUMBER : columnTypes.TEXT);
  }

  function handleSort() {
    dispatch({
      type: "SORT",
      payload: { columnId, direction, columnType: getColumnType(), momentParsingFormat },
    });
  }

  return (
    <Button key={direction} onClick={handleSort} kind="minor">
      {direction}
    </Button>
  );
}

SortTrigger.propTypes = propTypes;
SortTrigger.defaultProps = defaultProps;
