import React from "react";
import PropTypes from "prop-types";
import { TagButtonStyled } from "./TagButton.styles";
import useStore from "../../store/useStore";
import * as actionTypes from "../../store/actionTypes";
import { getDOMAttributesForListBoxButton } from "../../helpers/DOMAttributes";

const propTypes = {
  children: PropTypes.node.isRequired,
};

export default function TagButton(props) {
  const [state, dispatch] = useStore();
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
