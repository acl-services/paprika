import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
import { getDOMAttributesForListBoxContainer } from "../../helpers/DOMAttributes";
import handleKeyboardKeys from "../../helpers/handleKeyboardKeys";
import useListBox from "../../useListBox";

const propTypes = {
  children: PropTypes.node.isRequired,
};
const defaultProps = {};

const handleBlur = (state, dispatch) => () => {
  const { refListBoxContainer } = state;

  if (state.isDisabled) {
    return;
  }

  // requestAnimationFrame give time to process
  // the element that has received the click event
  // via document.activeElement instead of returning
  // the body element automatically
  window.requestAnimationFrame(() => {
    // the trigger should handle the close and open not the onBlur event
    if (state.refTriggerContainer.current && state.refTriggerContainer.current.contains(document.activeElement)) {
      return;
    }

    if (
      refListBoxContainer &&
      refListBoxContainer.current &&
      !refListBoxContainer.current.contains(document.activeElement)
    ) {
      dispatch({ type: useListBox.types.closePopover });

      if (state.hasFooter) {
        dispatch({ type: useListBox.types.cancel });
      }
    }
  });
};

export default function Content(props) {
  const [state, dispatch] = useListBox();
  const { refListBoxContainer } = state;

  /* NOTE no idea what ROLE should be this div when the ListBox is INLINE */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  if (state.isInline) {
    return (
      <div
        {...getDOMAttributesForListBoxContainer({ isInline: true })}
        onKeyDown={handleKeyboardKeys(state, dispatch)}
        ref={refListBoxContainer}
        data-ppk-anchor="listbox-content-inline"
      >
        {props.children}
      </div>
    );
  }
  /* eslint-enable jsx-a11y/no-static-element-interactions */

  return (
    <Popover.Content
      onBlur={handleBlur(state, dispatch)}
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
