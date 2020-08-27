import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import selectStyles from "./Select.styles";

Select.propTypes = propTypes; // eslint-disable-line no-use-before-define
Select.defaultProps = defaultProps; // eslint-disable-line no-use-before-define
// eslint-disable-next-line no-use-before-define
Select.types = {
  size: constants.defaultSize,
};

const propTypes = {
  a11yText: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  hasError: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf([Select.types.size.SMALL, Select.types.size.MEDIUM, Select.types.size.LARGE]), // eslint-disable-line no-use-before-define
  value: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
  className: null,
  children: null,
  hasError: false,
  isDisabled: false,
  isReadOnly: false,
  placeholder: null,
  size: Select.types.size.MEDIUM, // eslint-disable-line no-use-before-define
  value: "",
};

const Select = React.forwardRef((props, ref) => {
  const renderPlaceholder = () => {
    const { placeholder } = props;
    if (!placeholder) return null;
    return (
      <option disabled value="" key="placeholder">
        {placeholder}
      </option>
    );
  };

  const {
    a11yText,
    className,
    children,
    hasError,
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
    "form-select",
    `form-select--${size}`,
    { "form-select--placeholder": !value && placeholder },
    { "form-select--is-disabled": isDisabled },
    { "form-select--is-readonly": isReadOnly },
    { "form-select--has-error": hasError },
    className
  );

  return (
    <div css={selectStyles} className={rootClasses} data-pka-anchor="select">
      <select
        aria-invalid={hasError}
        className="form-select__select"
        disabled={isDisabled || isReadOnly}
        ref={ref}
        value={value}
        {...moreProps}
      >
        {renderPlaceholder()}
        {children}
      </select>
    </div>
  );
});

Select.displayName = "Select";

export default Select;
