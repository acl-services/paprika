import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Footer.styles";

function NotificationFooter({ children, ...moreProps }) {
  return <sc.NotificationFooter {...moreProps}>{children}</sc.NotificationFooter>;
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

NotificationFooter.displayName = "NotificationCard.Footer";
NotificationFooter.propTypes = propTypes;
NotificationFooter.defaultProps = defaultProps;

export default NotificationFooter;
