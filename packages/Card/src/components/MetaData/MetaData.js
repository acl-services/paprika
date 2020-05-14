import React from "react";
import PropTypes from "prop-types";
import metadataStyles from "./Metadata.styles";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Metadata = props => {
  const { children } = props;

  return (
    <span data-pka-anchor="card.metadata" css={metadataStyles} {...props}>
      {children}
    </span>
  );
};

Metadata.displayName = "Metadata";
Metadata.propTypes = propTypes;
Metadata.defaultProps = defaultProps;

export default Metadata;
