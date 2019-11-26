import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import { actions, sortDirections } from "../../../../constants";

import { useDispatch } from "../../../..";

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

  function handleSort() {
    dispatch({ type: actions.SORT, payload: { columnId, direction, columnType, momentParsingFormat } });
  }

  return (
    <Button key={direction} onClick={handleSort} kind="minor">
      {direction}
    </Button>
  );
}

SortTrigger.propTypes = propTypes;
SortTrigger.defaultProps = defaultProps;
