import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import useListBox from "@paprika/listbox/store/useListBox";
import { getDOMAttributesForListBoxButton } from "@paprika/listbox/helpers/DOMAttributes";
import triggerStyles from "./Trigger.styles";

const propTypes = {
  hasCustomTags: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Trigger(props) {
  const [state, dispatch] = useListBox();
  const handleClick = () => {
    if (props.hasCustomTags) {
      state.refFilterInput.current.focus();
    }
    dispatch({ type: useListBox.types.openPopover });
  };

  return (
    <RawButton css={triggerStyles} onClick={handleClick} {...getDOMAttributesForListBoxButton()} ref={state.refTrigger}>
      {props.children}
    </RawButton>
  );
}

Trigger.propTypes = propTypes;
