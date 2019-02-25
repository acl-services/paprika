import React from "react";
import PropTypes from "prop-types";
import { ListBoxContainerStyled } from "../../ListBox.styles";

const propTypes = {
  state: PropTypes.any,
  children: PropTypes.node.isRequired,
};
const defaultProps = {};

export default function Box(props) {
  const { state } = props;
  return <ListBoxContainerStyled triggerWidth={state.triggerWidth}>{props.children}</ListBoxContainerStyled>;
}

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;
