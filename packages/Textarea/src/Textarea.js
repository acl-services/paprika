import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import textareaStyles from "./Textarea.styles";

const propTypes = {
  a11yText: PropTypes.string,
  canExpand: PropTypes.bool,
  className: PropTypes.string,
  /** Do not use in conjunction with value prop */
  defaultValue: PropTypes.string,
  hasError: PropTypes.bool,
  inputRef: PropTypes.func,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
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
  defaultValue: null,
  hasError: false,
  inputRef: () => {},
  isDisabled: false,
  isReadOnly: false,
  maxHeight: "300px",
  onChange: () => {},
  size: ShirtSizes.MEDIUM,
  value: "",
};

function Textarea(props) {
  let textarea = null;

  const resize = () => {
    if (textarea && textarea.style) {
      textarea.style.height = 0;
      textarea.style.height = `${textarea.scrollHeight + 2}px`;
    }
  };

  React.useEffect(() => {
    if (props.canExpand) {
      resize();
      window.addEventListener("resize", resize);
    }

    return function cleanup() {
      window.removeEventListener("resize", resize);
    };
  });

  React.useEffect(() => {
    if (props.canExpand) {
      resize();
    }
  }, [props.value]);

  const setRef = node => {
    textarea = node;
    props.inputRef(node);
  };

  const {
    a11yText,
    className,
    canExpand,
    hasError,
    inputRef,
    isDisabled,
    isReadOnly,
    maxHeight,
    size,
    ...moreProps
  } = props;

  if (moreProps.defaultValue) {
    delete moreProps.value;
  }

  if (moreProps.value) {
    delete moreProps.defaultValue;
  }

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
    <div className={rootClasses} css={textareaStyles}>
      <textarea
        className="form-textarea__textarea"
        data-pka-anchor="textarea"
        disabled={isDisabled}
        readOnly={isReadOnly}
        ref={setRef}
        style={{ maxHeight }}
        {...moreProps}
      />
    </div>
  );
}

Textarea.displayName = "Textarea";
Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
