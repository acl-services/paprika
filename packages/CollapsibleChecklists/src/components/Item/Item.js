import React from "react";
import PropTypes from "prop-types";
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
  const { children, isChecked, isDisabled, onChange, ...moreProps } = props;

  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <div css={itemStyles} isDisabled={isDisabled}>
      <label>
        <input type="checkbox" checked={isChecked} disabled={isDisabled} onChange={onChange} {...moreProps} />
        {children}
      </label>
    </div>
  );
  /* eslint-enable jsx-a11y/label-has-associated-control */
}

Item.displayName = "Item";
Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
