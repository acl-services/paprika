import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import * as sc from "./Separator.styles";

const propTypes = {
  /** Size of the separator (min-height). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  size: ShirtSizes.SMALL,
};

const Separator = props => {
  return (
    <sc.separatorStyles data-pka-anchor="card.separator" {...props}>
      &nbsp;
    </sc.separatorStyles>
  );
};

Separator.displayName = "Separator";
Separator.propTypes = propTypes;
Separator.defaultProps = defaultProps;

export default Separator;
