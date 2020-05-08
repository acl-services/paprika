import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import ButtonGroupContext from "./ButtonGroupContext";
import ButtonItem from "./components/ButtonItem";
import * as sc from "./ButtonGroup.styles";

const propTypes = {
  /** The content of each of the toggle buttons in the group. */
  children: PropTypes.node,

  /** To show or hide the icons used for selected or not selected. */
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

function ButtonGroup(props) {
  const { children, hasIcons, isDisabled, isSemantic, onChange, size } = props;
  const isMulti = false; // for future capability

  const [selectedItems, setSelectedItems] = React.useState([]);

  const handleClick = clickedValue => {
    if (!isDisabled) {
      const itemIndex = selectedItems.indexOf(clickedValue);
      const itemUsedToBeSelected = itemIndex > -1;
      const newSelectedItems = isMulti ? [...selectedItems] : [];

      if (!itemUsedToBeSelected) {
        newSelectedItems.push(clickedValue);
      } else if (isMulti) {
        newSelectedItems.splice(itemIndex, 1);
      }

      setSelectedItems(newSelectedItems);
      if (typeof onChange === "function") onChange(newSelectedItems);
    }
  };

  const contextValue = {
    isDisabled,
    isMulti,
    hasIcon: hasIcons,
    isSemantic,
    onClick: handleClick,
    size,
    selectedItems,
    setSelectedItems,
  };

  return (
    <sc.ButtonGroup {...props}>
      <ButtonGroupContext.Provider value={contextValue}>{children}</ButtonGroupContext.Provider>
    </sc.ButtonGroup>
  );
}

ButtonGroup.displayName = "ButtonGroup";
ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;
ButtonGroup.Item = ButtonItem;

export default ButtonGroup;
