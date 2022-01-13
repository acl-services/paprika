import ReactDOM from "react-dom";
import React from "react";
import PropTypes from "prop-types";
import { DOMElementType } from "..";

const propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  container: DOMElementType,
};

const defaultProps = {
  children: null,
  active: true,
  container: null,
};

function Portal(props) {
  const { active, children, container } = props;

  return active ? ReactDOM.createPortal(children, container || document.body) : <>{children}</>;
}

Portal.propTypes = propTypes;
Portal.defaultProps = defaultProps;

export default Portal;
