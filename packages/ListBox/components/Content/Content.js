import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
import { ContentInlineStyled } from "./Content.styles";
import { getDOMAttributesForListBoxContainer } from "../../helpers/DOMAttributes";
import handleKeyboardKeys from "../../helpers/handleKeyboardKeys";
import * as actionTypes from "../../store/actionTypes";
import useListBox from "../../store/useListBox";

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
    // this allowed elements outside of the popover container to keep operating
    // without forcing to close the popover after the onblur event.
    // the downside of this is that now the element outside should implemented
    // the onblur event to close when the user click tab or click on the document.body
    if (state.preventOnBlurOnTrigger) return;

    if (
      refListBoxContainer &&
      refListBoxContainer.current &&
      !refListBoxContainer.current.contains(document.activeElement)
    ) {
      dispatch({ type: actionTypes.closePopover });
    }
  });
};

export default function Content(props) {
  const [state, dispatch] = useListBox();
  const { refListBoxContainer } = state;

  if (state.isInlineDisplay) {
    return (
      <ContentInlineStyled
        {...getDOMAttributesForListBoxContainer()}
        onKeyDown={handleKeyboardKeys(state, dispatch)}
        ref={refListBoxContainer}
      >
        {props.children}
      </ContentInlineStyled>
    );
  }

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
