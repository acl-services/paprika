import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import extractChildrenProps from "@paprika/helpers/lib/extractChildrenProps";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import CheckIcon from "@paprika/icon/lib/Check";
import DashIcon from "@paprika/icon/lib/Dash";
import CheckboxInputPropsCollector from "./CheckboxInputPropsCollector";
import checkboxStyles from "./Checkbox.styles";

const checkboxStates = {
  CHECKED: "checked",
  UNCHECKED: "unchecked",
  INDETERMINATE: "indeterminate",
};

const noop = () => {};

const propTypes = {
  /** Used for aria-describedby on the checkbox input  */
  ariaDescribedBy: PropTypes.string,
  /** Used for aria-label on the checkbox input  */
  a11yText: PropTypes.string,
  /** The checkbox state */
  checkedState: PropTypes.oneOf(Object.values(checkboxStates)),
  /** Used for label contents */
  children: PropTypes.node,
  /** Describe if the checkbox is disabled or not */
  isDisabled: PropTypes.bool,
  /** Callback triggered when the input state is changed */
  onChange: PropTypes.func,
  /** Size provided by parent Group component */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
  /** Value for tabindex attribute to override the default of 0. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  a11yText: null,
  ariaDescribedBy: null,
  checkedState: checkboxStates.UNCHECKED,
  children: null,
  isDisabled: false,
  onChange: noop,
  size: ShirtSizes.MEDIUM,
  tabIndex: 0,
};

const Checkbox = props => {
  const {
    a11yText,
    children,
    isDisabled,
    checkedState,
    size,
    onChange,
    ariaDescribedBy,
    tabIndex,
    ...moreProps
  } = props;
  const { CHECKED, INDETERMINATE } = checkboxStates;

  const checkboxId = React.useRef(uuid()).current;
  const inputRef = React.useRef(null);
  const extendedInputProps = extractChildrenProps(children, CheckboxInputPropsCollector);

  React.useEffect(() => {
    if (!inputRef.current) return;

    if (checkedState === INDETERMINATE) {
      inputRef.current.indeterminate = INDETERMINATE;
    } else {
      inputRef.current.indeterminate = false;
    }
  }, [checkedState]);

  const styleProps = {
    hasLabel: !!children,
    size,
  };

  const inputProps = {
    "aria-describedby": ariaDescribedBy,
    checked: checkedState === CHECKED,
    disabled: isDisabled,
    id: checkboxId,
    onChange,
    ref: inputRef,
    tabIndex,
    type: "checkbox",
    ...extendedInputProps,
  };
  if (a11yText) inputProps["aria-label"] = a11yText;

  return (
    <div data-pka-anchor="checkbox" css={checkboxStyles} {...styleProps} {...moreProps}>
      <input {...inputProps} />
      <label htmlFor={checkboxId}>
        {children}
        <CheckIcon className="checkbox-icon" aria-hidden data-pka-anchor="checkbox.icon.check" />
        <DashIcon aria-hidden className="checkbox-icon" data-pka-anchor="checkbox.icon.indeterminate" />
      </label>
    </div>
  );
};

Checkbox.states = checkboxStates;

Checkbox.displayName = "Checkbox";
Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
Checkbox.Input = CheckboxInputPropsCollector;
export default Checkbox;
