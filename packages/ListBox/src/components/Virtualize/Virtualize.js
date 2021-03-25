/* eslint-disable react/no-unused-prop-types */

/* A shell component to collect and distribute Virtualize props
 */

import React from "react";
import PropTypes from "prop-types";

export default function Virtualize() {
  return <></>;
}

export const propTypes = {
  height: PropTypes.number,
  itemCount: PropTypes.number.isRequired,
  itemSize: PropTypes.number,
};

export const defaultProps = {
  height: 280,
  itemSize: 32,
};

Virtualize.displayName = "ListBox.Virtualize";
Virtualize.propTypes = propTypes;
Virtualize.defaultProps = defaultProps;
