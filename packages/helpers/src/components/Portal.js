import ReactDOM from "react-dom";
import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  container: PropTypes.node,
  portalMount: PropTypes.element,
};

const defaultProps = {
  children: null,
  active: true,
  container: null,
  portalMount: document.body,
};

function Portal(props) {
  const { active, children, container, portalMount } = props;

  return active ? ReactDOM.createPortal(children, container || portalMount) : <>{children}</>;
}

Portal.propTypes = propTypes;
Portal.defaultProps = defaultProps;

export default Portal;
