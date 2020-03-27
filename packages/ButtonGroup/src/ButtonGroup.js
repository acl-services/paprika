import React from "react";
import PropTypes from "prop-types";

import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

import * as sc from "./ButtonGroup.styles";

const propTypes = {
  /** The content of each of the toggle buttons in the group. */
  children: PropTypes.node,

  /** If the button is disabled. */
  isDisabled: PropTypes.bool,

  /** If the width of the button should span it's parent container (100%). */
  isFullWidth: PropTypes.bool,

  /** If it will be rendered as a <button> element. If false, a <span> will be rendered via an accessible <RawButton>. */
  isSemantic: PropTypes.bool,

  /** Callback to be executed when the button is clicked to select the item or activated by keyboard. Typically required. */
  onClick: PropTypes.func,

  /** Size of the button (font size, min-height, padding, etc). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),

  /** Value for tabindex attribute to override the default of 0. */
  tabIndex: PropTypes.number,
};

const defaultProps = {
  children: null,
  isDisabled: false,
  isFullWidth: false,
  isSemantic: true,
  onClick: () => {},
  size: ShirtSizes.MEDIUM,
  tabIndex: null,
};

const ButtonGroup = props => {
  const { children, isDisabled, isFullWidth, isSemantic, onClick, tabIndex, size, ...moreProps } = props;

  const [selectedItems, setSelectedItems] = React.useState([]);
  const isButtonGroupDisabled = isDisabled;

  const handleClick = event => {
    if (!isButtonGroupDisabled) {
      const clickedId = event.target.textContent;
      const itemIndex = selectedItems.indexOf(clickedId);
      const itemUsedToBeSelected = itemIndex > -1;
      const newSelectedItemIds = [...selectedItems];

      if (itemUsedToBeSelected) {
        newSelectedItemIds.splice(itemIndex, 1);
      } else {
        newSelectedItemIds.push(clickedId);
      }

      setSelectedItems(newSelectedItemIds);
    }
  };

  const bestTabIndex = isButtonGroupDisabled && tabIndex === null ? -1 : tabIndex || 0;

  const buttonProps = {
    isFullWidth,
    isDisabled: isButtonGroupDisabled,
    onClick: handleClick,
    tabIndex,
    size,
    isSemantic,
    ...moreProps,
  };

  if (isSemantic) {
    buttonProps.disabled = isButtonGroupDisabled;
  } else {
    buttonProps.tabIndex = bestTabIndex;
  }

  return (
    <sc.ButtonGroup {...props}>
      {children.map(item => (
        <sc.Button
          key={item.props.children}
          isActive={selectedItems.includes(item.props.children)}
          data-pka-anchor="button-group.button"
          kind="flat"
          {...buttonProps}
        >
          {item.props.children}
        </sc.Button>
      ))}
    </sc.ButtonGroup>
  );
};

ButtonGroup.displayName = "ButtonGroup";
ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
