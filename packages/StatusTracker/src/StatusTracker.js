import React from "react";
import PropTypes from "prop-types";
import Point from "./components/Point";
import { kinds } from "./types";
import * as sc from "./StatusTracker.styles";

function StatusTracker(props) {
  const { children, hasExtensionLine, ...moreProps } = props;

  return (
    <sc.StatusTracker data-pka-anchor="status-tracker" hasExtensionLine={hasExtensionLine} {...moreProps}>
      {children}
    </sc.StatusTracker>
  );
}

const propTypes = {
  children: PropTypes.node,
  /** Displays extension line if true. */
  hasExtensionLine: PropTypes.bool,
};

const defaultProps = {
  children: null,
  hasExtensionLine: true,
};

StatusTracker.displayName = "StatusTracker";
StatusTracker.propTypes = propTypes;
StatusTracker.defaultProps = defaultProps;
StatusTracker.Point = Point;

StatusTracker.types = {
  kind: {
    CURRENT: kinds.CURRENT,
    FUTURE: kinds.FUTURE,
    PAST: kinds.PAST,
  },
};

export default StatusTracker;
