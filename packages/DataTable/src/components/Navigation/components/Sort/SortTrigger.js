import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import { actions, sortDirections } from "../../../../constants";

import { useDispatch } from "../../../..";

const propTypes = {
  columnId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  direction: PropTypes.oneOf([sortDirections.ASCEND, sortDirections.DESCEND]).isRequired,
  columnType: PropTypes.string,
  parsingFormat: PropTypes.string,
};

const defaultProps = {
  columnType: null,
  parsingFormat: null,
};

export default function SortTrigger(props) {
  const { columnId, direction, columnType, parsingFormat } = props;
  const dispatch = useDispatch();

  function handleSort() {
    dispatch({ type: actions.SORT, payload: { columnId, direction, columnType, parsingFormat } });
  }

  return (
    <Button key={direction} onClick={handleSort} kind="minor">
      {direction}
    </Button>
  );
}

SortTrigger.propTypes = propTypes;
SortTrigger.defaultProps = defaultProps;
