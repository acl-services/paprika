import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import * as constants from "@paprika/constants/lib/Constants";
import TimesCircleIcon from "@paprika/icon/lib/TimesCircle";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import * as types from "./types";
import * as sc from "./Input.styles";

function callAll(...fns) {
  return (...args) => {
    for (const fn of fns) {
      if (fn) fn(...args);
    }
  };
}

const Input = React.forwardRef((props, ref) => {
  const {
    a11yText,
    clearIcon,
    className,
    defaultValue,
    icon,
    isDisabled,
    isReadOnly,
    hasClearButton,
    hasError,
    onChange,
    onClear,
    size,
    value,
    ...moreProps
  } = props;

  const isControlled = value !== null;

  const i18n = useI18n();

  const [shouldShowClearButton, setShouldShowClearButton] = React.useState(
    hasClearButton && !isDisabled && !isReadOnly && (value || defaultValue)
  );

  React.useEffect(() => {
    setShouldShowClearButton(hasClearButton && !isDisabled && !isReadOnly && (value || defaultValue));
  }, [hasClearButton, isDisabled, isReadOnly, value, defaultValue]);

  const inputRef = React.useRef();
  const bestRef = ref || inputRef;

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
      if (bestRef.current) bestRef.current.value = "";
      setShouldShowClearButton(false);
    }
    onClear();
  };

  const renderClear = () => {
    if (!shouldShowClearButton) return null;

    const iconSize = size === types.LARGE ? types.MEDIUM : types.SMALL;

    return (
      <Button.Icon
        a11yText={i18n.t("input.clear_button.aria_label")}
        className="form-input__clear"
        kind={types.MINOR}
        size={iconSize}
        onClick={inputClearHandler}
      >
        {clearIcon || <TimesCircleIcon />}
      </Button.Icon>
    );
  };

  const renderIcon = () => {
    if (!props.icon) return null;
    return <span className="form-input__icon">{props.icon}</span>;
  };

  const styleProps = {
    size,
    hasClearButton,
  };

  const rootClasses = classNames(
    "form-input",
    `form-input--${size}`,
    { "form-input--has-icon": icon },
    { "form-input--is-disabled": isDisabled },
    { "form-input--is-readonly": isReadOnly },
    { "form-input--has-error": hasError },
    className
  );

  return (
    <sc.Input {...styleProps} className={rootClasses}>
      {renderIcon(a11yText)}
      <input
        data-pka-anchor="input"
        {...moreProps}
        aria-invalid={hasError}
        aria-label={a11yText}
        className="form-input__input"
        disabled={isDisabled}
        readOnly={isReadOnly}
        value={isControlled ? value : undefined}
        defaultValue={!isControlled ? defaultValue : undefined}
        onChange={callAll(handleChange, onChange)}
        ref={ref || inputRef}
      />
      {renderClear()}
    </sc.Input>
  );
});

Input.types = {
  size: constants.defaultSize,
  type: types.inputValidTypes,
};

const propTypes = {
  /** Provides a non-visible label for this input for assistive technologies. */
  a11yText: PropTypes.string,

  /** Sets the class for the input. */
  className: PropTypes.string,

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

  /** Callback to be executed when the input value is changed. Should be used when value prop is provided (component is controlled). */
  onChange: PropTypes.func,

  /** Callback to be executed when the input value is cleared. */
  onClear: PropTypes.func,

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

const defaultProps = {
  a11yText: null,
  clearIcon: null,
  className: null,
  defaultValue: null,
  hasClearButton: false,
  hasError: false,
  icon: null,
  isDisabled: false,
  isReadOnly: false,
  onChange: () => {},
  onClear: () => {},
  size: Input.types.size.MEDIUM,
  type: Input.types.type.TEXT,
  value: null,
};

Input.displayName = "Input";
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
