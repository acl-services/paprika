import React from "react";
import PropTypes from "prop-types";
import ContentContainerStyled from "./Content.styles";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  idForLabel: PropTypes.string,
  refLabel: PropTypes.shape({ current: PropTypes.instanceOf(Object) }),
  ariaDescribedBy: PropTypes.string,
};

const defaultProps = {
  idForLabel: "",
  ariaDescribedBy: "",
  refLabel: null,
};

function Content(props) {
  const { children, idForLabel, refLabel, ariaDescribedBy, ...moreProps } = props;

  if (!children) {
    return null;
  }

  return (
    <ContentContainerStyled data-pka-anchor="formElement.content" {...moreProps}>
      {typeof children === "function" ? children({ idForLabel, refLabel, ariaDescribedBy }) : children}
    </ContentContainerStyled>
  );
}

Content.displayName = "FormElement.Content";
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
