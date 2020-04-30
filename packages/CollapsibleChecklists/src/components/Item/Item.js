import React from "react";
import PropTypes from "prop-types";
import itemStyles from "./Item.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  /** If the item is checked or not */
  isChecked: PropTypes.bool,
  /** If the item is disabled */
  isDisabled: PropTypes.bool,
  /** Callback when user checked an item  */
  onChange: PropTypes.func,
};

const defaultProps = {
  isChecked: false,
  isDisabled: false,
  onChange: () => {},
};

const Item = React.forwardRef((props, ref) => {
  const { children, isChecked, isDisabled, onChange, ...moreProps } = props;

  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <div css={itemStyles} isDisabled={isDisabled}>
      <label>
        <input type="checkbox" checked={isChecked} disabled={isDisabled} onChange={onChange} ref={ref} {...moreProps} />
        {children}
      </label>
    </div>
  );
  /* eslint-enable jsx-a11y/label-has-associated-control */
});

Item.displayName = "Item";
Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
