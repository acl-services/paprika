import React from "react";
import PropTypes from "prop-types";
import TriggerStyled from "./Trigger.styles";
import useStore from "../../../../store/useStore";
import * as actionTypes from "../../../../store/actionTypes";
import { getDOMAttributesForListBoxButton } from "../../../../helpers/DOMAttributes";

const propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Trigger(props) {
  const [state, dispatch] = useStore();
  const handleClick = () => {
    dispatch({ type: actionTypes.openPopover });
  };

  return (
    <TriggerStyled onClick={handleClick} {...getDOMAttributesForListBoxButton()} ref={state.refTrigger}>
      {props.children}
    </TriggerStyled>
  );
}

Trigger.propTypes = propTypes;
