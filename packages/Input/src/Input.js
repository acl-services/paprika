import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import TimesCircleIcon from "@paprika/icon/lib/TimesCircle";
import useI18n from "@paprika/l10n/lib/useI18n";
import { callAll, extractChildrenProps, RefOf } from "@paprika/helpers";
import InputPropsCollector from "./InputPropsCollector";
import * as types from "./types";
import * as sc from "./Input.styles";

const Input = React.forwardRef((props, ref) => {
  const {
    a11yText,
    children,
    clearIcon,
    defaultValue,
    icon,
    isDisabled,
    isReadOnly,
    hasClearButton,
    hasError,
    onChange,
    size,
    value,
    ...moreProps
  } = props;

  const isControlled = value !== undefined;
  const containerProps = extractChildrenProps(children, InputPropsCollector);
  const refInput = ref || React.useRef();
  const i18n = useI18n();

  const [shouldShowClearButton, setShouldShowClearButton] = React.useState(
    hasClearButton && !isDisabled && !isReadOnly && (value || defaultValue)
  );

  React.useEffect(() => {
    setShouldShowClearButton(hasClearButton && !isDisabled && !isReadOnly && (value || defaultValue));
  }, [hasClearButton, isDisabled, isReadOnly, value, defaultValue]);

  const handleChange = event => {
    if (!hasClearButton || isDisabled || isReadOnly) return;
    if (isControlled) {
      setShouldShowClearButton(Boolean(value));
    } else {
      setShouldShowClearButton(Boolean(event.target.value));
    }
  };

  const inputClearHandler = () => {
    if (!isControlled) {
      if (refInput.current) refInput.current.value = "";
      setShouldShowClearButton(false);
    }
    onChange(null);
  };

  const renderClear = () => {
    if (!shouldShowClearButton) return null;

    const iconSize = size === types.LARGE ? types.MEDIUM : types.SMALL;

    return (
      <sc.ClearButton
        a11yText={i18n.t("input.clear_button.aria_label")}
        isSemantic={false}
        kind={types.MINOR}
        onClick={inputClearHandler}
        size={iconSize}
      >
        {clearIcon || <TimesCircleIcon />}
      </sc.ClearButton>
    );
  };

  const styleProps = {
    hasClearButton,
    hasError,
    hasIcon: Boolean(icon),
    isDisabled,
    isReadOnly,
    size,
  };

  return (
    <sc.InputContainer data-pka-anchor="input.container" {...styleProps} {...containerProps}>
      {icon ? <sc.Icon {...styleProps}>{icon}</sc.Icon> : null}
      <sc.Input
        aria-invalid={hasError}
        aria-label={a11yText}
        data-pka-anchor="input"
        disabled={isDisabled}
        readOnly={isReadOnly}
        value={isControlled ? value : undefined}
        defaultValue={!isControlled ? defaultValue : undefined}
        onChange={callAll(handleChange, onChange)}
        ref={refInput}
        {...styleProps}
        {...moreProps}
      />
      {renderClear()}
    </sc.InputContainer>
  );
});

Input.types = {
  size: constants.defaultSize,
  type: types.inputValidTypes,
};

Input.propTypes = {
  /** Provides a non-visible label for this input for assistive technologies. */
  a11yText: PropTypes.string,

  /** Optional Input.Container to collect props for root DOM element.  */
  children: PropTypes.node,

  /** Custom icon for the clear action in the input. */
  clearIcon: PropTypes.node,

  /** Sets the default input value for an uncontrolled component. */
  defaultValue: PropTypes.string,

  /** If true displays a clear button inside the input if it contains a value. */
  hasClearButton: PropTypes.bool,

  /** If true displays a red border around input to show error. */
  hasError: PropTypes.bool,

  /** Displays an icon inside the input. */
  icon: PropTypes.node,

  /** If true it makes the input disabled. */
  isDisabled: PropTypes.bool,

  /** If true it makes the input read only. */
  isReadOnly: PropTypes.bool,

  /**
   * Callback to be executed when the input value is changed. Receives the
   * onChange event as an argument, except when the clear button is clicked,
   * then the argument is null. Required when value prop is provided (component
   * is controlled).
   */
  onChange: PropTypes.func,

  /** Ref for the input DOM element. */
  refInput: RefOf(PropTypes.instanceOf(Element)),

  /** Changes the size of the input. */
  size: PropTypes.oneOf([Input.types.size.SMALL, Input.types.size.MEDIUM, Input.types.size.LARGE]),

  /** Allows user to specify the type of input. */
  type: PropTypes.oneOf([
    Input.types.type.EMAIL,
    Input.types.type.NUMBER,
    Input.types.type.PASSWORD,
    Input.types.type.SEARCH,
    Input.types.type.TELEPHONE,
    Input.types.type.TEXT,
    Input.types.type.URL,
  ]),

  /** The value inside of the input */
  value: PropTypes.string,
};

Input.defaultProps = {
  a11yText: null,
  children: null,
  clearIcon: null,
  defaultValue: null,
  hasClearButton: false,
  hasError: false,
  icon: null,
  isDisabled: false,
  isReadOnly: false,
  onChange: () => {},
  refInput: null,
  size: Input.types.size.MEDIUM,
  type: Input.types.type.TEXT,
  value: undefined,
};

Input.displayName = "Input";

Input.Container = InputPropsCollector;

export default Input;
