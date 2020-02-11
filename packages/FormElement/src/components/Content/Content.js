import React from "react";
import PropTypes from "prop-types";
import { RefOf } from "@paprika/helpers/lib/customPropTypes";
import * as sc from "./Content.styles";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  idForLabel: PropTypes.string,
  refLabel: RefOf(),
  ariaDescribedBy: PropTypes.string,
};

const defaultProps = {
  idForLabel: null,
  ariaDescribedBy: null,
  refLabel: null,
};

function Content(props) {
  const { children, idForLabel, refLabel, ariaDescribedBy, ...moreProps } = props;

  if (!children) {
    return null;
  }

  return (
    <sc.ContentContainer data-pka-anchor="form-element.content" {...moreProps}>
      {typeof children === "function" ? children({ idForLabel, refLabel, ariaDescribedBy }) : children}
    </sc.ContentContainer>
  );
}

Content.displayName = "FormElement.Content";
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
