import React from "react";
import PropTypes from "prop-types";
import { BoxContainerStyled } from "./Box.styles";
import useListBox from "../../store/useListBox";

const propTypes = {
  children: PropTypes.node.isRequired,
};
const defaultProps = {};

export default function Box(props) {
  const [state] = useListBox();

  if (state.selectedOptions.length === Object.keys(state.options).length && state.hideOptionOnSelected) {
    return null;
  }

  return (
    <BoxContainerStyled isInlineDisplay={state.isInlineDisplay} triggerWidth={state.triggerWidth}>
      {props.children}
    </BoxContainerStyled>
  );
}

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;
