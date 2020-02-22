import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import RawButton from "@paprika/raw-button";
import Button from "@paprika/button";
import CaretDownIcon from "@paprika/icon/lib/CaretDown";
import CaretUpIcon from "@paprika/icon/lib/CaretUp";
import TimesCircleIcon from "@paprika/icon/lib/TimesCircle";
import Label from "../Label";
import handleKeyboardKeys from "../../helpers/handleKeyboardKeys";
import useListBox from "../../useListBox";
import OnChangeContext from "../../store/OnChangeProvider";

import invokeOnChange, {
  sanitizeActionTypes,
  getSelectedOptionSingle,
  getSelectedOptionsMulti,
} from "../../helpers/invokeOnChange";

import { ListBoxTriggerStyled, ClearButtonStyled, iconStyles, VisuallyHiddenFormLabelStyled } from "./Trigger.styles";
import { getDOMAttributesForListBoxButton } from "../../helpers/DOMAttributes";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  hasClearButton: PropTypes.bool,
  onClickClear: PropTypes.func,
  onClickFooterAccept: PropTypes.func,
  placeholder: PropTypes.string,
  isHidden: PropTypes.bool,
};

const defaultProps = {
  children: <React.Fragment />,
  hasClearButton: true,
  onClickClear: null,
  onClickFooterAccept: null,
  placeholder: "Select...",
  isHidden: false,
};

export default function Trigger(props) {
  const [state, dispatch] = useListBox();
  const onChangeContext = React.useContext(OnChangeContext);
  const { placeholder, hasClearButton, onClickFooterAccept, children, isHidden } = props;
  const {
    isDisabled,
    formElementLabelDescribedBy,
    refTriggerContainer,
    refTrigger,
    isMulti,
    idListBox,
    refLabel,
  } = state;
  const triggerButtonId = React.useRef(nanoid());

  const handleClick = () => {
    if (isDisabled) {
      return;
    }

    dispatch({ type: useListBox.types.togglePopover });
  };

  React.useEffect(() => {
    const $label = refLabel && refLabel.current;

    if (!$label) return;

    function handleClickLabel() {
      refTrigger.current.focus();
    }

    $label.addEventListener("click", handleClickLabel);

    return () => {
      $label.removeEventListener("click", handleClickLabel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        id={triggerButtonId.current}
        onClick={handleClick}
        ref={refTrigger}
        onKeyDown={handleKeyboardKeys({ state, dispatch, onChangeContext })}
        onKeyUp={() => {}}
        isDisabled={isDisabled}
        data-pka-anchor="listbox-trigger"
        aria-describedby={formElementLabelDescribedBy}
        aria-labelledby={triggerButtonId.current}
      >
        {refLabel && refLabel.current ? (
          <VisuallyHiddenFormLabelStyled>{refLabel.current.innerText}</VisuallyHiddenFormLabelStyled>
        ) : null}
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
      if (isMulti) {
        const [selected, options, current] = getSelectedOptionsMulti(state);

        return children(selected, options, current, {
          dispatch,
          propsForTrigger: getDOMAttributesForListBoxButton(idListBox),
          types: sanitizeActionTypes(useListBox.types),
          refTrigger,
          isOpen: state.isOpen,
        });
      }

      const [selected, options] = getSelectedOptionSingle(state);
      return children(selected, options, {
        dispatch,
        propsForTrigger: getDOMAttributesForListBoxButton(idListBox),
        types: sanitizeActionTypes(useListBox.types),
        refTrigger,
        isOpen: state.isOpen,
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

  if (isHidden && state.isInline) {
    return <ListBoxTriggerStyled data-pka-anchor="listbox-trigger" isHidden />;
  }

  return (
    <ListBoxTriggerStyled
      isInline={state.isInline}
      isDisabled={isDisabled}
      ref={refTriggerContainer}
      {...getDOMAttributesForListBoxButton(state.idListBox)()}
    >
      {hasRenderTrigger ? renderChildrenProps : renderLabel()}
      {state.selectedOptions.length && hasClearButton && !shouldHideClearButton ? (
        <ClearButtonStyled
          isSemantic={false}
          isDisabled={isDisabled}
          data-pka-anchor="clear-button"
          kind={Button.Kinds.MINOR}
          onClick={handleClickClear}
          shouldHideCaret={shouldHideCaret}
        >
          <TimesCircleIcon isDisabled={isDisabled} css={iconStyles} />
        </ClearButtonStyled>
      ) : null}
      {shouldHideCaret ? null : caret}
    </ListBoxTriggerStyled>
  );
}

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;
Trigger.displayName = "ListBox.Trigger";
