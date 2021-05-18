import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
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
  const { a11yProps, idListBox, isInline, refLabel } = providedProps;

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
    <Popover.Content
      {...getDOMAttributesForListBox({ idListBox, refLabel, ...state })}
      onBlur={handleBlur(state, dispatch, onCancelFooter)}
      onKeyDown={handleKeyDownKeyboardKeys({ providedProps, state, dispatch, onChangeContext })}
      ref={refListBoxContainer}
      role="listbox"
    >
      {children}
    </Popover.Content>
  );
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
  onCancelFooter: PropTypes.func,
};

Content.defaultProps = {
  onCancelFooter: null,
};
