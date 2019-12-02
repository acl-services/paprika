import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import CheckIcon from "@paprika/icon/lib/Check";
import radioStyles from "./Radio.styles";
import Group from "./components/Group";
import RadioContext from "./RadioContext";

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
  /** Describe if the radio started as selected or not */
  canDeselect: PropTypes.bool,
};

const defaultProps = {
  a11yText: null,
  canDeselect: false,
  children: null,
  isChecked: false,
  isDisabled: false,
  defaultIsChecked: false,
};

function Radio(props) {
  const { a11yText, children, isChecked, isDisabled, ...moreProps } = props;
  const { handleRadioClick, index, checkedIndex, isGroupDisabled, canDeselect, name, size } = React.useContext(
    RadioContext
  );
  const radioId = React.useRef(nanoid()).current;
  const inputRef = React.useRef(null);

  const handleKeyDown = event => {
    if (
      // Prevent scrolling the page with a spacerbar keypress
      event.key === " " ||
      // Prevent submitting forms in IE/Edge with and enter keypress
      event.key === "Enter"
    ) {
      event.preventDefault();
    }
  };

  const handleKeyUp = event => {
    const isTriggerKey = event.key === " "; // space key
    if (!isDisabled && isTriggerKey) {
      handleRadioClick(index);
    }
  };

  const styleProps = {
    hasLabel: !!children,
    size,
  };

  const inputProps = {
    readOnly: true,
    onClick: () => handleRadioClick(index),
    checked: checkedIndex === index,
    disabled: isGroupDisabled || isDisabled,
    id: radioId,
    name,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: inputRef,
    type: "radio",
  };
  if (a11yText) inputProps["aria-label"] = a11yText;
  return (
    <div data-pka-anchor="radio" css={radioStyles} {...styleProps} {...moreProps}>
      <input {...inputProps} />
      <label onKeyUp={handleKeyUp} className={canDeselect ? "deselectable" : ""} htmlFor={radioId}>
        {children}

        {canDeselect ? (
          <CheckIcon className="radio-icon" aria-hidden data-pka-anchor="radio.icon.check" />
        ) : (
          <div className="radio-icon radio-solid-background" data-pka-anchor="radio.icon.check" />
        )}
      </label>
    </div>
  );
}

Radio.displayName = "Radio";
Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
Radio.Group = Group;

export default Radio;
