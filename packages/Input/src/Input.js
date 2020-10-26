import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import * as constants from "@paprika/constants/lib/Constants";
import TimesCircleIcon from "@paprika/icon/lib/TimesCircle";
import Button from "@paprika/button";
import * as types from "./types";
import * as sc from "./Input.styles";

const Input = React.forwardRef((props, ref) => {
  const inputClearHandler = e => {
    e.target.value = "";
    props.onChange(e);
    props.onClear();
  };

  const renderClear = () => {
    const { clearIcon, hasClearButton, isDisabled, isReadOnly, size, value } = props;
    if (!hasClearButton || isDisabled || isReadOnly || !value) return null;
    const iconSize = size === types.LARGE ? types.MEDIUM : types.SMALL;

    return (
      <Button.Icon
        a11yText="Clear Input" // TODO: add L10n
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

  const {
    a11yText,
    clearIcon,
    className,
    icon,
    isDisabled,
    isReadOnly,
    hasClearButton,
    hasError,
    onClear,
    size,
    ...moreProps
  } = props;

  if (moreProps.value || moreProps.value === "") {
    delete moreProps.defaultValue;
  } else {
    delete moreProps.value;
  }

  const styleProps = {
    size,
    hasClearButton,
  };

  if (a11yText) moreProps["aria-label"] = a11yText;

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
      {renderIcon()}
      <input
        aria-invalid={hasError}
        className="form-input__input"
        data-pka-anchor="input"
        disabled={isDisabled}
        readOnly={isReadOnly}
        ref={ref}
        {...moreProps}
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
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */

  a11yText: PropTypes.string,

  /** Sets the class for the input. */
  className: PropTypes.string,

  /** Custom icon for the clear action in the input. */
  clearIcon: PropTypes.node,

  /** Sets the default input value  */
  defaultValue: PropTypes.string,

  /** If true displays a clear button inside the input if it contains a value.  */
  hasClearButton: PropTypes.bool,

  /** If true displays a red border around input to show error.  */
  hasError: PropTypes.bool,

  /** Displays an icon inside the input. */
  icon: PropTypes.node,

  /** If true it makes the input disabled. */
  isDisabled: PropTypes.bool,

  /** If true it makes the input read only. */
  isReadOnly: PropTypes.bool,

  /** Callback to be executed when the input value is changed. Should not be used with defaultValue prop */
  onChange: PropTypes.func,

  /** Callback to be executed when the input value is cleared */
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
  defaultValue: "",
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
