import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  isInline: PropTypes.bool,
};

const defaultProps = {
  isInline: false,
};

function Content(props) {
  const { children, isInline, ...moreProps } = props;

  if (!children) {
    return null;
  }

  // todo: add support for inline content
  return (
    <div data-pka-anchor="form-element.content" {...moreProps}>
      {children}
    </div>
  );
}

Content.displayName = "FormElement.Content";
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
