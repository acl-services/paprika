import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import TimesIcon from "@paprika/icon/Times";
import { ShirtSizes } from "../helpers/customPropTypes";
import RawButton from "../RawButton";
import InputStyles from "./Input.styles";

const propTypes = {
  a11yText: PropTypes.string,
  className: PropTypes.string,
  hasClearButton: PropTypes.bool,
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
    const { hasClearButton, isDisabled, isReadOnly, value } = props;
    if (!hasClearButton || isDisabled || isReadOnly || !value) return null;

    /* TODO: use the iconButton component instead of RawButton when added to paprika */
    return (
      <RawButton
        a11yText="Clear Input" // TODO: add L10n
        className="form-input__clear"
        onClick={inputClearHandler}
      >
        <TimesIcon />
      </RawButton>
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
    size,
    hasClearButton,
    onClear,
    ...moreProps
  } = props;

  if (a11yText) moreProps["aria-label"] = a11yText;

  const rootClasses = classNames(
    `form-input--${size}`,
    { "form-input--has-icon": icon },
    { "is-disabled": isDisabled },
    { "is-readonly": isReadOnly },
    className
  );

  return (
    <div css={InputStyles} className={rootClasses}>
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
