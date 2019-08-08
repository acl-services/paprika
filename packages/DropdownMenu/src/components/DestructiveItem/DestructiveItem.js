import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";

import ItemStyles from "../../Item.styles";

const { func, node } = PropTypes;

const propTypes = {
  /** HTML for each item */
  children: node.isRequired,

  /** Callback to be executed when button is clicked */
  onClick: func,

  /** Callback to be executed when dropdown needs to be closed */
  onClose: func,

  /** Callback to be executed when delete item is clicked */
  onShowConfirmation: func.isRequired,

  /** Render prop to render the replacement node */
  renderConfirmation: func.isRequired,
};

const defaultProps = {
  onClick: () => {},
  onClose: () => {},
};

const DestructiveItem = props => {
  const { children, onClick, onClose, onShowConfirmation, renderConfirmation, ...moreProps } = props;

  const destructiveItemProps = {
    onClick: onShowConfirmation,
    role: "menuitem",
  };

  return (
    <RawButton css={ItemStyles} {...destructiveItemProps} {...moreProps}>
      {children}
    </RawButton>
  );
};

DestructiveItem.displayName = "DropdownMenu.DestructiveItem";
DestructiveItem.propTypes = propTypes;
DestructiveItem.defaultProps = defaultProps;

export default DestructiveItem;
