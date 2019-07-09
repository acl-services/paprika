import React from "react";
import PropTypes from "prop-types";
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

  /**  If true, will render an <a> tag, otherwise a <span> is generated */
  isLink: bool,

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
  isLink: false,
  onShowConfirmation: () => {},
  renderConfirmation: null,
};

const Item = props => {
  const {
    className,
    children,
    isDestructive,
    isLink,
    onClick,
    onClose,
    onShowConfirmation,
    renderConfirmation,
    ...remainingProps
  } = props;

  const handleClickItem = () => {
    onClick();
    onClose();
  };

  const itemProps = {
    className,
    onClick: renderConfirmation !== null ? onShowConfirmation : handleClickItem,
    role: "menuitem",
    isDestructive,
  };

  if (isLink) {
    return (
      <a css={ItemStyles} {...itemProps}>
        {children}
      </a>
    );
  }
  return (
    <RawButton css={ItemStyles} {...itemProps} {...remainingProps}>
      {children}
    </RawButton>
  );
};

Item.componentType = "DropDownMenu.Item";
Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
