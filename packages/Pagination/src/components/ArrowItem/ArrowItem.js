import React from "react";
import PropTypes from "prop-types";
import * as sc from "./ArrowItem.styles";

const propTypes = {
  /* Description of the ArrowItem for assistive technology */
  a11yText: PropTypes.string,

  /** To set the ArrowItem as disabled */
  isDisabled: PropTypes.bool,

  /** Callback to be executed when the ArrowItem is clicked or activated by keyboard. */
  onClick: PropTypes.func,

  /** What type of arrow to display */
  type: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
  isDisabled: false,
  onClick: () => {},
  type: "right",
};

function ArrowItem(props) {
  const { a11yText, isDisabled, onClick, type } = props;

  return (
    <sc.ArrowItem aria-label={a11yText} isDisabled={isDisabled} onClick={onClick}>
      <sc.ArrowItemIcon size={14} type={`Arrow-${type}`} />
    </sc.ArrowItem>
  );
}

ArrowItem.defaultProps = defaultProps;
ArrowItem.displayName = "Pagination.ArrowItem";
ArrowItem.propTypes = propTypes;

export default ArrowItem;
