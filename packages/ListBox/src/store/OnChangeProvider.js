import React from "react";
import PropTypes from "prop-types";

export const OnChangeContext = React.createContext(null);

const propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function OnChangeProvider(props) {
  const { children, onChange } = props;
  return <OnChangeContext.Provider value={onChange}>{children}</OnChangeContext.Provider>;
}

OnChangeProvider.propTypes = propTypes;
