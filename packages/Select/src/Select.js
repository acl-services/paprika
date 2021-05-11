import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import * as sc from "./Select.styles";

const Select = React.forwardRef((props, ref) => {
  const { a11yText, children, hasError, isDisabled, isReadOnly, size, placeholder, value, ...moreProps } = props;

  if (a11yText || placeholder) {
    moreProps["aria-label"] = a11yText || placeholder;
  }

  const renderPlaceholder = () => {
    const { placeholder } = props;
    if (!placeholder) return null;
    return (
      <option disabled value="" key="placeholder">
        {placeholder}
      </option>
    );
  };

  const rootClasses = classNames(
    "form-select",
    `form-select--${size}`,
    { "form-select--placeholder": !value && placeholder },
    { "form-select--is-disabled": isDisabled },
    { "form-select--is-readonly": isReadOnly },
    { "form-select--has-error": hasError }
  );

  return (
    <sc.Select className={rootClasses} data-pka-anchor="select">
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
    </sc.Select>
  );
});

Select.types = {
  size: constants.defaultSize,
};

Select.propTypes = {
  /** Provides a non-visible label for this select element for assistive technologies. */
  a11yText: PropTypes.string,

  /** List of options as standard option elements. */
  children: PropTypes.node,

  /** If true displays a red border around select element to indicate error. */
  hasError: PropTypes.bool,

  /** If true it makes the select element disabled. */
  isDisabled: PropTypes.bool,

  /** If true it makes the select element read only. */
  isReadOnly: PropTypes.bool,

  /** Display value for a disabled first option with an empty string value. */
  placeholder: PropTypes.string,

  /** Specifies the visual size of the select element. */
  size: PropTypes.oneOf([Select.types.size.SMALL, Select.types.size.MEDIUM, Select.types.size.LARGE]),

  /** The selected value for the select element. */
  value: PropTypes.string,
};

Select.defaultProps = {
  a11yText: null,
  children: null,
  hasError: false,
  isDisabled: false,
  isReadOnly: false,
  placeholder: null,
  size: Select.types.size.MEDIUM,
  value: undefined,
};

Select.displayName = "Select";

export default Select;
