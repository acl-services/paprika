import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import { size } from "@paprika/helpers/lib/types";

import { useDispatch, useDataTableState } from "../..";
import { plugins } from "../../constants";

const propTypes = {
  defaultHeight: PropTypes.oneOf([size.XSMALL, size.SMALL, size.MEDIUM, size.LARGE]),
};

const defaultProps = {
  defaultHeight: size.XSMALL,
};

function getIndexByValue(value, values) {
  return values.indexOf(values.find(item => item === value));
}

function getNextIndex(index, values) {
  if (index + 1 >= values.length) {
    return 0;
  }

  return index + 1;
}

export default function RowHeight(props) {
  const dispatch = useDispatch();
  const state = useDataTableState();
  const values = [size.XSMALL, size.SMALL, size.MEDIUM, size.LARGE];
  const heights = {
    [size.XSMALL]: 32,
    [size.SMALL]: 55,
    [size.MEDIUM]: 87,
    [size.LARGE]: 127,
  };

  // just want to fire this the first time
  React.useEffect(() => {
    if (typeof state.rowHeight === "undefined" || state.rowHeight === null) {
      const index = getIndexByValue(props.defaultHeight, values);
      dispatch({ type: "ROW_HEIGHT", payload: { index: 0, value: heights[values[index]] } || 0 });
    }
  }, []); // eslint-disable-line

  const handleClick = () => {
    const nextIndex = getNextIndex(state.rowHeight.index, values);
    dispatch({ type: "ROW_HEIGHT", payload: { index: nextIndex, value: heights[values[nextIndex]] } });
  };

  return (
    <RawButton a11yText="L10n: Change row height" onClick={handleClick}>
      Row height
    </RawButton>
  );
}

RowHeight.propTypes = propTypes;
RowHeight.defaultProps = defaultProps;
RowHeight.displayName = plugins.ROW_HEIGHT;

RowHeight.reducer = (state, action) => {
  if (action.type === "ROW_HEIGHT") {
    return { ...action.changes, rowHeight: action.payload };
  }
  return action.changes;
};
