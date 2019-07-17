import React from "react";
import PropTypes from "prop-types";
import textContent from "react-addons-text-content";
import itemStyles from "./Item.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
};

const defaultProps = {
  isChecked: false,
  isDisabled: false,
  onChange: () => {},
};

function Item(props) {
  const { children, isChecked, isDisabled, onChange } = props;

  return (
    <div css={itemStyles} {...props}>
      <input
        aria-label={textContent(children)}
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
      />
      {children}
    </div>
  );
}

Item.displayName = "Item";
Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
