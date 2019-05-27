import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { ShirtSizes } from "../../helpers/src/customPropTypes";
import selectStyles from "./Select.styles";

const propTypes = {
  a11yText: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  inputRef: PropTypes.func,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
  value: PropTypes.string.isRequired,
};

const defaultProps = {
  a11yText: null,
  className: null,
  inputRef: () => {},
  isDisabled: false,
  isReadOnly: false,
  placeholder: null,
  size: "medium",
};

const Select = props => {
  const renderPlaceholder = () => {
    const { placeholder } = props;
    if (!placeholder) return null;
    return (
      <option disabled selected value="" key="placeholder">
        {placeholder}
      </option>
    );
  };

  const {
    a11yText,
    className,
    children,
    inputRef,
    isDisabled,
    isReadOnly,
    size,
    placeholder,
    value,
    ...moreProps
  } = props;

  if (a11yText || placeholder) {
    moreProps["aria-label"] = a11yText || placeholder;
  }

  const rootClasses = classNames(
    "aclui-form-select",
    `aclui-form-select--${size}`,
    { "aclui-form-select--placeholder": !value && placeholder },
    { "is-disabled": isDisabled },
    { "is-readonly": isReadOnly },
    className
  );

  return (
    <div css={selectStyles} className={rootClasses}>
      <select
        className="aclui-form-select__select"
        disabled={isDisabled || isReadOnly}
        ref={inputRef}
        value={value}
        {...moreProps}
      >
        {renderPlaceholder()}
        {children}
      </select>
    </div>
  );
};

Select.displayName = "Select";
Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
