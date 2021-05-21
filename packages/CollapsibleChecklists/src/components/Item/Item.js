import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@paprika/checkbox";
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

  return (
    <div css={itemStyles} isDisabled={isDisabled}>
      <Checkbox
        checkedState={isChecked ? Checkbox.types.state.CHECKED : Checkbox.types.state.UNCHECKED}
        isDisabled={isDisabled}
        onChange={onChange}
        size={Checkbox.types.size.SMALL}
        ref={ref}
        {...moreProps}
      >
        {children}
      </Checkbox>
    </div>
  );
});

Item.displayName = "Item";
Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
