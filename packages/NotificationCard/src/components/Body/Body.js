import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Body.styles";

function NotificationBody({ children, ...moreProps }) {
  return <sc.NotificationBody {...moreProps}>{children}</sc.NotificationBody>;
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

NotificationBody.displayName = "NotificationCard.Body";
NotificationBody.propTypes = propTypes;
NotificationBody.defaultProps = defaultProps;

export default NotificationBody;
