import React from "react";
import PropTypes from "prop-types";
import { ListBoxContainerStyled } from "../../ListBox.styles";
import useStore from "../../store/useStore";

const propTypes = {
  children: PropTypes.node.isRequired,
};
const defaultProps = {};

export default function Box(props) {
  const [state] = useStore();
  return <ListBoxContainerStyled triggerWidth={state.triggerWidth}>{props.children}</ListBoxContainerStyled>;
}

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;
