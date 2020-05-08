import React from "react";
import PropTypes from "prop-types";
import ButtonGroupContext from "../../ButtonGroupContext";

import * as sc from "./ButtonItem.styles";

const propTypes = {
  /** Content label of the button to be displayed. */
  children: PropTypes.node,

  /** If the item is active or on selected state */
  defaultIsActive: PropTypes.bool,

  /** tabindex attribute of this item */
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Unique key to represent the selected value. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const defaultProps = {
  children: null,
  defaultIsActive: false,
  tabIndex: null,
};

const ButtonItem = props => {
  const { children, defaultIsActive, tabIndex, value, ...moreProps } = props;
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
  } = React.useContext(ButtonGroupContext);

  React.useEffect(() => {
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
  const isFocused = currentFocusValue === value;

  const buttonProps = {
    isDisabled,
    ...moreProps,
    "data-pka-anchor": "button-group.button",
    isActive,
    isSemantic,
    kind: "flat",
    onClick: handleClick,
    size,
    tabIndex: isFocused ? tabIndex || 0 : -1,
    value,
  };

  return (
    <sc.ButtonItem {...buttonProps}>
      {hasIcon && <React.Fragment>{isActive ? <sc.SelectedIcon /> : <sc.UnselectedIcon />}</React.Fragment>}
      {children}
    </sc.ButtonItem>
  );
};

ButtonItem.displayName = "ButtonGroup.Item";
ButtonItem.propTypes = propTypes;
ButtonItem.defaultProps = defaultProps;

export default ButtonItem;
