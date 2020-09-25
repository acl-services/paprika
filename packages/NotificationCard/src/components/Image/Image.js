import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";

import * as sc from "./Image.styles";

function NotificationImage({ align, children, ...moreProps }) {
  return (
    <sc.NotificationImage aria-hidden="true" align={align} {...moreProps}>
      {children}
    </sc.NotificationImage>
  );
}

const propTypes = {
  /** Aligns the position of the image */
  align: PropTypes.oneOf([constants.align.TOP, constants.align.CENTER]),

  children: PropTypes.node,
};

const defaultProps = {
  align: constants.align.TOP,
  children: null,
};

NotificationImage.displayName = "NotificationCard.Image";
NotificationImage.propTypes = propTypes;
NotificationImage.defaultProps = defaultProps;

export default NotificationImage;
