import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import * as constants from "@paprika/constants/lib/Constants";
import extractChildrenProps from "@paprika/helpers/lib/extractChildrenProps";
import CheckIcon from "@paprika/icon/lib/Check";
import DashIcon from "@paprika/icon/lib/Dash";
import CheckboxInputPropsCollector from "./CheckboxInputPropsCollector";
import * as types from "./types";
import checkboxStyles from "./Checkbox.styles";

const noop = () => {};

const propTypes = {
  /** Used for aria-describedby on the checkbox input  */
  ariaDescribedBy: PropTypes.string,
  /** Used for aria-label on the checkbox input  */
  a11yText: PropTypes.string,
  /** The checkbox state */
  checkedState: PropTypes.oneOf([
    types.checkboxStates.CHECKED,
    types.checkboxStates.UNCHECKED,
    types.checkboxStates.INDETERMINATE,
  ]),
  /** Used for label contents */
  children: PropTypes.node,
  /** Describe if the checkbox is disabled or not */
  isDisabled: PropTypes.bool,
  /** Callback triggered when the input state is changed */
  onChange: PropTypes.func,
  /** Size provided by parent Group component */
  size: PropTypes.oneOf([types.SMALL, types.MEDIUM, types.LARGE]),
  /** Value for tabindex attribute to override the default of 0. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  a11yText: null,
  ariaDescribedBy: null,
  checkedState: types.checkboxStates.UNCHECKED,
  children: null,
  isDisabled: false,
  onChange: noop,
  size: types.MEDIUM,
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

  const checkboxId = React.useRef(uuid()).current;
  const inputRef = React.useRef(null);
  const extendedInputProps = extractChildrenProps(children, CheckboxInputPropsCollector);

  React.useEffect(() => {
    if (!inputRef.current) return;

    if (checkedState === types.checkboxStates.INDETERMINATE) {
      inputRef.current.indeterminate = types.checkboxStates.INDETERMINATE;
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
    checked: checkedState === types.checkboxStates.CHECKED,
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

Checkbox.displayName = "Checkbox";
Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
Checkbox.types = {
  size: constants.defaultSize,
  state: types.checkboxStates,
};
Checkbox.Input = CheckboxInputPropsCollector;
export default Checkbox;
