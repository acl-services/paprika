import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Popover.styles";
import useListBox from "../../useListBox";

const propTypes = {
  /** Body content of the PopOver. */
  children: PropTypes.node, // eslint-disable-line

  /** Sets the z-index value of the PopOver */
  zIndex: PropTypes.number,
};

const defaultProps = {
  zIndex: 100,
};

export default function Popover(props) {
  const [state] = useListBox();

  const { children, zIndex } = props;

  return (
    <sc.PopoverStyled {...props} isOpen={state.isOpen} maxWidth={state.triggerWidth} offset={0} zIndex={zIndex}>
      {children}
    </sc.PopoverStyled>
  );
}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;
Popover.displayName = "ListBox.Popover";
