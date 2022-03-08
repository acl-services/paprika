import React from "react";
import PropTypes from "prop-types";
import { getActiveElement } from "@paprika/helpers";

import { getDOMAttributesForListBox } from "../../helpers/DOMAttributes";
import { handleKeyDownKeyboardKeys } from "../../helpers/handleKeyboardKeys";
import useListBox from "../../useListBox";
import { OnChangeContext } from "../../store/OnChangeProvider";
import { PropsContext } from "../../store/PropsProvider";

import * as sc from "./Content.styles";

const handleBlur = (state, dispatch, onCancelFooter) => () => {
  const { refListBoxContainer } = state;

  // requestAnimationFrame give time to process
  // the element that has received the click event
  // via document.activeElement instead of returning
  // the body element automatically
  window.requestAnimationFrame(() => {
    const activeElement = getActiveElement();

    // in case the on blur happens on the trigger it should ignore it and let the trigger to control the flow of the
    // popover
    if (state.refTriggerContainer.current && state.refTriggerContainer.current.contains(activeElement)) {
      return;
    }

    if (refListBoxContainer && refListBoxContainer.current && !refListBoxContainer.current.contains(activeElement)) {
      dispatch({ type: useListBox.types.closePopover });

      if (state.hasFooter) {
        dispatch({ type: useListBox.types.cancel });
        if (onCancelFooter) onCancelFooter();
      }
    }
  });
};

export default function Content(props) {
  const { children, onCancelFooter, ...moreProps } = props;
  const onChangeContext = React.useContext(OnChangeContext);
  const [state, dispatch] = useListBox();
  const { refListBoxContainer } = state;
  const providedProps = React.useContext(PropsContext);
  const { a11yProps, idListBox, isInline, refLabel, contentOffsetX, contentOffsetY } = providedProps;

  if (isInline) {
    return (
      <sc.Content
        {...a11yProps}
        {...moreProps}
        {...getDOMAttributesForListBox({ idListBox, refLabel, ...state })}
        data-pka-anchor="list-box-content-inline" // TODO: rename "list-box.content-inline"
        onKeyDown={handleKeyDownKeyboardKeys({ providedProps, state, dispatch, onChangeContext })}
        ref={refListBoxContainer}
        role="listbox"
        tabIndex="0"
      >
        {children}
      </sc.Content>
    );
  }

  return (
    <sc.PopoverContent
      {...moreProps}
      {...getDOMAttributesForListBox({ idListBox, refLabel, ...state })}
      contentOffsetX={contentOffsetX}
      contentOffsetY={contentOffsetY}
      onBlur={handleBlur(state, dispatch, onCancelFooter)}
      onKeyDown={handleKeyDownKeyboardKeys({ providedProps, state, dispatch, onChangeContext })}
      ref={refListBoxContainer}
      role="listbox"
    >
      {children}
    </sc.PopoverContent>
  );
}

Content.displayName = "ListBox.Content";

Content.propTypes = {
  children: PropTypes.node,
  onCancelFooter: PropTypes.func,
};

Content.defaultProps = {
  children: null,
  onCancelFooter: null,
};
