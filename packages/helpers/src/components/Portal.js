import ReactDOM from "react-dom";
import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  container: PropTypes.instanceOf(Element),
};

const defaultProps = {
  children: null,
  active: true,
  container: document.body,
};

const Portal = ({ children, active, container }) =>
  active ? ReactDOM.createPortal(children, container) : <React.Fragment>{children}</React.Fragment>;

Portal.propTypes = propTypes;
Portal.defaultProps = defaultProps;

export default Portal;
