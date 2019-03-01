import React from "react";
import PropTypes from "prop-types";
import { TagButtonStyled } from "./TagButton.styles";
import * as actionTypes from "../../store/actionTypes";

const propTypes = {
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  getDOMAttributesForListBoxButton: PropTypes.func.isRequired, // eslint-disable-line
  state: PropTypes.object.isRequired, // eslint-disable-line
};

export default function TagButton(props) {
  const { state, dispatch, getDOMAttributesForListBoxButton } = props;

  const handleClick = () => {
    dispatch({ type: actionTypes.openPopover });
  };

  return (
    <TagButtonStyled onClick={handleClick} {...getDOMAttributesForListBoxButton()} ref={state.refTrigger}>
      {props.children}
    </TagButtonStyled>
  );
}

TagButton.propTypes = propTypes;
