import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import * as sc from "./Select.styles";

const Select = React.forwardRef((props, ref) => {
  const { a11yText, children, hasError, isDisabled, isReadOnly, size, placeholder, value, ...moreProps } = props;

  const renderPlaceholder = () => {
    const { placeholder } = props;
    if (!placeholder) return null;
    return (
      <option disabled value="" key="placeholder" data-pka-anchor="select.placeholder">
        {placeholder}
      </option>
    );
  };

  const styleProps = {
    hasError,
    isDisabled,
    isPlaceHolderSelected: value === "" && !!placeholder,
    isReadOnly,
    size,
  };

  return (
    <sc.SelectContainer data-pka-anchor="select.container">
      <sc.Select
        aria-invalid={hasError}
        aria-readonly={isReadOnly}
        aria-label={a11yText}
        data-pka-anchor="select"
        disabled={isDisabled || isReadOnly}
        ref={ref}
        value={value}
        {...styleProps}
        {...moreProps}
      >
        {renderPlaceholder()}
        {children}
      </sc.Select>
      <sc.CaretIcon data-pka-anchor="select.arrow-icon" isDisabled={isDisabled || isReadOnly} />
    </sc.SelectContainer>
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
