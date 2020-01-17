import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ShirtSizes, InputValidTypes } from "@paprika/helpers/lib/customPropTypes";
import TimesCircleIcon from "@paprika/icon/lib/TimesCircle";
import Button from "@paprika/button";
import inputStyles from "./Input.styles";

const propTypes = {
  a11yText: PropTypes.string,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  hasClearButton: PropTypes.bool,
  hasError: PropTypes.bool,
  icon: PropTypes.node,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
  type: PropTypes.oneOf(InputValidTypes.ALL),
  value: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
  className: null,
  defaultValue: null,
  hasClearButton: false,
  hasError: false,
  icon: null,
  inputRef: () => {},
  isDisabled: false,
  isReadOnly: false,
  onClear: () => {},
  size: ShirtSizes.MEDIUM,
  type: "text",
  value: "",
};

const Input = props => {
  const [value, setValue] = React.useState(props.defaultValue);

  const inputClearHandler = e => {
    e.target.value = "";
    props.onChange(e);
    props.onClear();
  };

  const renderClear = () => {
    const { hasClearButton, isDisabled, isReadOnly, size, value } = props;
    if (!hasClearButton || isDisabled || isReadOnly || !value) return null;
    const iconSize = size === ShirtSizes.LARGE ? ShirtSizes.MEDIUM : ShirtSizes.SMALL;
    return (
      <Button.Icon
        a11yText="Clear Input" // TODO: add L10n
        className="form-input__clear"
        kind={Button.Kinds.MINOR}
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
    onChange,
    onClear,
    size,
    ...moreProps
  } = props;

  // Must remove so React does not complain about a component trying to be both controlled and uncontrolled.
  delete moreProps.value;
  delete moreProps.defaultValue;

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

  function handleChange(e) {
    if (props.defaultValue !== null) {
      setValue(e.target.value);
    }
    onChange(e);
  }

  return (
    <div css={inputStyles} {...styleProps} className={rootClasses}>
      {renderIcon()}
      <input
        aria-invalid={hasError}
        className="form-input__input"
        data-pka-anchor="input"
        disabled={isDisabled}
        onChange={handleChange}
        readOnly={isReadOnly}
        ref={inputRef}
        value={value || props.value}
        {...moreProps}
      />
      {renderClear()}
    </div>
  );
};

Input.displayName = "Input";
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
