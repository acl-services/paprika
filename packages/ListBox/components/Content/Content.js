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

const Content = React.forwardRef((props, ref) => {
  const [state, dispatch] = useStore();
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
        state.refListBoxContainer &&
        state.refListBoxContainer.current &&
        !state.refListBoxContainer.current.contains(document.activeElement)
      ) {
        dispatch({ type: actionTypes.closePopover });
      }
    });
  };

  return (
    <Popover.Content
      onBlur={handleBlur}
      ref={ref}
      {...getDOMAttributesForListBoxContainer()}
      onKeyDown={handleKeyboardKeys(state, dispatch)}
    >
      {props.children}
    </Popover.Content>
  );
});

export default Content;

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
