import React from "react";
import PropTypes from "prop-types";
import { BoxContainerStyled } from "./Box.styles";
import useListBox from "../../useListBox";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {};

export default function Box(props) {
  const [state] = useListBox();

  return (
    <BoxContainerStyled isInline={state.isInline} triggerWidth={state.triggerWidth}>
      {props.children}
    </BoxContainerStyled>
  );
}

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;
