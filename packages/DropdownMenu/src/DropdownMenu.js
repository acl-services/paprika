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

const DropdownMenu = props => {
  const { align, children, edge, ...moreProps } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const [isConfirming, setIsConfirming] = React.useState(false);
  const [renderConfirmation, setRenderConfirmation] = React.useState(null);
  const triggerRef = React.useRef(null);
  const menuId = React.useRef(uuid());
  const triggerId = React.useRef(uuid());

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
  };

  const extractedChildren = extractChildren(children, ["DropdownMenu.Trigger"]);

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
      <div css={contentStyles}>
        {extractedChildren.children.map((child, index) => {
          if (child && child.type && child.type.displayName === "DropdownMenu.Item") {
            const childKey = { key: `DropdownMenuItem${index}` };
            if (child.props.renderConfirmation) {
              return React.cloneElement(child, {
                onShowConfirmation: handleShowConfirmation(child.props.renderConfirmation),
                ...childKey,
              });
            }
            return React.cloneElement(child, {
              onClose: handleCloseMenu,
              ...childKey,
            });
          }
          return child;
        })}
      </div>
    );
  };

  return (
    <Popover
      align={align}
      offset={popoverOffset}
      isOpen={isOpen}
      onClose={() => {
        if (!isConfirming) handleCloseMenu();
      }}
      edge={edge}
      {...moreProps}
    >
      <Popover.Trigger>{renderTrigger()}</Popover.Trigger>
      <Popover.Content id={menuId.current} role={!isConfirming ? "menu" : null}>
        {isOpen && <Popover.Card>{renderContent()}</Popover.Card>}
      </Popover.Content>
    </Popover>
  );
};

DropdownMenu.displayName = "DropdownMenu";
DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.Divider = Divider;
DropdownMenu.LinkItem = LinkItem;
DropdownMenu.Item = Item;
DropdownMenu.Trigger = Trigger;

export default DropdownMenu;
