import React from "react";
import { string, bool, node, func, oneOf } from "prop-types";
import classNames from "classnames";
import { shirtSize } from "./helpers/customPropTypes";
import RawButton from "../RawButton";
import InputStyles from "./Input.styles";

const propTypes = {
  ariaLabel: string,
  className: string,
  hasClearButton: bool,
  icon: node,
  inputRef: func,
  isDisabled: bool,
  isReadOnly: bool,
  onChange: func.isRequired,
  onClear: func,
  size: shirtSize,
  type: oneOf(["number", "password", "text"]),
  value: string,
};

const defaultProps = {
  ariaLabel: null,
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

class Input extends React.Component {
  inputClearHandler = e => {
    e.target.value = "";
    this.props.onChange(e);
    this.props.onClear();
  };

  renderClear = () => {
    const { hasClearButton, isDisabled, isReadOnly, value } = this.props;
    if (!hasClearButton || isDisabled || isReadOnly || !value) return null;

    return (
      <RawButton
        ariaLabel="Clear Input" // TODO: add L10n
        className="form-input__clear"
        onClick={this.inputClearHandler}
      >
        ⓧ {/* TODO: readd once icon component added to paprika */}
        {/* <Icon type="times-circle" size={14} color={tokens.color.blackLighten50} /> */}
      </RawButton>
    );
  };

  renderIcon = () => {
    if (!this.props.icon) return null;
    return <span className="form-input__icon">{this.props.icon}</span>;
  };

  render() {
    const {
      ariaLabel,
      className,
      hasClearButton,
      icon,
      inputRef,
      isDisabled,
      isReadOnly,
      onClear,
      size,
      type,
      value,
      ...moreProps
    } = this.props;

    if (ariaLabel) moreProps["aria-label"] = ariaLabel;

    const rootClasses = classNames(
      `form-input--${size}`,
      { "form-input--has-icon": icon },
      { "is-disabled": isDisabled },
      { "is-readonly": isReadOnly },
      className
    );

    return (
      <div css={InputStyles} className={rootClasses}>
        {this.renderIcon()}
        <input
          className="form-input__input"
          disabled={isDisabled}
          readOnly={isReadOnly}
          ref={inputRef}
          type={type}
          value={value || ""}
          {...moreProps}
        />
        {this.renderClear()}
      </div>
    );
  }
}

Input.displayName = "Input";
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
