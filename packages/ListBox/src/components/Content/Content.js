import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
import { getDOMAttributesForListBoxContainer } from "../../helpers/DOMAttributes";
import handleKeyboardKeys from "../../helpers/handleKeyboardKeys";
import useListBox from "../../useListBox";
import { OnChangeContext } from "../../store/OnChangeProvider";
import { ContentStyled } from "./Content.styles";

const propTypes = {
  /** Body content of the content. */
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
    if (state.refTriggerContainer.current && state.refTriggerContainer.current.contains(document.activeElement)) {
      // close the popover if the target is the trigger, this make easier to handle tab events
      dispatch({ type: useListBox.types.closePopover });
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

const handleContentFocusChange = (hasFocus, dispatch) =>
  dispatch({ type: useListBox.types.setListBoxHasFocus, payload: { hasFocus } });

export default function Content(props) {
  const onChangeContext = React.useContext(OnChangeContext);
  const [state, dispatch] = useListBox();
  const { refListBoxContainer } = state;

  /* NOTE no idea what ROLE should be this div when the ListBox is INLINE */
  if (state.isInline) {
    return (
      <ContentStyled
        {...getDOMAttributesForListBoxContainer({ isInline: true })}
        onFocus={() => {
          handleContentFocusChange(true, dispatch);
        }}
        onBlur={() => {
          handleContentFocusChange(false, dispatch);
        }}
        onKeyDown={handleKeyboardKeys({ state, dispatch, onChangeContext })}
        ref={refListBoxContainer}
        data-pka-anchor="listbox-content-inline"
      >
        {props.children}
      </ContentStyled>
    );
  }

  return (
    <Popover.Content
      onBlur={handleBlur(state, dispatch)}
      ref={refListBoxContainer}
      {...getDOMAttributesForListBoxContainer()}
      onKeyDown={handleKeyboardKeys({ state, dispatch, onChangeContext })}
    >
      {props.children}
    </Popover.Content>
  );
}

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
