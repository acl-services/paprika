import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import Button from "@paprika/button";
import CaretDownIcon from "@paprika/icon/lib/CaretDown";
import CaretUpIcon from "@paprika/icon/lib/CaretUp";
import TimesCircleIcon from "@paprika/icon/lib/TimesCircle";
import Label from "../Label";
import handleKeyboardKeys from "../../helpers/handleKeyboardKeys";
import useListBox from "../../useListBox";
import invokeOnChange, {
  sanitizeActionTypes,
  getSelectedOptionSingle,
  getSelectedOptionsMulti,
} from "../../helpers/invokeOnChange";

import { ListBoxTriggerStyled, TriggerActionIconsContainer, ClearButtonStyled, iconStyles } from "./Trigger.styles";
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
  const { placeholder, hasClearButton, onClickFooterAccept, children } = props;
  const { isDisabled, refTriggerContainer, refTrigger, isMulti, idListBox } = state;

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
          onChangeFn: invokeOnChange(onClickFooterAccept, "listbox:footer:clear"),
        },
      });
      return;
    }

    dispatch({
      type: useListBox.types.clear,
      payload: {
        isOpen: false,
        onChangeFn: invokeOnChange(state.onChange, "listbox:clear"),
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
        data-pka-anchor="listbox-trigger"
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

  const hasRenderTrigger = typeof children === "function";

  let renderChildrenProps = null;
  renderChildrenProps = React.useMemo(() => {
    if (hasRenderTrigger) {
      return children(isMulti ? getSelectedOptionsMulti(state) : getSelectedOptionSingle(state), dispatch, {
        propsForTrigger: getDOMAttributesForListBoxButton(idListBox),
        types: sanitizeActionTypes(useListBox.types),
        refTrigger,
      });
    }
  }, [hasRenderTrigger, children, isMulti, state, dispatch, idListBox, refTrigger]);

  const caret = state.isOpen ? (
    <CaretUpIcon isDisabled={isDisabled} css={iconStyles} />
  ) : (
    <CaretDownIcon isDisabled={isDisabled} css={iconStyles} />
  );

  const shouldHideClearButton = (state.hasFooter && state.isOpen) || hasRenderTrigger;

  const shouldHideCaret = hasRenderTrigger || state.isInline;

  return (
    <ListBoxTriggerStyled
      isInline={state.isInline}
      isDisabled={isDisabled}
      ref={refTriggerContainer}
      {...getDOMAttributesForListBoxButton(state.idListBox)()}
    >
      {hasRenderTrigger ? renderChildrenProps : renderLabel()}
      <TriggerActionIconsContainer>
        {state.selectedOptions.length && hasClearButton && !shouldHideClearButton ? (
          <ClearButtonStyled
            isDisabled={isDisabled}
            data-pka-anchor="clear-button"
            kind={Button.Kinds.MINOR}
            onClick={handleClickClear}
          >
            <TimesCircleIcon isDisabled={isDisabled} css={iconStyles} />
          </ClearButtonStyled>
        ) : null}
        {shouldHideCaret ? null : caret}
      </TriggerActionIconsContainer>
    </ListBoxTriggerStyled>
  );
}

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;
Trigger.componentType = "ListBox.Trigger";
