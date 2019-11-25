import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import { actions, sortDirections } from "../../../../constants";

import { useDispatch } from "../../../..";

const propTypes = {
  columnId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  direction: PropTypes.oneOf([sortDirections.ASCEND, sortDirections.DESCEND]).isRequired,
  columnType: PropTypes.string.isRequired,
};

export default function SortTrigger(props) {
  const { columnId, direction, columnType } = props;
  const dispatch = useDispatch();

  function handleSort() {
    dispatch({ type: actions.SORT, payload: { columnId, direction, columnType } });
  }

  return (
    <Button key={direction} onClick={handleSort} kind="minor">
      {direction}
    </Button>
  );
}

SortTrigger.propTypes = propTypes;
