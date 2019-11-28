import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import { AlignTypes } from "@paprika/helpers/lib/customPropTypes";
import Popover from "@paprika/popover";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import Divider from "./components/Divider";
import Trigger from "./components/Trigger";
import LinkItem from "./components/LinkItem";
import Item from "./components/Item";
import { contentStyles } from "./DropdownMenu.styles";

const propTypes = {
  /** Alignment of the dropdown menu */
  align: PropTypes.oneOf(AlignTypes.ALL),

  /** Children should consist of <Dropdown.Item /> */
  children: PropTypes.node.isRequired,

  edge: PropTypes.oneOf([AlignTypes.LEFT, AlignTypes.RIGHT, null]),
};

const defaultProps = {
  align: AlignTypes.BOTTOM,
  edge: AlignTypes.LEFT,
};

const popoverOffset = 4;

function DropdownMenu(props) {
  const { align, children, edge, ...moreProps } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const [isConfirming, setIsConfirming] = React.useState(false);
  const [renderConfirmation, setRenderConfirmation] = React.useState(null);
  const [currentFocusIndex, setFocusIndex] = React.useState(0);
  const triggerRef = React.useRef(null);
  const menuId = React.useRef(uuid());
  const triggerId = React.useRef(uuid());

  const dropdownListRef = React.useRef(null);

  function focusAndSetIndex(index) {
    dropdownListRef.current.querySelectorAll(".dropdown-item")[index].focus();
    setFocusIndex(index);
  }

  const handleCloseMenu = () => {
    setIsOpen(false);

    if (isConfirming) {
      setIsConfirming(false);
      setRenderConfirmation(null);
    }

    if (triggerRef.current) triggerRef.current.focus();
  };

  const handleOpenMenu = () => {
    setIsOpen(true);
    // https://github.com/acl-services/paprika/issues/131 #6
    // Todo should be called via an onOpen callback via popover mounting content rather than timeout.
    setTimeout(() => {
      focusAndSetIndex(0);
    }, 250);
  };

  const extractedChildren = extractChildren(children, ["DropdownMenu.Trigger"]);

  const dropdownLastItemIndex =
    React.Children.toArray(
      extractedChildren.children.filter(
        child =>
          child.type &&
          (child.type.displayName === "DropdownMenu.Item" || child.type.displayName === "DropdownMenu.LinkItem")
      )
    ).length - 1;

  const onKeyDown = (event, currentIndex) => {
    if (event.key === "ArrowDown") {
      const indexToFocus = currentIndex === dropdownLastItemIndex ? 0 : currentIndex + 1;
      focusAndSetIndex(indexToFocus);
    } else if (event.key === "ArrowUp") {
      const indexToFocus = currentIndex === 0 ? dropdownLastItemIndex : currentIndex - 1;
      focusAndSetIndex(indexToFocus);
    } else if (event.key === "Home") {
      focusAndSetIndex(0);
    } else if (event.key === "End") {
      focusAndSetIndex(dropdownLastItemIndex);
    } else {
      handleCloseMenu();
    }
  };

  const handleShowConfirmation = renderConfirmation => () => {
    setIsConfirming(prevIsConfirmingState => !prevIsConfirmingState);
    setRenderConfirmation(prevIsConfirmingState => (prevIsConfirmingState ? null : renderConfirmation));
  };

  const renderTrigger = () => {
    // wrapping the returned item in a function to avoid needing to tab twice
    // https://github.com/acl-services/paprika/issues/126
    return () =>
      React.cloneElement(extractedChildren["DropdownMenu.Trigger"], {
        isOpen,
        onOpenMenu: handleOpenMenu,
        triggerRef,
        menuId: menuId.current,
        id: triggerId.current,
      });
  };

  const getClonedChild = (child, childKey, additionalProps = {}) =>
    React.cloneElement(child, {
      onKeyDown: e => onKeyDown(e, currentFocusIndex),
      ...childKey,
      ...additionalProps,
    });

  const renderContent = () => {
    if (isConfirming) {
      const confirmationComponent = renderConfirmation(handleCloseMenu);
      return React.cloneElement(confirmationComponent, {
        align,
        edge,
        defaultIsOpen: true,
        getPositioningElement: () => document.getElementById(triggerId.current),
        offset: popoverOffset,
        onClose: handleCloseMenu,
      });
    }

    return (
      <div css={contentStyles} ref={dropdownListRef}>
        {extractedChildren.children.map((child, index) => {
          const childKey = { key: `DropdownMenuItem${index}` };
          if (child && child.type && child.type.displayName === "DropdownMenu.Item") {
            if (child.props.renderConfirmation) {
              return getClonedChild(child, childKey, {
                onShowConfirmation: handleShowConfirmation(child.props.renderConfirmation),
              });
            }
            return getClonedChild(child, childKey, {
              onClose: handleCloseMenu,
            });
          }
          return getClonedChild(child, childKey);
        })}
      </div>
    );
  };

  return (
    <Popover
      align={align}
      offset={popoverOffset}
      isOpen={isOpen}
      onOpen={() => {
        console.log("calling on open dropdown");
      }}
      onDelayedOpen={() => {
        console.log("calling on delayed open dropdown");
      }}
      onClose={() => {
        if (!isConfirming) handleCloseMenu();
      }}
      edge={edge}
      {...moreProps}
    >
      <Popover.Trigger>{renderTrigger()}</Popover.Trigger>
      <Popover.Content
        onOpen={() => {
          console.log("calling on open content dropdown");
        }}
        onDelayedOpen={() => {
          console.log("calling on delayed open content dropdown");
        }}
        id={menuId.current}
        role={!isConfirming ? "menu" : null}
      >
        {isOpen && <Popover.Card>{renderContent()}</Popover.Card>}
      </Popover.Content>
    </Popover>
  );
}

DropdownMenu.displayName = "DropdownMenu";
DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.Divider = Divider;
DropdownMenu.LinkItem = LinkItem;
DropdownMenu.Item = Item;
DropdownMenu.Trigger = Trigger;

export default DropdownMenu;
