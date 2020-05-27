import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes, RefOf } from "@paprika/helpers/lib/customPropTypes";
import ButtonGroupContext from "./ButtonGroupContext";
import Item from "./components/Item";
import * as sc from "./ButtonGroup.styles";

const propTypes = {
  /** The toggle buttons in the group. */
  children: PropTypes.node,

  /** To show the icons used for selected / not selected. */
  hasIcons: PropTypes.bool,

  /** If the entire button group is disabled. */
  isDisabled: PropTypes.bool,

  /** If the width of the button group should stretch to fit its parent container (100%). */
  isFullWidth: PropTypes.bool,

  /** If multiple simultaneous selections are allowed. */
  isMulti: PropTypes.bool,

  /** If it will be rendered as a button element. If false, a span will be rendered via an accessible RawButton. */
  isSemantic: PropTypes.bool,

  /** Callback to be executed when any button item is clicked or activated by keyboard. It will return an array of the selected items' "value" properties. */
  onChange: PropTypes.func,

  /** Size of the buttons (height, font size, etc). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),

  refLabel: RefOf(),
};

const defaultProps = {
  children: null,
  hasIcons: false,
  isDisabled: false,
  isFullWidth: false,
  isMulti: false,
  isSemantic: true,
  onChange: () => {},
  size: ShirtSizes.MEDIUM,
  refLabel: null,
};

const keyTypes = {
  PREV: "ArrowLeft",
  NEXT: "ArrowRight",
  FIRST: "Home",
  LAST: "End",
};

function ButtonGroup(props) {
  const { children, hasIcons, isDisabled, isMulti, isSemantic, onChange, size, refLabel } = props;

  const [selectedItems, setSelectedItems] = React.useState([]);
  const [currentFocusIndex, setFocusIndex] = React.useState(null);
  const [currentFocusValue, setFocusValue] = React.useState(null);

  const groupRef = React.useRef();

  function isItemDisabled(item) {
    return item.getAttribute("aria-disabled") === "true" || item.hasAttribute("disabled");
  }

  function getButtonRefs() {
    return Array.from(groupRef.current.querySelectorAll("[data-pka-anchor='button-group.button']"));
  }

  function getEnabledIndexes() {
    const buttonRefs = getButtonRefs();
    return buttonRefs.map((item, index) => (isItemDisabled(item) ? null : index)).filter(index => index !== null);
  }

  React.useLayoutEffect(() => {
    const enabledIndexes = getEnabledIndexes();
    if (enabledIndexes.length > 0) {
      setFocusIndex(enabledIndexes[0]);
    }
  }, []);

  React.useEffect(() => {
    if (currentFocusIndex !== null) {
      const buttonRefs = getButtonRefs();
      setFocusValue(buttonRefs[currentFocusIndex].getAttribute("value"));
    }
  }, [currentFocusIndex]);

  function focusButton(index) {
    getButtonRefs()[index].focus();
    setFocusIndex(index);
  }

  React.useLayoutEffect(() => {
    const $label = refLabel && refLabel.current;

    if (!$label) return;

    function handleClickLabel() {
      const enabledIndexes = getEnabledIndexes();
      focusButton(enabledIndexes[0]);
      console.log("focusing first button", document.activeElement);
    }

    $label.addEventListener("click", handleClickLabel);

    return () => {
      $label.removeEventListener("click", handleClickLabel);
    };
  }, [refLabel]);

  const handleClick = clickedValue => {
    if (!isDisabled) {
      const buttonRefs = getButtonRefs();
      const itemIndex = selectedItems.indexOf(clickedValue);
      const itemUsedToBeSelected = itemIndex > -1;
      const newSelectedItems = isMulti ? [...selectedItems] : [];

      if (!itemUsedToBeSelected) {
        newSelectedItems.push(clickedValue);
      } else if (isMulti) {
        newSelectedItems.splice(itemIndex, 1);
      }
      setSelectedItems(newSelectedItems);

      const domIndex = buttonRefs.findIndex(item => item.getAttribute("value") == clickedValue); // eslint-disable-line eqeqeq
      setFocusIndex(domIndex);

      if (typeof onChange === "function") onChange(newSelectedItems);
    }
  };

  const handleKeyDown = event => {
    if (Object.values(keyTypes).includes(event.key)) {
      event.stopPropagation();

      const enabledIndexes = getEnabledIndexes();
      const enabledSelectedIndex = enabledIndexes.indexOf(currentFocusIndex);
      const count = enabledIndexes.length;

      switch (event.key) {
        case keyTypes.NEXT:
          focusButton(enabledIndexes[(enabledSelectedIndex + 1) % count]);
          break;
        case keyTypes.PREV:
          focusButton(enabledIndexes[(enabledSelectedIndex - 1 + count) % count]);
          break;
        case keyTypes.FIRST:
          focusButton(enabledIndexes[0]);
          break;
        case keyTypes.LAST:
          focusButton(enabledIndexes[count - 1]);
          break;
        default:
          break;
      }
    }
  };

  const contextValue = {
    currentFocusValue,
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
    <sc.ButtonGroup {...props} ref={groupRef} onKeyDown={handleKeyDown}>
      <ButtonGroupContext.Provider value={contextValue}>{children}</ButtonGroupContext.Provider>
    </sc.ButtonGroup>
  );
}

ButtonGroup.displayName = "ButtonGroup";
ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;
ButtonGroup.Item = Item;

export default ButtonGroup;
