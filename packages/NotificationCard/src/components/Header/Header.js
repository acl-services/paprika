import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Header.styles";

function NotificationHeader({ children, ...moreProps }) {
  return <sc.NotificationHeader {...moreProps}>{children}</sc.NotificationHeader>;
}

const propTypes = {
  children: PropTypes.node,

  /** Heading level(1-6) is required. */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};

const defaultProps = {
  children: null,
};

NotificationHeader.displayName = "NotificationCard.Header";
NotificationHeader.propTypes = propTypes;
NotificationHeader.defaultProps = defaultProps;

export default NotificationHeader;
