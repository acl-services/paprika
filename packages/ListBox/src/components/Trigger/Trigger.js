import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import Label from "../Label";
import handleKeyboardKeys from "../../helpers/handleKeyboardKeys";
import useListBox from "../../useListBox";
import applyOnChange, {
  cleanActionTypes,
  getSelectedOptionSingle,
  getSelectedOptionsMulti,
} from "../../helpers/applyOnChange";

import {
  ListBoxTriggerStyled,
  TriggerArrowStyled,
  RawButtonClearButtonStyled,
  TriggerActionIconsContainer,
} from "./Trigger.styles";
import { getDOMAttributesForListBoxButton } from "../../helpers/DOMAttributes";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  hasClearButton: PropTypes.bool,
  onClickClear: PropTypes.func,
  onClickFooterAccept: PropTypes.func,
  placeholder: PropTypes.string,
};

const defaultProps = {
  children: <React.Fragment />,
  hasClearButton: true,
  onClickClear: null,
  onClickFooterAccept: null,
  placeholder: "Select...",
};

export default function Trigger(props) {
  const [state, dispatch] = useListBox();
  const { placeholder, hasClearButton, onClickFooterAccept } = props;

  const { isDisabled, refTriggerContainer, refTrigger, isMulti } = state;

  const handleClick = () => {
    if (isDisabled) {
      return;
    }

    dispatch({ type: useListBox.types.togglePopover });
  };

  const handleClickClear = () => {
    if (isDisabled) {
      return;
    }

    if (props.onClickClear) {
      props.onClickClear(state, dispatch);
      return;
    }

    if (state.hasFooter) {
      dispatch({
        type: useListBox.types.clear,
        payload: {
          isOpen: false,
          onChangeFn: applyOnChange(onClickFooterAccept, "listbox:footer:clear"),
        },
      });
      return;
    }

    dispatch({
      type: useListBox.types.clear,
      payload: {
        isOpen: false,
        onChangeFn: applyOnChange(state.onChange, "listbox:clear"),
      },
    });
  };

  function renderLabel() {
    return state.isInline ? (
      <Label
        activeOption={state.options[state.activeOption]}
        isMulti={isMulti}
        options={state.options}
        placeholder={placeholder}
        selectedOptions={state.selectedOptions}
      />
    ) : (
      <RawButton
        type="button"
        onClick={handleClick}
        ref={refTrigger}
        onKeyDown={handleKeyboardKeys(state, dispatch)}
        onKeyUp={() => {}}
        isDisabled={isDisabled}
        data-qa-anchor="listbox-trigger"
      >
        <Label
          activeOption={state.options[state.activeOption]}
          isMulti={isMulti}
          options={state.options}
          placeholder={placeholder}
          selectedOptions={state.selectedOptions}
        />
      </RawButton>
    );
  }

  const hasRenderTrigger = typeof props.children === "function";

  let renderChildrenProps = null;
  if (hasRenderTrigger) {
    renderChildrenProps = React.useMemo(() => {
      return props.children(state.isMulti ? getSelectedOptionsMulti(state) : getSelectedOptionSingle(state), dispatch, {
        propsForTrigger: getDOMAttributesForListBoxButton(state.idListBox),
        types: cleanActionTypes(useListBox.types),
        refTrigger: state.refTrigger,
      });
    }, [props.children]);
  }

  return (
    <ListBoxTriggerStyled
      data-qa-anchor="trigger"
      isInline={state.isInline}
      isDisabled={isDisabled}
      ref={refTriggerContainer}
      {...getDOMAttributesForListBoxButton(state.idListBox)()}
    >
      {hasRenderTrigger ? renderChildrenProps : renderLabel()}
      <TriggerActionIconsContainer>
        {hasClearButton || state.selectedOptions.length ? (
          <RawButtonClearButtonStyled
            hasRenderTrigger={hasRenderTrigger}
            isDisabled={isDisabled}
            onClick={handleClickClear}
            isOpen={state.isOpen}
            hasFooter={state.hasFooter}
          >
            <span dangerouslySetInnerHTML={{ __html: "&times;" }} />
          </RawButtonClearButtonStyled>
        ) : null}
        <TriggerArrowStyled
          hasRenderTrigger={hasRenderTrigger}
          isDisabled={isDisabled}
          isOpen={state.isOpen}
          isInline={state.isInline}
          dangerouslySetInnerHTML={{ __html: "&#x25BC;" }}
        />
      </TriggerActionIconsContainer>
    </ListBoxTriggerStyled>
  );
}

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;
Trigger.componentType = "ListBox.Trigger";
