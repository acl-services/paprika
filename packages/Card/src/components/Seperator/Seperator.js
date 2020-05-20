import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import seperatorStyles from "./Seperator.styles";

const propTypes = {
  /** Size of the seperator (min-height). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  size: ShirtSizes.SMALL,
};

const Seperator = props => {
  return (
    <div data-pka-anchor="card.Seperator" css={seperatorStyles} {...props}>
      &nbsp;
    </div>
  );
};

Seperator.displayName = "Seperator";
Seperator.propTypes = propTypes;
Seperator.defaultProps = defaultProps;

export default Seperator;
