import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import { sortDirections } from "../../../../constants";

import { useDataTableState, useDispatch } from "../../../..";

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
  const { columns } = useDataTableState();

  function handleSort() {
    dispatch({
      type: "SORT",
      payload: { columnId, direction, columnType: columns[columnId].type, momentParsingFormat },
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
