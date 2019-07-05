import React from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";
import RawButton from "@paprika/raw-button";
import ItemStyles from "./Item.styles";

const { bool, func, node, string } = PropTypes;

const propTypes = {
  /** Optional custom classes */
  className: string,

  /** HTML for each item */
  children: node.isRequired,

  /** If the item is destructive. */
  isDestructive: bool,

  /** Callback to be executed when button is clicked */
  onClick: func,

  /** Callback to be executed when dropdown needs to be closed */
  onClose: func,

  /** Callback to be executed when delete item is clicked */
  onShowConfirmation: func,

  /** Render prop to render the replacement node */
  renderConfirmation: func,
};

const defaultProps = {
  className: "",
  isDestructive: false,
  onClick: () => {},
  onClose: () => {},
  onShowConfirmation: () => {},
  renderConfirmation: null,
};

const Item = props => {
  const {
    className,
    children,
    isDestructive,
    onClick,
    onClose,
    onShowConfirmation,
    renderConfirmation,
    ...remainingProps
  } = props;

  // const getClasses = () => {
  //   return classNames(className, "aclui-dropdown-menu__item", {
  //     "aclui-dropdown-menu__item--is-destructive": isDestructive,
  //   });
  // };

  const handleClickItem = () => {
    console.log("handling click item close click");
    onClick();
    onClose();
  };

  return (
    <RawButton
      css={ItemStyles}
      // className={getClasses()}
      onClick={renderConfirmation !== null ? onShowConfirmation : handleClickItem}
      role="menuitem"
      isDestructive={isDestructive}
      {...remainingProps}
    >
      {children}
    </RawButton>
  );
};

Item.componentType = "DropdownMenu.Item";
Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
