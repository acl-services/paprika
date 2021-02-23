import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import RawButton from "@paprika/raw-button";
import Button from "@paprika/button";
import CaretDownIcon from "@paprika/icon/lib/CaretDown";
import CaretUpIcon from "@paprika/icon/lib/CaretUp";
import TimesCircleIcon from "@paprika/icon/lib/TimesCircle";
import useI18n from "@paprika/l10n/lib/useI18n";
import Label from "../Label";
import { handleKeyDownKeyboardKeys, handleKeyUpKeyboardKeys } from "../../helpers/handleKeyboardKeys";
import useListBox from "../../useListBox";
import { OnChangeContext } from "../../store/OnChangeProvider";

import invokeOnChange, {
  sanitizeActionTypes,
  getSelectedOptionSingle,
  getSelectedOptionsMulti,
} from "../../helpers/invokeOnChange";

import * as sc from "./Trigger.styles";
import { getDOMAttributesForListBoxButton } from "../../helpers/DOMAttributes";

const propTypes = {
  /** Custom clear icon */
  clearIcon: PropTypes.node,

  /** Body content of the trigger. */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /** If true it adds a clear button */
  hasClearButton: PropTypes.bool,

  /** Has implicit "All items selected" value when no item is selected */
  hasImplicitAll: PropTypes.bool,

  /** Override the label with a custom one. */
  label: PropTypes.string,

  /** Callback to be executed when the clear button is clicked or activated by keyboard. */
  onClickClear: PropTypes.func,

  /** Callback to be executed when the accept button is clicked or activated by keyboard. */
  onClickFooterAccept: PropTypes.func,

  /** Sets a placeholder for the trigger */
  placeholder: PropTypes.string,

  /** If true the trigger will be hidden */
  isHidden: PropTypes.bool,
};

const defaultProps = {
  clearIcon: null,
  children: <React.Fragment />,
  hasClearButton: true,
  hasImplicitAll: false,
  label: null,
  onClickClear: null,
  onClickFooterAccept: null,
  placeholder: "Select...",
  isHidden: false,
};

export default function Trigger(props) {
  const [state, dispatch] = useListBox();
  const onChangeContext = React.useContext(OnChangeContext);
  const {
    clearIcon,
    placeholder,
    hasClearButton,
    hasImplicitAll,
    label,
    onClickFooterAccept,
    children,
    isHidden,
    onClickClear,
    // eslint-disable-next-line react/prop-types
    onFooterClickAccept,
    ...moreProps
  } = props;
  const {
    isDisabled,
    formElementLabelDescribedBy,
    refTriggerContainer,
    refTrigger,
    isMulti,
    idListBox,
    refLabel,
    size,
  } = state;

  const [triggerButtonId] = React.useState(() => `list-box-trigger_${uuidv4()}`);
  const I18n = useI18n();

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
  }, [refLabel, refTrigger]);

  const handleClickClear = () => {
    if (isDisabled) {
      return;
    }

    if (onClickClear) {
      onClickClear(state, dispatch);
      return;
    }

    if (state.hasFooter) {
      dispatch({
        type: useListBox.types.clear,
        payload: {
          isOpen: false,
          onChangeFn: invokeOnChange(onClickFooterAccept, "list-box:footer:clear"),
        },
      });
      return;
    }

    dispatch({
      type: useListBox.types.clear,
      payload: {
        isOpen: false,
        onChangeFn: invokeOnChange(state.onChange, "list-box:clear"),
      },
    });
  };

  function renderLabel() {
    return state.isInline ? (
      <Label
        activeOption={state.options[state.activeOption]}
        hasImplicitAll={hasImplicitAll}
        isMulti={isMulti}
        options={state.options}
        placeholder={placeholder}
        selectedOptions={state.selectedOptions}
        label={label}
      />
    ) : (
      <RawButton
        id={triggerButtonId.current}
        onClick={handleClick}
        ref={refTrigger}
        onKeyDown={handleKeyDownKeyboardKeys({ state, dispatch, onChangeContext })}
        onKeyUp={handleKeyUpKeyboardKeys({ state, dispatch, onChangeContext })}
        isDisabled={isDisabled}
        data-pka-anchor="list-box-trigger"
        aria-haspopup
        aria-describedby={formElementLabelDescribedBy}
        aria-labelledby={triggerButtonId.current}
      >
        {refLabel && refLabel.current ? (
          <sc.VisuallyHiddenFormLabel>{refLabel.current.innerText}</sc.VisuallyHiddenFormLabel>
        ) : null}
        <Label
          activeOption={state.options[state.activeOption]}
          hasImplicitAll={hasImplicitAll}
          isMulti={isMulti}
          options={state.options}
          placeholder={placeholder}
          selectedOptions={state.selectedOptions}
          label={label}
        />
      </RawButton>
    );
  }

  const hasRenderTrigger = typeof children === "function";

  let renderChildrenProps = null;
  renderChildrenProps = React.useMemo(() => {
    if (hasRenderTrigger) {
      const attributes = {
        dispatch,
        handleKeyDown: handleKeyDownKeyboardKeys({ state, dispatch, onChangeContext }),
        handleKeyUp: handleKeyUpKeyboardKeys({ state, dispatch, onChangeContext }),
        isOpen: state.isOpen,
        onChangeContext,
        propsForTrigger: getDOMAttributesForListBoxButton(idListBox),
        refTrigger,
        types: sanitizeActionTypes(useListBox.types),
      };

      if (isMulti) {
        const [selected, options, current] = getSelectedOptionsMulti(state);

        return children(selected, options, current, attributes);
      }

      const [selected, options] = getSelectedOptionSingle(state);
      return children(selected, options, attributes);
    }
  }, [hasRenderTrigger, isMulti, state, children, dispatch, idListBox, refTrigger, onChangeContext]);

  const caret = state.isOpen ? (
    <CaretUpIcon isDisabled={isDisabled} css={sc.iconStyles} />
  ) : (
    <CaretDownIcon isDisabled={isDisabled} css={sc.iconStyles} />
  );

  const shouldHideClearButton = (state.hasFooter && state.isOpen) || hasRenderTrigger;

  const shouldHideCaret = hasRenderTrigger || state.isInline;

  if (isHidden && state.isInline) {
    return <sc.ListBoxTrigger data-pka-anchor="list-box-trigger" isHidden />;
  }

  return (
    <sc.ListBoxTrigger
      isInline={state.isInline}
      isDisabled={isDisabled}
      ref={refTriggerContainer}
      size={size}
      {...getDOMAttributesForListBoxButton(state.idListBox)()}
      {...moreProps}
    >
      {hasRenderTrigger ? renderChildrenProps : renderLabel()}
      {state.selectedOptions.length && hasClearButton && !shouldHideClearButton ? (
        <sc.ClearButton
          a11yText={I18n.t("listBox.trigger.clear_selection")}
          isSemantic={false}
          isDisabled={isDisabled}
          data-pka-anchor="clear-button"
          kind={Button.types.kind.MINOR}
          onClick={handleClickClear}
          shouldHideCaret={shouldHideCaret}
          size={size}
        >
          {clearIcon || <TimesCircleIcon isDisabled={isDisabled} css={sc.iconStyles} />}
        </sc.ClearButton>
      ) : null}
      {shouldHideCaret ? null : caret}
    </sc.ListBoxTrigger>
  );
}

Trigger.propTypes = propTypes;
Trigger.defaultProps = defaultProps;
Trigger.displayName = "ListBox.Trigger";
