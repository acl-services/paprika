import React from "react";
import PropTypes from "prop-types";

import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

import * as sc from "./ButtonGroup.styles";
import ButtonItem from "./components/ButtonItem";

const propTypes = {
  /** The content of each of the toggle buttons in the group. */
  children: PropTypes.node,

  /** T show or hide the icons for selected or not. */
  hasIcons: PropTypes.bool,

  /** If the button is disabled. */
  isDisabled: PropTypes.bool,

  /** If the width of the button should span it's parent container (100%). */
  isFullWidth: PropTypes.bool,

  /** If it will be rendered as a <button> element. If false, a <span> will be rendered via an accessible <RawButton>. */
  isSemantic: PropTypes.bool,

  /** Callback to be executed when any button is clicked to select the item or activated by keyboard. Typically required.
   * it will return a list of selected items */
  onChange: PropTypes.func,

  /** Size of the button (font size, min-height, padding, etc). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  children: null,
  hasIcons: false,
  isDisabled: false,
  isFullWidth: false,
  isSemantic: true,
  onChange: () => {},
  size: ShirtSizes.MEDIUM,
};

const ButtonGroup = props => {
  const { children, hasIcons, isDisabled, isFullWidth, isSemantic, onChange, size } = props;

  const validChildren = children.filter(child => child.type.displayName === ButtonItem.displayName);

  const initiallySelectedItems = validChildren.filter(item => item.props.isActive).map(item => item.key);

  const [selectedItems, setSelectedItems] = React.useState([...initiallySelectedItems]);

  const handleClick = clickedId => {
    if (!isDisabled) {
      const itemIndex = selectedItems.indexOf(clickedId);
      const itemUsedToBeSelected = itemIndex > -1;
      const newSelectedItemIds = [...selectedItems];

      if (itemUsedToBeSelected) {
        newSelectedItemIds.splice(itemIndex, 1);
      } else {
        newSelectedItemIds.push(clickedId);
      }

      setSelectedItems(newSelectedItemIds);
      if (onChange) {
        onChange(newSelectedItemIds);
      }
    }
  };

  return (
    <sc.ButtonGroup {...props}>
      {validChildren.map(item => {
        const buttonProps = {
          isDisabled,
          ...item.props,

          hasIcon: hasIcons,
          isFullWidth,
          isSemantic,
          onClick: () => handleClick(item.key),
          size,
        };

        return (
          <sc.Button
            {...buttonProps}
            key={item.key}
            isActive={selectedItems.includes(item.key)}
            data-pka-anchor="button-group.button"
            kind="flat"
          >
            {item.props.children}
          </sc.Button>
        );
      })}
    </sc.ButtonGroup>
  );
};

ButtonGroup.displayName = "ButtonGroup";
ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;
ButtonGroup.Item = ButtonItem;

export default ButtonGroup;
