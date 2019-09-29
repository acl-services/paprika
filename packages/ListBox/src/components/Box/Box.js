import React from "react";
import PropTypes from "prop-types";
import { BoxContainerStyled } from "./Box.styles";
import useListBox from "../../useListBox";

const propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Box(props) {
  const [state] = useListBox();

  return (
    <BoxContainerStyled data-ppk-anchor="listbox-box" isInline={state.isInline} triggerWidth={state.triggerWidth}>
      {props.children}
    </BoxContainerStyled>
  );
}

Box.propTypes = propTypes;
