import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import { sortDirections } from "../../../../constants";

import { useDataTableState, useDispatch } from "../../../..";
import getColumnType from "../../../../helpers/getColumnType";

const propTypes = {
  columnId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  direction: PropTypes.oneOf([sortDirections.ASCEND, sortDirections.DESCEND]).isRequired,
  momentParsingFormat: PropTypes.string,
};

const defaultProps = {
  momentParsingFormat: null,
};

export default function SortTrigger(props) {
  const { columnId, direction, momentParsingFormat } = props;
  const dispatch = useDispatch();
  const { data, columns } = useDataTableState();

  function handleSort() {
    dispatch({
      type: "SORT",
      payload: { columnId, direction, columnType: getColumnType(data, columns, columnId), momentParsingFormat },
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
