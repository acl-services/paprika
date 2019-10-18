import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import textareaStyles from "./Textarea.styles";

const propTypes = {
  a11yText: PropTypes.string,
  canExpand: PropTypes.bool,
  className: PropTypes.string,
  hasError: PropTypes.bool,
  inputRef: PropTypes.func,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  maxHeight: PropTypes.string,
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
  value: PropTypes.string.isRequired,
};

const defaultProps = {
  a11yText: null,
  canExpand: true,
  className: null,
  hasError: false,
  inputRef: () => {},
  isDisabled: false,
  isReadOnly: false,
  maxHeight: "300px",
  size: ShirtSizes.MEDIUM,
};

class Textarea extends React.Component {
  componentDidMount() {
    if (this.props.canExpand) {
      this.resize();
      window.addEventListener("resize", this.resize);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.canExpand && this.props.value !== prevProps.value) {
      this.resize();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  setRef = node => {
    this.textarea = node;
    this.props.inputRef(node);
  };

  resize = () => {
    if (this.textarea && this.textarea.style) {
      this.textarea.style.height = 0;
      this.textarea.style.height = `${this.textarea.scrollHeight + 2}px`;
    }
  };

  render() {
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
    } = this.props;

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
          disabled={isDisabled}
          readOnly={isReadOnly}
          ref={this.setRef}
          style={{ maxHeight }}
          {...moreProps}
        />
      </div>
    );
  }
}

Textarea.displayName = "Textarea";
Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
