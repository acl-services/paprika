import React from "react";
import PropTypes from "prop-types";
import { headingStyles, dividerStyles } from "./Heading.styles";

const propTypes = {
  /** Optional aria text if it should be more descriptive than what is rendered */
  a11yText: PropTypes.string,

  /** Heading content is required */
  children: PropTypes.node.isRequired,

  /** Optional display level(1-6) affects styles only */
  displayLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

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

const Heading = React.forwardRef((props, ref) => {
  const { a11yText, children, displayLevel, hasDivider, isSemantic, level, ...moreProps } = props;
  const headingRef = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      if (headingRef.current) {
        if (!moreProps.tabIndex) headingRef.current.setAttribute("tabindex", "-1");
        headingRef.current.focus();
      }
    },
  }));

  const safeLevel = safeValue(level);
  const divider = <span css={dividerStyles} />;
  const elementProps = {
    "aria-label": a11yText || null,
    "aria-level": isSemantic ? null : safeLevel,
    as: isSemantic ? `h${safeLevel}` : "div",
    hasDivider,
    ref: headingRef,
    role: isSemantic ? null : "heading",
    safeDisplayLevel: displayLevel ? safeValue(displayLevel) : null,
    safeLevel,
  };

  return (
    <div data-pka-anchor="heading" css={headingStyles} {...elementProps} {...moreProps}>
      {renderHeadingContent(a11yText, children)}
      {hasDivider && divider}
    </div>
  );
});

Heading.displayName = "Heading";
Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
