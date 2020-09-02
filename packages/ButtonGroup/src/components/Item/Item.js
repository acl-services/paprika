import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import ButtonGroupContext from "../../ButtonGroupContext";
import * as sc from "./Item.styles";

const Item = props => {
  const { children, defaultIsActive, value, ...moreProps } = props;
  const {
    currentFocusValue,
    isDisabled,
    isMulti,
    hasIcon,
    isSemantic,
    onClick,
    size,
    selectedItems,
    setSelectedItems,
    setItemRefs,
  } = React.useContext(ButtonGroupContext);

  const itemRef = React.useRef(null);

  React.useEffect(() => {
    setItemRefs(prevItemRefs => [...prevItemRefs, itemRef]);
    if (defaultIsActive) {
      setSelectedItems(prevItems => {
        return isMulti ? [...prevItems, value] : [value];
      });
    }
  }, []);

  const handleClick = () => {
    onClick(value);
  };

  const isActive = selectedItems.includes(value);
  const isFocused = currentFocusValue == value; // eslint-disable-line eqeqeq

  const buttonProps = {
    isDisabled,
    ...moreProps,
    "data-pka-anchor": "button-group.button",
    isActive,
    isSemantic,
    kind: Item.types.kind.FLAT,
    onClick: handleClick,
    size,
    tabIndex: isFocused ? 0 : -1,
    value,
  };

  return (
    <sc.Item {...buttonProps} ref={itemRef}>
      {hasIcon && <React.Fragment>{isActive ? <sc.SelectedIcon /> : <sc.UnselectedIcon />}</React.Fragment>}
      {children}
    </sc.Item>
  );
};

Item.types = {
  kind: constants.kind,
};

const propTypes = {
  /** Content label of the button to be displayed. */
  children: PropTypes.node,

  /** If the item is active or on selected state */
  defaultIsActive: PropTypes.bool,

  /** Unique key to represent the selected value. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const defaultProps = {
  children: null,
  defaultIsActive: false,
};

Item.displayName = "ButtonGroup.Item";
Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
