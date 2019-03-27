import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox/Checkbox";
import useListBox from "../../store/useListBox";

const propTypes = {
  index: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  renderChecker: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

const defaultProps = {
  renderChecker: null,
};

export default function Checkers(props) {
  const [state, dispatch] = useListBox();
  const { index, isChecked, renderChecker } = props;

  if (typeof renderChecker === "function") {
    if (renderChecker) {
      return props.renderChecker(isChecked, index, state, dispatch);
    }

    return null;
  }

  if (state.isMulti) {
    return <Checkbox isChecked={isChecked} />;
  }

  return null;
}

Checkers.propTypes = propTypes;
Checkers.defaultProps = defaultProps;
