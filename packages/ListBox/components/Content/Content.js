import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
import { getDOMAttributesForListBoxContainer } from "../../helpers/DOMAttributes";
import handleKeyboardKeys from "../../helpers/handleKeyboardKeys";
import * as actionTypes from "../../store/actionTypes";
import useStore from "../../store/useStore";

const propTypes = {
  children: PropTypes.node.isRequired,
};
const defaultProps = {};

export default function Content(props) {
  const [state, dispatch] = useStore();
  const { refListBoxContainer } = state;
  const handleBlur = () => {
    if (state.isDisabled) {
      return;
    }

    // requestAnimationFrame give time to process
    // the element that has received the click event
    // via document.activeElement instead of returning
    // the body element automatically
    window.requestAnimationFrame(() => {
      if (
        refListBoxContainer &&
        refListBoxContainer.current &&
        !refListBoxContainer.current.contains(document.activeElement)
      ) {
        dispatch({ type: actionTypes.closePopover });
      }
    });
  };

  return (
    <Popover.Content
      onBlur={handleBlur}
      ref={refListBoxContainer}
      {...getDOMAttributesForListBoxContainer()}
      onKeyDown={handleKeyboardKeys(state, dispatch)}
    >
      {props.children}
    </Popover.Content>
  );
}

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
