import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Metadata.styles";

const propTypes = {
  /** Primary content. */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Metadata = props => {
  const { children } = props;

  return (
    <sc.Metadata data-pka-anchor="card.metadata" {...props}>
      {children}
    </sc.Metadata>
  );
};

Metadata.displayName = "Metadata";
Metadata.propTypes = propTypes;
Metadata.defaultProps = defaultProps;

export default Metadata;
