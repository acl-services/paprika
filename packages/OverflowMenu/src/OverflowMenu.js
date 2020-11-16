import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import "what-input";
import Popover from "@paprika/popover";
import extractChildren from "@paprika/helpers/lib/extractChildren";
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

  /** If provided, will fire when the Popover is closed */
  onClose: Popover.propTypes.onClose,

  /** The z-index for the popover / confirmation */
  zIndex: Popover.propTypes.zIndex,
};

const defaultProps = {
  align: Popover.defaultProps.align,
  edge: Popover.defaultProps.edge,
  onClose: Popover.defaultProps.onClose,
  zIndex: Popover.defaultProps.zIndex,
};

const popoverOffset = 4;

function OverflowMenu(props) {
  const { align, children, edge, onClose, zIndex, ...moreProps } = props;

  const [isOpen, setIsOpen] = React.useState(false);
  const [isConfirming, setIsConfirming] = React.useState(false);
  const [renderConfirmation, setRenderConfirmation] = React.useState(null);
  const [currentFocusIndex, setFocusIndex] = React.useState(0);
  const triggerRef = React.useRef(null);
  const menuId = React.useRef(uuid());
  const triggerId = React.useRef(uuid());
  const overflowListRef = React.useRef(null);

  function focusAndSetIndex(index) {
    if (overflowListRef && overflowListRef.current && index !== undefined)
      overflowListRef.current.querySelectorAll('[data-pka-anchor="overflow-menu.item"]')[index].focus();
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
        (child) =>
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
      handleCloseMenu();
    }
  };

  const handleShowConfirmation = (renderConfirmation) => () => {
    setIsConfirming((prevIsConfirmingState) => !prevIsConfirmingState);
    setRenderConfirmation((prevIsConfirmingState) => (prevIsConfirmingState ? null : renderConfirmation));
  };

  const renderTrigger = () => {
    // wrapping the returned item in a function to avoid needing to tab twice
    // https://github.com/acl-services/paprika/issues/126
    return () =>
      React.cloneElement(Trigger, {
        isOpen,
        onOpenMenu: handleOpenMenu,
        triggerRef,
        menuId: menuId.current,
        id: triggerId.current,
      });
  };

  const getClonedChild = (child, childKey, additionalProps = {}) =>
    React.cloneElement(child, {
      onKeyDown: (e) => onKeyDown(e, currentFocusIndex),
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
      isOpen={isOpen}
      edge={edge}
      zIndex={zIndex}
      {...moreProps}
      onClose={() => {
        if (!isConfirming) handleCloseMenu();
      }}
    >
      <Popover.Trigger>{renderTrigger()}</Popover.Trigger>
      <Popover.Content id={menuId.current} role={!isConfirming ? "menu" : null} {...ContentProps}>
        {isOpen && renderContent()}
      </Popover.Content>
    </Popover>
  );
}

OverflowMenu.displayName = "OverflowMenu";
OverflowMenu.propTypes = propTypes;
OverflowMenu.defaultProps = defaultProps;

OverflowMenu.Content = Content;
OverflowMenu.Divider = Divider;
OverflowMenu.LinkItem = LinkItem;
OverflowMenu.Item = Item;
OverflowMenu.Trigger = Trigger;

export default OverflowMenu;
