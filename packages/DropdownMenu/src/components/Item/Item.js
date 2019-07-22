import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import ItemStyles from "../../Item.styles";

const { bool, func, node } = PropTypes;

const propTypes = {
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
  isDestructive: false,
  onClick: () => {},
  onClose: () => {},
  onShowConfirmation: () => {},
  renderConfirmation: null,
};

const Item = props => {
  const { children, isDestructive, onClick, onClose, onShowConfirmation, renderConfirmation, ...moreProps } = props;

  const handleClickItem = () => {
    onClick();
    onClose();
  };

  const itemProps = {
    onClick: renderConfirmation !== null ? onShowConfirmation : handleClickItem,
    role: "menuitem",
    isDestructive,
  };

  return (
    <RawButton css={ItemStyles} {...itemProps} {...moreProps}>
      {children}
    </RawButton>
  );
};

Item.displayName = "DropdownMenu.Item";
Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
