import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox/Checkbox";
import useStore from "../../store/useStore";

const propTypes = {
  index: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  isOptionActionGroup: PropTypes.bool,
  renderChecker: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

const defaultProps = {
  isOptionActionGroup: false,
  renderChecker: null,
};

export default function Checkers(props) {
  const [state, dispatch] = useStore();
  const { index, isOptionActionGroup, isChecked, renderChecker } = props;

  if (typeof renderChecker === "function") {
    if (renderChecker) {
      return props.renderChecker(isChecked, index, state, dispatch, isOptionActionGroup);
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
