import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import Popover from "@paprika/popover";
import Divider from "./components/Divider";
import Trigger from "./components/Trigger";
import LinkItem from "./components/LinkItem";
import Item from "./components/Item";
import contentStyles from "./DropdownMenuContentStyles.styles";

const { alignTypes, oneOf, node, func } = PropTypes;

const propTypes = {
  /** Alignment of the dropdown menu */
  align: oneOf(alignTypes),

  /** Children should consist of <Dropdown.Item /> */
  children: node.isRequired,

  /** Render prop for rendering the trigger element that toggles the dropdown */
  renderTrigger: func.isRequired,
};

const defaultProps = {
  align: "bottom",
};

const DropdownMenu = props => {
  const { align, children, ...moreProps } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const [isConfirming, setIsConfirming] = React.useState(false);
  const [renderConfirmation, setRenderConfirmation] = React.useState(null);
  const triggerRef = React.useRef(null);

  const handleCloseMenu = () => {
    setIsOpen(false);
    setIsConfirming(false);
    setRenderConfirmation(null);
    if (triggerRef.current) triggerRef.current.focus();
  };

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const triggerProps = {
    isOpen,
    handleOpenMenu,
  };

  const handleShowConfirmation = renderConfirmation => () => {
    setIsConfirming(prevIsConfirmingState => !prevIsConfirmingState);
    setRenderConfirmation(prevIsConfirmingState => (prevIsConfirmingState ? null : renderConfirmation));
  };

  const menuRefId = React.useRef(uuid());

  const renderTrigger = () => {
    const triggerComponent = props.renderTrigger(triggerProps);
    // wrapping the returned item in a function to avoid needing to tab twice
    // https://github.com/acl-services/paprika/issues/126
    return () =>
      React.cloneElement(triggerComponent, {
        triggerRef,
        menuRefId: menuRefId.current,
      });
  };

  const renderContent = () => {
    if (isConfirming) {
      const confirmationComponent = renderConfirmation(handleCloseMenu);
      return React.cloneElement(confirmationComponent, {
        onClose: handleCloseMenu,
      });
    }

    return (
      <div css={contentStyles} isOpen={isOpen}>
        {children.map((child, index) => {
          if (child.type.displayName === "DropdownMenu.Item") {
            const childItem = { key: `DropdownMenuItem${index}` };
            if (child.props.renderConfirmation) {
              return React.cloneElement(child, {
                onShowConfirmation: handleShowConfirmation(child.props.renderConfirmation),
                ...childItem,
              });
            }
            return React.cloneElement(child, {
              onClose: handleCloseMenu,
              ...childItem,
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
      offset={4}
      isOpen={isOpen}
      onClose={() => {
        if (!isConfirming) {
          handleCloseMenu();
        }
      }}
      {...moreProps}
    >
      <Popover.Trigger>{renderTrigger()}</Popover.Trigger>
      <Popover.Content id={menuRefId.current} role={!isConfirming ? "menu" : null}>
        {renderContent()}
      </Popover.Content>
    </Popover>
  );
};

DropdownMenu.displayName = "DropdownMenu";
DropdownMenu.Divider = Divider;
DropdownMenu.LinkItem = LinkItem;
DropdownMenu.Item = Item;
DropdownMenu.Trigger = Trigger;
DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;
