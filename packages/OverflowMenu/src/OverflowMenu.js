import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "what-input";
import Popover from "@paprika/popover";
import { extractChildren } from "@paprika/helpers";
import { zValue } from "@paprika/stylers/lib/helpers";
import Content from "./components/Content";
import Divider from "./components/Divider";
import Trigger from "./components/Trigger";
import LinkItem from "./components/LinkItem";
import Item from "./components/Item";
import * as sc from "./OverflowMenu.styles";

const propTypes = {
  /** Where the popover content is positioned relative to the trigger or getPositioningElement. */
  align: PropTypes.oneOf([
    Popover.types.align.TOP,
    Popover.types.align.RIGHT,
    Popover.types.align.BOTTOM,
    Popover.types.align.LEFT,
  ]),

  /** Children should consist of <OverflowMenu.Item /> */
  children: PropTypes.node.isRequired,

  /** If provided, will align Popover to specified edge of Trigger */
  edge: PropTypes.oneOf([Popover.types.align.LEFT, Popover.types.align.RIGHT, null]),

  /** Control if the overflow menu popover open. */
  isOpen: PropTypes.bool,

  /** The maximum height of the OverflowMenu content */
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** If provided, will fire when the Popover is closed */
  onClose: PropTypes.func,

  /** The z-index for the popover / confirmation */
  zIndex: PropTypes.number,
};

const defaultProps = {
  align: Popover.types.align.BOTTOM,
  edge: null,
  isOpen: null,
  maxHeight: 300,
  onClose: null,
  zIndex: zValue(1),
};

const popoverOffset = 4;

const OverflowMenu = React.forwardRef((props, ref) => {
  const { align, children, edge, isOpen: controlledIsOpen, onClose, zIndex, maxHeight, ...moreProps } = props;

  const [isOpen, setIsOpen] = React.useState(false);
  const [isConfirming, setIsConfirming] = React.useState(false);
  const [currentFocusIndex, setFocusIndex] = React.useState(0);
  const triggerRef = React.useRef(null);
  const [menuId] = React.useState(() => `overflow-menu_${uuidv4()}`);
  const [triggerId] = React.useState(() => `overflow-menu-trigger_${uuidv4()}`);
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
      event.preventDefault();
      const indexToFocus = currentIndex === overflowLastItemIndex ? 0 : currentIndex + 1;
      focusAndSetIndex(indexToFocus);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const indexToFocus = currentIndex === 0 ? overflowLastItemIndex : currentIndex - 1;
      focusAndSetIndex(indexToFocus);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusAndSetIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
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

  const renderTrigger = () =>
    // wrapping the returned item in a function to avoid needing to tab twice
    // https://github.com/acl-services/paprika/issues/126
    () =>
      React.cloneElement(Trigger, {
        isOpen: getIsOpenValue(),
        onOpenMenu: handleOpenMenu,
        triggerRef,
        menuRefId: menuId,
        id: triggerId,
      });
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
        getPositioningElement: () => document.getElementById(triggerId),
        offset: popoverOffset,
        onClose: handleCloseMenu,
        zIndex,
      });
    }

    return (
      <sc.PopoverCard maxHeight={maxHeight}>
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
      </sc.PopoverCard>
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
      <Popover.Content id={menuId} role={!isConfirming ? "menu" : null} {...ContentProps}>
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
