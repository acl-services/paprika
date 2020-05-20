import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import * as sc from "./Seperator.styles";

const propTypes = {
  /** Size of the seperator (min-height). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  size: ShirtSizes.SMALL,
};

const Seperator = props => {
  const { size } = props;

  const seperatorProps = {
    size,
  };
  return (
    <sc.seperatorStyles data-pka-anchor="card.seperator" {...seperatorProps}>
      &nbsp;
    </sc.seperatorStyles>
  );
};

Seperator.displayName = "Seperator";
Seperator.propTypes = propTypes;
Seperator.defaultProps = defaultProps;

export default Seperator;
