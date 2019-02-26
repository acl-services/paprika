import React from "react";
import PropTypes from "prop-types";
import { PopoverStyled } from "../../ListBox.styles";
import useStore from "../../store/useStore";

const propTypes = {
  children: PropTypes.node.isRequired,
};
const defaultProps = {};

export default function Popover(props) {
  const [state] = useStore();

  const { children } = props;
  return (
    <PopoverStyled {...props} offset={0} maxWidth={state.triggerWidth} isOpen={state.isPopoverOpen}>
      {children}
    </PopoverStyled>
  );
}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;
