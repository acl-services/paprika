import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox/Checkbox";
import useListBox from "../../useListBox";

const propTypes = {
  index: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  renderCheckbox: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  hasPreventDefaultOnSelect: PropTypes.bool,
};

const defaultProps = {
  renderCheckbox: null,
  hasPreventDefaultOnSelect: false,
};

export default function Checkers(props) {
  const [state, dispatch] = useListBox();
  const { index, isChecked, renderCheckbox } = props;

  if (typeof renderCheckbox === "function") {
    return props.renderCheckbox(isChecked, index, state, dispatch);
  }

  if (props.hasPreventDefaultOnSelect) {
    return null;
  }

  if (state.isMulti) {
    return <Checkbox isChecked={isChecked} />;
  }

  return null;
}

Checkers.propTypes = propTypes;
Checkers.defaultProps = defaultProps;
