import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Content.styles";

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

  // can add content inline support
  return (
    <sc.ContentContainer data-pka-anchor="form-element.content" {...moreProps}>
      {children}
    </sc.ContentContainer>
  );
}

Content.displayName = "FormElement.Content";
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
