import React from "react";
import classNames from "classnames";
import Popover from "@paprika/popover";
import PropTypes from "prop-types";
import ContentContainerStyled from "./ContentContainer.styles";
import Item from "./Item/Item";

const { alignTypes, oneOf, node, string, func } = PropTypes;

const propTypes = {
  /** Alignment of the dropdown menu */
  align: oneOf(alignTypes),

  /** Children should consist of <Dropdown.Item /> */
  children: node.isRequired,

  /** Optional custom classes */
  className: string,

  /** Render prop for rendering the trigger element that toggles the dropdown */
  renderTrigger: func.isRequired,
};

const defaultProps = {
  align: "bottom",
  className: "",
};

const DropDownMenu = props => {
  // let triggerWrapper = null;
  const { align, children, className } = props;
  // const [isOpen, setIsOpen] = React.useState();
  const [isConfirming, setIsConfirming] = React.useState();
  const [renderConfirmation, setRenderConfirmation] = React.useState();

  const handleToggleMenu = () => {
    // setIsOpen(prevIsOpenState => !prevIsOpenState);
    setIsConfirming(false);
    setRenderConfirmation(null);
  };

  const handleShowConfirmation = () => {
    //setIsConfirming(prevIsConfirmingState => !prevIsConfirmingState);
    //setRenderConfirmation(prevIsConfirmingState => (prevIsConfirmingState ? null : renderConfirmation));
  };

  // const handleOutsideClick = e => {
  //   const isOutsideClick = e.currentTarget === document;
  //   const isTriggerClick = triggerWrapper.contains(e.target);

  //   if (isOutsideClick && isTriggerClick) {
  //     // if both outside click and trigger click then this is duplicate event
  //     // that could cause toggle twice as the trigger will have its own click
  //     // event.
  //     return;
  //   }
  //   handleToggleMenu();
  // };

  const getTriggerStateAndHelpers = () => {
    return {
      // isOpen,
      onToggleMenu: handleToggleMenu,
    };
  };

  // const setTriggerWrapperRef = el => {
  //   triggerWrapper = el;
  // };

  const renderContent = () => {
    if (isConfirming) {
      return renderConfirmation(handleToggleMenu);
    }

    return React.Children.toArray(children).map(child => {
      if (child.type.componentType === "DropdownMenu.Item") {
        if (child.props.renderConfirmation) {
          return React.cloneElement(child, {
            onShowConfirmation: handleShowConfirmation(child.props.renderConfirmation),
          });
        }
        return React.cloneElement(child, { onClose: handleToggleMenu });
      }

      return child;
    });
  };

  // const getClasses = () => {
  //   return classNames(className, "aclui-dropdown-menu__dropdown", {
  //     "aclui-dropdown-menu__confirmation": isConfirming,
  //   });
  // };

  return (
    <Popover
      align={align}
      // className={getClasses()} // not sure if is necessary
      // content={renderContent()} // children is rendering content
      // hasArrow={false}
      // onOutsideClick={handleOutsideClick}
      offset={4}
      // role={!isConfirming ? "menu" : null} // not sure if is necessary
      // rootClassName="aclui-dropdown-menu" // not sure if is necessary
      // isOpen={isOpen} // maybe needed
      // onClose={handleToggleMenu} // maybe needed
    >
      <Popover.Trigger>{props.renderTrigger(getTriggerStateAndHelpers())}</Popover.Trigger>
      <Popover.Content>
        <ContentContainerStyled>{renderContent()}</ContentContainerStyled>
      </Popover.Content>
    </Popover>
  );
};

DropDownMenu.displayName = "DropDownMenu";
DropDownMenu.Item = Item;
DropDownMenu.propTypes = propTypes;
DropDownMenu.defaultProps = defaultProps;

export default DropDownMenu;
