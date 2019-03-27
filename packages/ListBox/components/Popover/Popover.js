import React from "react";
import PropTypes from "prop-types";
import PopoverStyled from "./Popover.styles";
import useListBox from "../../store/useListBox";

const propTypes = {
  children: PropTypes.node.isRequired,
  zIndex: PropTypes.number.isRequired,
};
const defaultProps = {};

export default function Popover(props) {
  const [state] = useListBox();

  const { children, zIndex } = props;

  return (
    <PopoverStyled {...props} zIndex={zIndex} offset={0} maxWidth={state.triggerWidth} isOpen={state.isPopoverOpen}>
      {children}
    </PopoverStyled>
  );
}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;
