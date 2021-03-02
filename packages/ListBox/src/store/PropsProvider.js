import React from "react";
import PropTypes from "prop-types";
import { propTypes as a11yPropTypes } from "../components/A11y";

export const PropsContext = React.createContext(null);

export default function PropsProvider(props) {
  const { children, ...providedProps } = props;

  return <PropsContext.Provider value={providedProps}>{children}</PropsContext.Provider>;
}

PropsProvider.displayName = "PropsProvider";

PropsProvider.propTypes = {
  ...a11yPropTypes,
  children: PropTypes.node.isRequired,
  hasError: PropTypes.bool.isRequired,
  idListBox: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isInline: PropTypes.bool.isRequired,
  isReadOnly: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
