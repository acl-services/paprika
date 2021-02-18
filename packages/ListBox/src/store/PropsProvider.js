import React from "react";
import PropTypes from "prop-types";

export const PropsContext = React.createContext(null);

const propTypes = {
  children: PropTypes.node.isRequired,
  isReadOnly: PropTypes.bool.isRequired,
};

export default function PropsProvider(props) {
  const { children, ...providedProps } = props;

  return <PropsContext.Provider value={providedProps}>{children}</PropsContext.Provider>;
}

PropsProvider.displayName = "PropsProvider";
PropsProvider.propTypes = propTypes;
