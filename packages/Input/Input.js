import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import TimesCircleIcon from "@paprika/icon/TimesCircle";
import Button from "@paprika/button";
import { ShirtSizes } from "../helpers/customPropTypes";
import inputStyles from "./Input.styles";

const propTypes = {
  a11yText: PropTypes.string,
  className: PropTypes.string,
  hasClearButton: PropTypes.bool,
  hasError: PropTypes.bool,
  icon: PropTypes.node,
  inputRef: PropTypes.func,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
  type: PropTypes.oneOf(["number", "password", "text"]),
  value: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
  className: null,
  hasClearButton: false,
  hasError: false,
  icon: null,
  inputRef: () => {},
  isDisabled: false,
  isReadOnly: false,
  onClear: () => {},
  size: "medium",
  type: "text",
  value: "",
};

const Input = props => {
  const inputClearHandler = e => {
    e.target.value = "";
    props.onChange(e);
    props.onClear();
  };

  const renderClear = () => {
    const { hasClearButton, isDisabled, isReadOnly, size, value } = props;
    if (!hasClearButton || isDisabled || isReadOnly || !value) return null;
    const iconSize = size === "large" ? "medium" : "small";
    return (
      <Button.Icon
        a11yText="Clear Input" // TODO: add L10n
        className="form-input__clear"
        kind="minor"
        size={iconSize}
        onClick={inputClearHandler}
      >
        <TimesCircleIcon />
      </Button.Icon>
    );
  };

  const renderIcon = () => {
    if (!props.icon) return null;
    return <span className="form-input__icon">{props.icon}</span>;
  };

  const {
    a11yText,
    className,
    icon,
    inputRef, // TODO: use useImperativeHandle()
    isDisabled,
    isReadOnly,
    hasClearButton,
    hasError,
    onClear,
    size,
    ...moreProps
  } = props;

  const styleProps = {
    size: props.size,
  };

  if (a11yText) moreProps["aria-label"] = a11yText;

  const rootClasses = classNames(
    `form-input--${size}`,
    { "form-input--has-icon": icon },
    { "form-input--is-disabled": isDisabled },
    { "form-input--is-readonly": isReadOnly },
    { "form-input--has-error": hasError },
    className
  );

  return (
    <div css={inputStyles} {...styleProps} className={rootClasses}>
      {renderIcon()}
      <input className="form-input__input" disabled={isDisabled} readOnly={isReadOnly} ref={inputRef} {...moreProps} />
      {renderClear()}
    </div>
  );
};

Input.displayName = "Input";
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
