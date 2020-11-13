import React from "react";
import PropTypes from "prop-types";
import { RefOf } from "@paprika/helpers/lib/customPropTypes";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  /** Sets id for label */
  idForLabel: PropTypes.string,
  refLabel: RefOf(),
  /** Used for aria-describedby on the FormElement */
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
    <div data-pka-anchor="form-element.content" {...moreProps}>
      {typeof children === "function" ? children({ idForLabel, refLabel, ariaDescribedBy }) : children}
    </div>
  );
}

Content.displayName = "FormElement.Content";
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
