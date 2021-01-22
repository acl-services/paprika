import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import "what-input";
import Popover from "@paprika/popover";
import { extractChildren } from "@paprika/helpers";
import Content from "./components/Content";
import Divider from "./components/Divider";
import Trigger from "./components/Trigger";
import LinkItem from "./components/LinkItem";
import Item from "./components/Item";
import * as sc from "./OverflowMenu.styles";

const propTypes = {
  /** Alignment of the Popover */
  align: Popover.propTypes.align,

  /** Children should consist of <OverflowMenu.Item /> */
  children: PropTypes.node.isRequired,

  /** If provided, will align Popover to specified edge of Trigger */
  edge: Popover.propTypes.edge,

  /** Control if the overflow menu popover open. */
  isOpen: Popover.propTypes.isOpen,

  /** If provided, will fire when the Popover is closed */
  onClose: Popover.propTypes.onClose,

  /** The z-index for the popover / confirmation */
  zIndex: Popover.propTypes.zIndex,
};

const defaultProps = {
  align: Popover.defaultProps.align,
  edge: Popover.defaultProps.edge,
  isOpen: null,
  onClose: Popover.defaultProps.onClose,
  zIndex: Popover.defaultProps.zIndex,
};

const popoverOffset = 4;

const OverflowMenu = React.forwardRef((props, ref) => {
  const { align, children, edge, isOpen: controlledIsOpen, onClose, zIndex, ...moreProps } = props;

  const [isOpen, setIsOpen] = React.useState(false);
  const [isConfirming, setIsConfirming] = React.useState(false);
  const [currentFocusIndex, setFocusIndex] = React.useState(0);
  const triggerRef = React.useRef(null);
  const menuId = React.useRef(uuid());
  const triggerId = React.useRef(uuid());
  const overflowListRef = React.useRef(null);
  const renderConfirmationRef = React.useRef(null);

  function focusAndSetIndex(index) {
    if (overflowListRef && overflowListRef.current && index !== undefined)
      overflowListRef.current.querySelectorAll('[data-pka-anchor="overflow-menu.item"]')[index].focus();
    setFocusIndex(index);
  }

  React.useImperativeHandle(ref, () => ({
    focusAndSetIndex,
  }));

  function getIsOpenValue() {
    return controlledIsOpen === null ? isOpen : controlledIsOpen;
  }

  function setIsOpenValue(value) {
    if (controlledIsOpen !== null) return;
    setIsOpen(value);
  }

  const handleCloseMenu = key => {
    setIsOpenValue(false);

    if (isConfirming) {
      setIsConfirming(false);
      renderConfirmationRef.current = null;
    }

    if (triggerRef.current && key === "Tab") {
      triggerRef.current.focus();
    }

    if (onClose) {
      onClose();
    }
  };

  const handleOpenMenu = () => {
    setIsOpenValue(true);

    if (document.querySelector("html").getAttribute("data-whatinput") === "keyboard") {
      setTimeout(() => {
        focusAndSetIndex(0);
      }, 250);
    }
  };

  const {
    "OverflowMenu.Trigger": Trigger,
    "OverflowMenu.Content": Content,
    children: extractedChildren,
  } = extractChildren(children, ["OverflowMenu.Trigger", "OverflowMenu.Content"]);
  const ContentProps = Content && Content.props ? Content.props : null;

  const overflowLastItemIndex =
    React.Children.toArray(
      extractedChildren.filter(
        child =>
          child.type &&
          (child.type.displayName === "OverflowMenu.Item" || child.type.displayName === "OverflowMenu.LinkItem")
      )
    ).length - 1;

  const onKeyDown = (event, currentIndex) => {
    if (event.key === "ArrowDown") {
      const indexToFocus = currentIndex === overflowLastItemIndex ? 0 : currentIndex + 1;
      focusAndSetIndex(indexToFocus);
    } else if (event.key === "ArrowUp") {
      const indexToFocus = currentIndex === 0 ? overflowLastItemIndex : currentIndex - 1;
      focusAndSetIndex(indexToFocus);
    } else if (event.key === "Home") {
      focusAndSetIndex(0);
    } else if (event.key === "End") {
      focusAndSetIndex(overflowLastItemIndex);
    } else if (event.key === "Enter" || event.key === " ") {
      // do nothing
    } else {
      handleCloseMenu(event.key);
    }
  };

  const handleShowConfirmation = renderConfirmation => {
    renderConfirmationRef.current = renderConfirmation;

    return () => {
      setIsConfirming(prevIsConfirmingState => !prevIsConfirmingState);
    };
  };

  const renderTrigger = () => {
    // wrapping the returned item in a function to avoid needing to tab twice
    // https://github.com/acl-services/paprika/issues/126
    return () =>
      React.cloneElement(Trigger, {
        isOpen: getIsOpenValue(),
        onOpenMenu: handleOpenMenu,
        triggerRef,
        menuId: menuId.current,
        id: triggerId.current,
      });
  };

  const extractRenderConfirmation = () => {
    extractedChildren.forEach(child => {
      if (child.props.renderConfirmation && child.props.renderConfirmation !== renderConfirmationRef.current) {
        renderConfirmationRef.current = child.props.renderConfirmation;
      }
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
      extractRenderConfirmation();
      const confirmationComponent = renderConfirmationRef.current(handleCloseMenu);
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
        <sc.Content ref={overflowListRef}>
          {extractedChildren.map((child, index) => {
            const childKey = { key: `OverflowMenuItem${index}` };
            if (child && child.type && child.type.displayName === "OverflowMenu.Item") {
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
      isOpen={getIsOpenValue()}
      edge={edge}
      zIndex={zIndex}
      {...moreProps}
      onClose={() => {
        if (!isConfirming) handleCloseMenu();
      }}
    >
      <Popover.Trigger>{renderTrigger()}</Popover.Trigger>
      <Popover.Content id={menuId.current} role={!isConfirming ? "menu" : null} {...ContentProps}>
        {getIsOpenValue() && renderContent()}
      </Popover.Content>
    </Popover>
  );
});

OverflowMenu.displayName = "OverflowMenu";
OverflowMenu.propTypes = propTypes;
OverflowMenu.defaultProps = defaultProps;

OverflowMenu.Content = Content;
OverflowMenu.Divider = Divider;
OverflowMenu.LinkItem = LinkItem;
OverflowMenu.Item = Item;
OverflowMenu.Trigger = Trigger;

export default OverflowMenu;
