import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /** Control the visibility of the takeover */
  isOpen: PropTypes.bool.isRequired,

  /** Callback triggered when the takeover needs to be close */
  onClose: PropTypes.func,
};

const Takeover = ({ isOpen }) => isOpen && <div />;

Takeover.propTypes = propTypes;

export default Takeover;
