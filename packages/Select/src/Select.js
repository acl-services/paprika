import React from "react";
import PropTypes from "prop-types";
import { callAll, extractChildrenProps } from "@paprika/helpers";
import * as constants from "@paprika/constants/lib/Constants";
import SelectPropsCollector from "./SelectPropsCollector";
import * as sc from "./Select.styles";

const Select = React.forwardRef((props, ref) => {
  const {
    a11yText,
    children,
    defaultValue,
    hasError,
    isDisabled,
    isReadOnly,
    onChange,
    placeholder,
    size,
    value,
    ...moreProps
  } = props;

  const isControlled = value !== undefined;
  const containerProps = extractChildrenProps(children, SelectPropsCollector);
  const [hasValue, setHasValue] = React.useState(isControlled ? Boolean(value) : Boolean(defaultValue));
  const hasPlaceholder = Boolean(placeholder);

  const styleProps = {
    hasError,
    isDisabled,
    isPlaceHolderSelected: hasPlaceholder && !hasValue,
    isReadOnly,
    size,
  };

  function handleChange(event) {
    const newValue = event.target.value;
    if (!hasValue && newValue !== "") {
      setHasValue(true);
    }
    if (hasValue && newValue === "") {
      setHasValue(false);
    }
  }

  const renderPlaceholder = () => {
    if (!placeholder) return null;
    return (
      <option disabled value="" data-pka-anchor="select.placeholder">
        {placeholder}
      </option>
    );
  };

  function getDefaultValue() {
    if (isControlled) return undefined;
    if (defaultValue === null && hasPlaceholder) return "";
    return defaultValue;
  }

  return (
    <sc.SelectContainer data-pka-anchor="select.container" {...containerProps}>
      <sc.Select
        aria-invalid={hasError}
        aria-readonly={isReadOnly}
        aria-label={a11yText}
        data-pka-anchor="select"
        defaultValue={getDefaultValue()}
        disabled={isDisabled || isReadOnly}
        onChange={callAll(handleChange, onChange)}
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

  /** Sets the default selected value for an uncontrolled component. */
  defaultValue: PropTypes.string,

  /** If true displays a red border around select element to indicate error. */
  hasError: PropTypes.bool,

  /** If true it makes the select element disabled. */
  isDisabled: PropTypes.bool,

  /** If true it makes the select element read only. */
  isReadOnly: PropTypes.bool,

  /** Callback to be executed when the selected value is changed. Receives the onChange event as an argument.  Required when value prop is provided (component is controlled). */
  onChange: PropTypes.func,

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
  defaultValue: null,
  hasError: false,
  isDisabled: false,
  isReadOnly: false,
  onChange: () => {},
  placeholder: null,
  size: Select.types.size.MEDIUM,
  value: undefined,
};

Select.displayName = "Select";

Select.Container = SelectPropsCollector;

export default Select;
