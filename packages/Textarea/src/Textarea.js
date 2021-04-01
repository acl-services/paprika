import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import * as constants from "@paprika/constants/lib/Constants";
import * as sc from "./Textarea.styles";

const Textarea = React.forwardRef((props, ref) => {
  const refTextarea = React.useRef(null);

  const resize = () => {
    if (refTextarea.current && refTextarea.current.style) {
      refTextarea.current.style.height = 0;
      refTextarea.current.style.height = `${refTextarea.current.scrollHeight + 2}px`;
    }
  };

  const {
    a11yText,
    className,
    canExpand,
    hasError,
    isDisabled,
    onChange,
    isReadOnly,
    maxHeight,
    size,
    ...moreProps
  } = props;

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      refTextarea.current.focus();
    },
  }));

  React.useEffect(() => {
    if (canExpand) {
      resize();
      window.addEventListener("resize", resize);
    }

    return function cleanup() {
      window.removeEventListener("resize", resize);
    };
  }, []);

  React.useEffect(() => {
    if (canExpand) {
      resize();
    }
  }, [canExpand]);

  if (moreProps.value) {
    delete moreProps.defaultValue;
  } else {
    delete moreProps.value;
  }

  const handleChange = e => {
    if (canExpand) {
      resize();
    }
    onChange(e);
  };

  if (a11yText) moreProps["aria-label"] = a11yText;

  const rootClasses = classNames(
    "form-textarea",
    `form-textarea--${size}`,
    { "form-textarea--is-disabled": isDisabled },
    { "form-textarea--is-readonly": isReadOnly },
    { "form-textarea--has-error": hasError },
    className
  );

  return (
    <sc.Textarea className={rootClasses}>
      <textarea
        aria-invalid={hasError}
        className="form-textarea__textarea"
        data-pka-anchor="textarea"
        disabled={isDisabled}
        readOnly={isReadOnly}
        onChange={handleChange}
        ref={refTextarea}
        style={{ maxHeight }}
        {...moreProps}
      />
    </sc.Textarea>
  );
});

Textarea.types = {
  size: constants.defaultSize,
};

const propTypes = {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText: PropTypes.string,
  /** Indicate if the textarea is expandable */
  canExpand: PropTypes.bool,
  /** Sets class name */
  className: PropTypes.string,
  /** Do not use in conjunction with value prop */
  defaultValue: PropTypes.string,
  hasError: PropTypes.bool,
  /** If the textarea is disabled */
  isDisabled: PropTypes.bool,
  /** If the textarea is read-only */
  isReadOnly: PropTypes.bool,
  /** Indicates the maximum height of the textarea  */
  maxHeight: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf([Textarea.types.size.SMALL, Textarea.types.size.MEDIUM, Textarea.types.size.LARGE]),
  /** Do not use in conjunction with defaultValue prop */
  value: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
  canExpand: true,
  className: null,
  defaultValue: "",
  hasError: false,
  isDisabled: false,
  isReadOnly: false,
  maxHeight: "300px",
  onChange: () => {},
  size: Textarea.types.size.MEDIUM,
  value: null,
};

Textarea.displayName = "Textarea";
Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
