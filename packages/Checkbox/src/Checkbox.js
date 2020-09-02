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

const Checkbox = props => {
  const {
    a11yText,
    children,
    isDisabled,
    checkedState,
    size,
    onChange,
    a11yDescribedByIds,
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
    "aria-describedby": a11yDescribedByIds,
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

Checkbox.types = {
  size: constants.defaultSize,
  state: types.checkboxStates,
};

const noop = () => {};

const propTypes = {
  /** String of Ids provided by the formElement component when used as a child of FormElement.Content  */
  a11yDescribedByIds: PropTypes.string,
  /** Used for aria-label on the checkbox input  */
  a11yText: PropTypes.string,
  /** The checkbox state */
  checkedState: PropTypes.oneOf([
    Checkbox.types.state.CHECKED,
    Checkbox.types.state.UNCHECKED,
    Checkbox.types.state.INDETERMINATE,
  ]),
  /** Used for label contents */
  children: PropTypes.node,
  /** Describe if the checkbox is disabled or not */
  isDisabled: PropTypes.bool,
  /** Callback triggered when the input state is changed */
  onChange: PropTypes.func,
  /** Size provided by parent Group component */
  size: PropTypes.oneOf([Checkbox.types.size.SMALL, Checkbox.types.size.MEDIUM, Checkbox.types.size.LARGE]),
  /** Value for tabindex attribute to override the default of 0. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  a11yDescribedByIds: null,
  a11yText: null,
  checkedState: Checkbox.types.state.UNCHECKED,
  children: null,
  isDisabled: false,
  onChange: noop,
  size: Checkbox.types.size.MEDIUM,
  tabIndex: 0,
};

Checkbox.displayName = "Checkbox";
Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

Checkbox.Input = CheckboxInputPropsCollector;

export default Checkbox;
