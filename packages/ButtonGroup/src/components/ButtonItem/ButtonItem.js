import React from "react";
import PropTypes from "prop-types";
import ButtonGroupContext from "../../ButtonGroupContext";

import * as sc from "./ButtonItem.styles";

const propTypes = {
  /** Unique key to represent the selected value. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  /** Content label of the button to be displayed. */
  children: PropTypes.node,

  /** If the item is active or on selected state */
  defaultIsActive: PropTypes.bool,
};

const defaultProps = {
  children: null,
  defaultIsActive: false,
};

const ButtonItem = props => {
  const { children, defaultIsActive, value, ...moreProps } = props;
  const { isDisabled, isMulti, hasIcon, isSemantic, onClick, size, selectedItems, setSelectedItems } = React.useContext(
    ButtonGroupContext
  );

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

  const buttonProps = {
    isDisabled,
    ...moreProps,
    "data-pka-anchor": "button-group.button",
    isActive,
    isSemantic,
    kind: "flat",
    onClick: handleClick,
    size,
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
