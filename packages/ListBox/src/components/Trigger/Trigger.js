import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import Button from "@paprika/button";
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
    ...moreProps
  } = props;

  const { a11yProps, hasError, idListBox, isDisabled, isInline, isReadOnly, refLabel, size } = providedProps;

  const {
    activeOption,
    hasFooter,
    isOpen,
    isMulti,
    onChange,
    options,
    refTrigger,
    refTriggerContainer,
    selectedOptions,
  } = state;

  const placeholder = props.placeholder || providedProps.placeholder;

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

  React.useEffect(() => {
    if (
      isOpen &&
      document.activeElement &&
      document.activeElement.dataset?.pkaAnchor === "list-box-trigger" &&
      state.selectedOptions.length &&
      !state.isMulti
    ) {
      const id = setTimeout(() => {
        document.getElementById(state.options[state.selectedOptions[0]].id).focus();
      }, 350); // popover animation :/

      return () => {
        clearTimeout(id);
      };
    }
  }, [isOpen, state.options, state.selectedOptions, state.isMulti]);

  const handleClick = () => {
    if (isOpen) {
      dispatch({ type: useListBox.types.closePopover });
      return;
    }

    dispatch({ type: useListBox.types.openPopover });
  };

  const handleKeyDown = event => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
    }
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

    if (hasFooter) {
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
        onChangeFn: invokeOnChange(onChange, "list-box:clear"),
      },
    });
  };

  const hasRenderTrigger = typeof children === "function";

  const shouldHideClearButton =
    !hasClearButton || hasRenderTrigger || isReadOnly || (hasFooter && isOpen) || selectedOptions.length === 0;

  const shouldHideCaret = hasRenderTrigger || isInline;

  function renderLabel() {
    return isInline || isReadOnly ? (
      <Label
        activeOption={options[activeOption]}
        hasImplicitAll={hasImplicitAll}
        id={`${idListBox}__label`}
        isDisabled={isDisabled}
        isMulti={isMulti}
        label={label}
        options={options}
        placeholder={placeholder}
        selectedOptions={selectedOptions}
      />
    ) : (
      <RawButton
        {...getDOMAttributesForListBoxButton({
          idListBox,
          idFormLabel: idFormLabel.current,
          isOpen,
        })}
        {...a11yProps}
        data-pka-anchor="list-box-trigger"
        isDisabled={isDisabled}
        onClick={handleClick}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        ref={refTrigger}
      >
        <Label
          activeOption={options[activeOption]}
          hasImplicitAll={hasImplicitAll}
          id={`${idListBox}__label`}
          isDisabled={isDisabled}
          isMulti={isMulti}
          label={label}
          options={options}
          placeholder={placeholder}
          selectedOptions={selectedOptions}
        />
      </RawButton>
    );
  }

  function renderCaret() {
    return isOpen ? (
      <sc.UpIcon isDisabled={isDisabled || isReadOnly} />
    ) : (
      <sc.DownIcon isDisabled={isDisabled || isReadOnly} />
    );
  }

  function renderClearButton() {
    return (
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
        {clearIcon || <sc.ClearIcon isDisabled={isDisabled} css={sc.iconStyles} />}
      </sc.ClearButton>
    );
  }

  const renderChildrenProps = React.useMemo(() => {
    if (hasRenderTrigger) {
      const attributes = {
        dispatch,
        handleKeyDown: handleKeyDownKeyboardKeys({ providedProps, state, dispatch, onChangeContext }),
        handleKeyUp: handleKeyUpKeyboardKeys({ providedProps, state, dispatch, onChangeContext }),
        isOpen,
        onChangeContext,
        propsForTrigger: () =>
          getDOMAttributesForListBoxButton({
            idListBox,
            idFormLabel: idFormLabel.current,
            isOpen,
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
  }, [children, dispatch, hasRenderTrigger, idListBox, isMulti, isOpen, onChangeContext, refTrigger, state]);

  if (isHidden && isInline) {
    return <sc.ListBoxTrigger data-pka-anchor="list-box-trigger" isHidden />;
  }

  return (
    <sc.ListBoxTrigger
      hasError={hasError}
      isDisabled={isDisabled}
      isInline={isInline}
      isReadOnly={isReadOnly}
      ref={refTriggerContainer}
      size={size}
      {...moreProps}
    >
      {hasRenderTrigger ? renderChildrenProps : renderLabel()}
      {shouldHideClearButton ? null : renderClearButton()}
      {shouldHideCaret ? null : renderCaret()}
    </sc.ListBoxTrigger>
  );
}

Trigger.displayName = "ListBox.Trigger";

Trigger.propTypes = {
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
  clearIcon: null,
  children: <></>,
  hasClearButton: true,
  hasImplicitAll: false,
  label: null,
  onClickClear: null,
  onClickFooterAccept: null,
  placeholder: null,
  isHidden: false,
};
