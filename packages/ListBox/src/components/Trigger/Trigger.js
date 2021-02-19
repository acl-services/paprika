import React from "react";
import PropTypes from "prop-types";
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
import { PropsContext } from "../../store/PropsProvider";
import invokeOnChange, {
  sanitizeActionTypes,
  getSelectedOptionSingle,
  getSelectedOptionsMulti,
} from "../../helpers/invokeOnChange";
import * as sc from "./Trigger.styles";
import { getDOMAttributesForListBoxButton } from "../../helpers/DOMAttributes";

export default function Trigger(props) {
  const I18n = useI18n();
  const [state, dispatch] = useListBox();
  const onChangeContext = React.useContext(OnChangeContext);
  const providedProps = React.useContext(PropsContext);

  const {
    children,
    clearIcon,
    hasClearButton,
    hasImplicitAll,
    isHidden,
    label,
    onClickClear,
    onClickFooterAccept,
    placeholder,
    morePropsForTrigger,
    ...moreProps
  } = props;
  const { hasError, idListBox, isReadOnly } = providedProps;
  const { isDisabled, isMulti, refLabel, refTrigger, refTriggerContainer, size } = state;

  const idFormLabel = React.useRef();
  React.useEffect(() => {
    const $label = refLabel && refLabel.current;
    if (!$label) return;

    const possibleId = $label.getAttribute("id");
    if (possibleId) {
      idFormLabel.current = possibleId;
    } else {
      const newId = `${idListBox}__form-label`;
      $label.setAttribute("id", newId);
      idFormLabel.current = newId;
    }

    function handleClickLabel() {
      refTrigger.current.focus();
    }

    $label.addEventListener("click", handleClickLabel);

    return () => {
      $label.removeEventListener("click", handleClickLabel);
    };
  }, [refLabel, refTrigger, idListBox]);

  const handleClick = () => {
    if (state.isOpen) {
      dispatch({ type: useListBox.types.closePopover });
      return;
    }

    dispatch({ type: useListBox.types.openPopover });
  };

  const handleKeyUp = event => {
    if (event.key === "Escape") {
      dispatch({ type: useListBox.types.closePopover });
      return;
    }

    if ([" ", "Enter", "ArrowDown"].includes(event.key)) {
      dispatch({ type: useListBox.types.openPopover });
    }
  };

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
    return state.isInline || isReadOnly ? (
      <Label
        activeOption={state.options[state.activeOption]}
        hasImplicitAll={hasImplicitAll}
        id={`${idListBox}__label`}
        isDisabled={isDisabled}
        isMulti={isMulti}
        label={label}
        options={state.options}
        placeholder={placeholder}
        selectedOptions={state.selectedOptions}
      />
    ) : (
      <RawButton
        {...getDOMAttributesForListBoxButton({
          idListBox,
          idFormLabel: idFormLabel.current,
          refLabel,
        })}
        {...morePropsForTrigger}
        data-pka-anchor="list-box-trigger"
        isDisabled={isDisabled}
        onClick={handleClick}
        onKeyUp={handleKeyUp}
        ref={refTrigger}
      >
        <Label
          activeOption={state.options[state.activeOption]}
          hasImplicitAll={hasImplicitAll}
          id={`${idListBox}__label`}
          isDisabled={isDisabled}
          isMulti={isMulti}
          label={label}
          options={state.options}
          placeholder={placeholder}
          selectedOptions={state.selectedOptions}
        />
      </RawButton>
    );
  }

  const hasRenderTrigger = typeof children === "function";

  const renderChildrenProps = React.useMemo(() => {
    if (hasRenderTrigger) {
      const attributes = {
        dispatch,
        handleKeyDown: handleKeyDownKeyboardKeys({ state, dispatch, onChangeContext }),
        handleKeyUp: handleKeyUpKeyboardKeys({ state, dispatch, onChangeContext }),
        isOpen: state.isOpen,
        isReadOnly,
        onChangeContext,
        propsForTrigger: () =>
          getDOMAttributesForListBoxButton({
            idListBox,
            idFormLabel: idFormLabel.current,
            refLabel,
          }),
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
  }, [
    children,
    dispatch,
    hasRenderTrigger,
    idListBox,
    isMulti,
    isReadOnly,
    onChangeContext,
    refLabel,
    refTrigger,
    state,
  ]);

  const shouldHideClearButton =
    !hasClearButton ||
    hasRenderTrigger ||
    isReadOnly ||
    (state.hasFooter && state.isOpen) ||
    state.selectedOptions.length === 0;
  const shouldHideCaret = hasRenderTrigger || state.isInline;

  if (isHidden && state.isInline) {
    return <sc.ListBoxTrigger data-pka-anchor="list-box-trigger" isHidden />;
  }

  return (
    <sc.ListBoxTrigger
      hasError={hasError}
      isDisabled={isDisabled}
      isInline={state.isInline}
      isReadOnly={isReadOnly}
      ref={refTriggerContainer}
      size={size}
      {...moreProps}
    >
      {hasRenderTrigger ? renderChildrenProps : renderLabel()}
      {shouldHideClearButton ? null : (
        <sc.ClearButton
          a11yText={I18n.t("listBox.trigger.clear_selection")}
          data-pka-anchor="clear-button"
          isDisabled={isDisabled}
          isSemantic={false}
          kind={Button.types.kind.MINOR}
          onClick={handleClickClear}
          shouldHideCaret={shouldHideCaret}
          size={size}
        >
          {clearIcon || <TimesCircleIcon isDisabled={isDisabled} css={sc.iconStyles} />}
        </sc.ClearButton>
      )}
      {shouldHideCaret ? null : (
        <sc.CaretIcon as={state.isOpen ? CaretUpIcon : CaretDownIcon} isDisabled={isDisabled} isReadOnly={isReadOnly} />
      )}
    </sc.ListBoxTrigger>
  );
}

Trigger.displayName = "ListBox.Trigger";

Trigger.propTypes = {
  /* More props added to ListBox to add to trigger button for a11y */
  morePropsForTrigger: PropTypes.any, // eslint-disable-line react/forbid-prop-types

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

Trigger.defaultProps = {
  morePropsForTrigger: null,
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
