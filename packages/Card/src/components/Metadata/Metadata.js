import React from "react";
import PropTypes from "prop-types";
import * as sc from "./MetaData.styles";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const MetaData = props => {
  const { children } = props;

  return (
    <sc.MetaData data-pka-anchor="card.metadata" {...props}>
      {children}
    </sc.MetaData>
  );
};

MetaData.displayName = "MetaData";
MetaData.propTypes = propTypes;
MetaData.defaultProps = defaultProps;

export default MetaData;
