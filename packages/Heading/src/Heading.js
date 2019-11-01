import React from "react";
import PropTypes from "prop-types";
import headingStyles from "./Heading.styles";

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

const safeValue = n => (n < 1 || Number.isNaN(n) ? 6 : Math.min(n, 6));

function getElementProps(safeDisplayLevel, safeLevel, props) {
  const {
    a11yText,
    children,
    displayLevel,
    domRef,
    hasDivider,
    hasUnderline,
    isHidden,
    isLight,
    isSemantic,
    level,
    ...moreProps
  } = props;
  return {
    "aria-level": isSemantic ? null : safeLevel,
    "aria-label": a11yText || undefined,
    ref: domRef,
    role: isSemantic ? null : "heading",
    ...moreProps,
    ...props,
  };
}

function renderHeadingContent(a11yText, children) {
  return a11yText ? <span aria-hidden>{children}</span> : children;
}

function Heading(props) {
  const { a11yText, children, hasDivider, isSemantic, level, displayLevel } = props;
  const safeLevel = safeValue(level);
  const safeDisplayLevel = displayLevel ? safeValue(displayLevel) : null;
  const divider = <span className="heading__divider" />;
  const elementProps = getElementProps(safeDisplayLevel, safeLevel, props);
  return (
    <div css={headingStyles} {...elementProps} as={isSemantic ? `h${safeLevel}` : "div"}>
      {renderHeadingContent(a11yText, children)}
      {hasDivider ? divider : null}
    </div>
  );
}

Heading.displayName = "Heading";
Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
