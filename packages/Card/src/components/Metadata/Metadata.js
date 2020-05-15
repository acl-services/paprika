import React from "react";
import PropTypes from "prop-types";
import metadataStyles from "./MetaData.styles";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const MetaData = props => {
  const { children } = props;

  return (
    <span data-pka-anchor="card.metadata" css={metadataStyles} {...props}>
      {children}
    </span>
  );
};

MetaData.displayName = "MetaData";
MetaData.propTypes = propTypes;
MetaData.defaultProps = defaultProps;

export default MetaData;
