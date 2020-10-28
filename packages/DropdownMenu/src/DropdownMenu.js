import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import Popover from "@paprika/popover";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import Divider from "./components/Divider";
import Trigger from "./components/Trigger";
import LinkItem from "./components/LinkItem";
import Item from "./components/Item";
import * as sc from "./DropdownMenu.styles";

const propTypes = {
  /** Alignment of the Popover */
  align: Popover.propTypes.align,

  /** Children should consist of <Dropdown.Item /> */
  children: PropTypes.node.isRequired,

  /** If provided, will align Popover to specified edge of Trigger */
  edge: Popover.propTypes.edge,

  /** If provided, will fire when the Popover is closed */
  onClose: Popover.propTypes.onClose,

  /** If provided, this class will get applied to the Popover component */
  popoverClassName: PropTypes.string,

  /** The z-index for the popover / confirmation */
  zIndex: Popover.propTypes.zIndex,
};

const defaultProps = {
  align: Popover.defaultProps.align,
  edge: Popover.defaultProps.edge,
  onClose: Popover.defaultProps.onClose,
  popoverClassName: "",
  zIndex: Popover.defaultProps.zIndex,
};

const popoverOffset = 4;

function DropdownMenu(props) {
  const { align, children, edge, onClose, popoverClassName, zIndex, ...moreProps } = props;

  const [isOpen, setIsOpen] = React.useState(false);
  const [isConfirming, setIsConfirming] = React.useState(false);
  const [renderConfirmation, setRenderConfirmation] = React.useState(null);
  const [currentFocusIndex, setFocusIndex] = React.useState(0);
  const triggerRef = React.useRef(null);
  const menuId = React.useRef(uuid());
  const triggerId = React.useRef(uuid());
  const dropdownListRef = React.useRef(null);

  function focusAndSetIndex(index) {
    if (dropdownListRef && dropdownListRef.current && index !== undefined)
      dropdownListRef.current.querySelectorAll('[data-pka-anchor="dropdown.item"]')[index].focus();
    setFocusIndex(index);
  }

  const handleCloseMenu = () => {
    setIsOpen(false);

    if (isConfirming) {
      setIsConfirming(false);
      setRenderConfirmation(null);
    }

    if (triggerRef.current) triggerRef.current.focus();

    if (onClose) {
      onClose();
    }
  };

  const handleOpenMenu = () => {
    setIsOpen(true);
    // https://github.com/acl-services/paprika/issues/316
    // Todo Should focus the first item via an onAfterOpen event callback in popover
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
    } else if (event.key === "Enter" || event.key === " ") {
      // do nothing
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
        zIndex,
      });
    }

    return (
      <Popover.Card>
        <sc.Content ref={dropdownListRef}>
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
        </sc.Content>
      </Popover.Card>
    );
  };

  return (
    <Popover
      align={align}
      offset={popoverOffset}
      isOpen={isOpen}
      edge={edge}
      zIndex={zIndex}
      {...moreProps}
      onClose={() => {
        if (!isConfirming) handleCloseMenu();
      }}
    >
      <Popover.Trigger>{renderTrigger()}</Popover.Trigger>
      <Popover.Content id={menuId.current} role={!isConfirming ? "menu" : null} className={popoverClassName}>
        {isOpen && renderContent()}
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
