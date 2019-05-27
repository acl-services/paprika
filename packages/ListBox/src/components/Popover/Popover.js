import React from "react";
import PropTypes from "prop-types";
import PopoverStyled from "./Popover.styles";
import useListBox from "../../useListBox";

const propTypes = {
  children: PropTypes.node.isRequired,
  zIndex: PropTypes.number,
};

const defaultProps = {
  zIndex: 100,
};

export default function Popover(props) {
  const [state] = useListBox();

  const { children, zIndex } = props;

  return (
    <PopoverStyled {...props} isOpen={state.isOpen} maxWidth={state.triggerWidth} offset={0} zIndex={zIndex}>
      {children}
    </PopoverStyled>
  );
}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;
Popover.componentType = "ListBox.Popover";
