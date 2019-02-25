import React from "react";
import PropTypes from "prop-types";
import { PopoverStyled } from "../../ListBox.styles";

const propTypes = {
  state: PropTypes.any,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.any,
};
const defaultProps = {};

export default function Popover(props) {
  const { state, children } = props;
  return (
    <PopoverStyled {...props} offset={0} maxWidth={state.triggerWidth} isOpen={state.isPopoverOpen}>
      {children}
    </PopoverStyled>
  );
}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;
