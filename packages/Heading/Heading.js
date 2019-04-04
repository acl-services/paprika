import React from "react";
import { bool, string, func, node, oneOf } from "prop-types";
import classNames from "classnames";
import headingStyles from "./Heading.styles";

const propTypes = {
  /** Optional aria text if it should be more descriptive than what is rendered */
  a11yText: string,

  /** Heading content is required */
  children: node.isRequired,

  /** Optional custom class name */
  className: string,

  /** Optional display level(1-6) affects styles only */
  displayLevel: oneOf([1, 2, 3, 4, 5, 6]),

  /** Ref function that returns DOM node for heading */
  domRef: func,

  /** Horizontal divider style */
  hasDivider: bool,

  /** Underline style */
  hasUnderline: bool,

  /** Optional, visually hide the header */
  isHidden: bool,

  /** Optional, renders the children at a lighter font weight */
  isLight: bool,

  /** Optional, using <div> to avoid styles override by global css. */
  isSemantic: bool,

  /** Heading level(1-6) is required. */
  level: oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};

const defaultProps = {
  a11yText: null,
  className: null,
  displayLevel: null,
  domRef: () => {},
  hasDivider: false,
  hasUnderline: false,
  isHidden: false,
  isLight: false,
  isSemantic: true,
};

const safeValue = n => (n < 1 || isNaN(n) ? 6 : Math.min(n, 6));

class Heading extends React.Component {
  getElementProps(safeDisplayLevel, safeLevel) {
    const {
      a11yText,
      children,
      className,
      displayLevel,
      domRef,
      hasDivider,
      hasUnderline,
      isHidden,
      isLight,
      isSemantic,
      level,
      ...moreProps
    } = this.props;
    return {
      "aria-level": isSemantic ? null : safeLevel,
      "aria-label": a11yText || undefined,
      className: classNames(`heading--level-${safeDisplayLevel || safeLevel}`, className, {
        "heading--is-hidden": isHidden,
        "heading--has-underline": hasUnderline,
        "heading--is-light": isLight,
      }),
      ref: domRef,
      role: isSemantic ? null : "heading",
      ...moreProps,
    };
  }

  renderHeadingContent() {
    const { a11yText, children } = this.props;
    return a11yText ? <span aria-hidden>{children}</span> : children;
  }

  render() {
    const { hasDivider, isSemantic, level, displayLevel } = this.props;
    const safeLevel = safeValue(level);
    const safeDisplayLevel = displayLevel ? safeValue(displayLevel) : null;
    const divider = <span className="heading__divider" />;
    const elementProps = this.getElementProps(safeDisplayLevel, safeLevel);

    return (
      <div css={headingStyles} {...elementProps} as={isSemantic ? `h${safeLevel}` : "div"}>
        {this.renderHeadingContent()}
        {hasDivider ? divider : null}
      </div>
    );
  }
}

Heading.displayName = "Heading";
Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
