import React from "react";
import PropTypes from "prop-types";
import CheckIcon from "@paprika/icon/lib/Check";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import radioStyles from "./Radio.styles";
import Group from "./components/Group";

const propTypes = {
  /** Used for aria-label on the radio input  */
  a11yText: PropTypes.string,
  /** Used for label contents */
  children: PropTypes.node,
  /* Controls if the radio is checked or not, never combine it with defaultIsChecked */
  isChecked: PropTypes.bool,
  /** Describe if the radio is disabled or not */
  isDisabled: PropTypes.bool,
  /** Describe if the radio started as checked or not */
  defaultIsChecked: PropTypes.bool,
  /* Name provided for accessibility */
  name: PropTypes.string,
  /* onClick provided by parent Group component */
  onClick: () => {},
  /* Size provided by parent Group component */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  a11yText: null,
  children: null,
  defaultIsChecked: false,
  isChecked: false,
  isDisabled: false,
  name: "",
  onClick: () => {},
  size: ShirtSizes.MEDIUM,
};

function Radio(props) {
  const { a11yText, children, isChecked, isDisabled, name, onClick, size, ...moreProps } = props;
  const inputRef = React.useRef(null);

  const handleKeyUp = event => {
    const isTriggerKey = event.key === " "; // space key
    if (!isDisabled && isTriggerKey) {
      onClick();
    }
  };

  const styleProps = {
    hasLabel: !!children,
    size,
  };

  const inputProps = {
    onClick,
    checked: isChecked,
    disabled: isDisabled,
    name,
    onKeyUp: handleKeyUp,
    ref: inputRef,
    type: "radio",
  };
  if (a11yText) inputProps["aria-label"] = a11yText;
  return (
    <div data-pka-anchor="radio" css={radioStyles} {...styleProps} {...moreProps}>
      <input {...inputProps} />
      <label onKeyUp={handleKeyUp}>
        {children}

        <CheckIcon className="radio-icon" aria-hidden data-pka-anchor="radio.icon.check" />
      </label>
    </div>
  );
}

Radio.displayName = "Radio";
Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
Radio.Group = Group;

export default Radio;
