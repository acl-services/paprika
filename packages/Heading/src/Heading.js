import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Heading.styles";

const propTypes = {
  /** Optional aria text if it should be more descriptive than what is rendered */
  a11yText: PropTypes.string,

  /** Heading content is required */
  children: PropTypes.node.isRequired,

  /** Optional display level(1-6) affects styles only */
  displayLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

  /** Ref function that returns DOM node for heading */
  // TODO: Replace with a focus() method via useImperativeHandle()
  domRef: PropTypes.func,

  /** Horizontal divider style */
  hasDivider: PropTypes.bool,

  /** Underline style */
  hasUnderline: PropTypes.bool,

  /** Optional, visually hide the header */
  isHidden: PropTypes.bool,

  /** Optional, renders the children at a lighter font weight */
  isLight: PropTypes.bool,

  /** Optional, using <div> to avoid styles override by global css. */
  isSemantic: PropTypes.bool,

  /** Heading level(1-6) is required. */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};

const defaultProps = {
  a11yText: null,
  displayLevel: null,
  domRef: () => {},
  hasDivider: false,
  hasUnderline: false,
  isHidden: false,
  isLight: false,
  isSemantic: true,
};

const safeValue = n => (n === undefined || n < 1 || Number.isNaN(n) ? 6 : Math.min(n, 6));

function renderHeadingContent(a11yText, children) {
  return a11yText ? <span aria-hidden>{children}</span> : children;
}

function Heading(props) {
  const { a11yText, children, displayLevel, domRef, hasDivider, isSemantic, level, ...moreProps } = props;

  const safeLevel = safeValue(level);
  const divider = <sc.dividerStyles />;
  const elementProps = {
    "aria-label": a11yText || undefined,
    "aria-level": isSemantic ? null : safeLevel,
    as: isSemantic ? `h${safeLevel}` : "div",
    hasDivider,
    ref: domRef,
    role: isSemantic ? null : "heading",
    safeDisplayLevel: displayLevel ? safeValue(displayLevel) : null,
    safeLevel,
  };

  return (
    <sc.headingStyles data-pka-anchor="heading" {...elementProps} {...moreProps}>
      {renderHeadingContent(a11yText, children)}
      {hasDivider ? divider : null}
    </sc.headingStyles>
  );
}

Heading.displayName = "Heading";
Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
