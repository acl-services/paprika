import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ShirtSizes } from "../helpers/customPropTypes";
import textareaStyles from "./Textarea.styles";

const propTypes = {
  a11yText: PropTypes.string,
  canExpand: PropTypes.bool,
  className: PropTypes.string,
  inputRef: PropTypes.func,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  maxHeight: PropTypes.string,
  resizeTimeout: PropTypes.number,
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
  value: PropTypes.string.isRequired,
};

const defaultProps = {
  a11yText: null,
  canExpand: true,
  className: null,
  inputRef: () => {},
  isDisabled: false,
  isReadOnly: false,
  maxHeight: "300px",
  resizeTimeout: 66,
  size: "medium",
};

class Textarea extends React.Component {
  componentDidMount() {
    if (this.props.canExpand) {
      this.resize();
      window.addEventListener("resize", this.windowResizeHandler);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.canExpand && this.props.value !== nextProps.value) {
      this.resize();
    }
  }

  componentWillUnmount() {
    this.delayedResize = null;
    window.removeEventListener("resize", this.windowResizeHandler);
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

  windowResizeHandler = () => {
    if (!this.delayedResize) {
      this.delayedResize = setTimeout(() => {
        this.delayedResize = null;
        this.resize();
      }, this.props.resizeTimeout);
    }
  };

  render() {
    const {
      a11yText,
      className,
      canExpand,
      inputRef,
      isDisabled,
      isReadOnly,
      maxHeight,
      resizeTimeout,
      size,
      ...moreProps
    } = this.props;

    if (a11yText) moreProps["aria-label"] = a11yText;

    const rootClasses = classNames(
      `form-textarea--${size}`,
      { "is-disabled": isDisabled },
      { "is-readonly": isReadOnly },
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
