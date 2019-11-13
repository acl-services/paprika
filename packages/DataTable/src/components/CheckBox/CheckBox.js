import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  indexRowOnMouseEnter: PropTypes.number,
  onChange: PropTypes.func,
  index: PropTypes.number.isRequired,
};
const defaultProps = {
  onChange: () => {},
  indexRowOnMouseEnter: null,
};

export default function CheckBox(props) {
  const { indexRowOnMouseEnter, onChange, index } = props;
  return (
    <>
      {indexRowOnMouseEnter === index ? (
        <span>
          <input onChange={onChange} type="checkbox" />
        </span>
      ) : (
        <span>{index + 1}</span>
      )}
    </>
  );
}

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;
