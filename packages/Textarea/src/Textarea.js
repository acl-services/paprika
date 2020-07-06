import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import * as sc from "./Textarea.styles";

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
  inputRef: PropTypes.func,
  /** If the textarea is disabled */
  isDisabled: PropTypes.bool,
  /** If the textarea is read-only */
  isReadOnly: PropTypes.bool,
  /** Indicates the maximum height of the textarea  */
  maxHeight: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
  /** Do not use in conjunction with defaultValue prop */
  value: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
  canExpand: true,
  className: null,
  defaultValue: "",
  hasError: false,
  inputRef: () => {},
  isDisabled: false,
  isReadOnly: false,
  maxHeight: "300px",
  onChange: () => {},
  size: ShirtSizes.MEDIUM,
  value: null,
};

function Textarea(props) {
  const textareaRef = React.useRef(null);

  const resize = () => {
    if (textareaRef.current && textareaRef.current.style) {
      textareaRef.current.style.height = 0;
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 2}px`;
    }
  };

  const {
    a11yText,
    className,
    canExpand,
    hasError,
    inputRef,
    isDisabled,
    onChange,
    isReadOnly,
    maxHeight,
    size,
    ...moreProps
  } = props;

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

  const setRef = node => {
    textareaRef.current = node;
    inputRef(node);
  };

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
    <sc.TextareaWrapper className={rootClasses}>
      <textarea
        aria-invalid={hasError}
        className="form-textarea__textarea"
        data-pka-anchor="textarea"
        disabled={isDisabled}
        readOnly={isReadOnly}
        onChange={handleChange}
        ref={setRef}
        style={{ maxHeight }}
        {...moreProps}
      />
    </sc.TextareaWrapper>
  );
}

Textarea.displayName = "Textarea";
Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
