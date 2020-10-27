import React from "react";
import PropTypes from "prop-types";
import types from "../../types";

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
  align: PropTypes.oneOf([types.align.TOP, types.align.CENTER]),

  children: PropTypes.node,
};

const defaultProps = {
  align: types.align.TOP,
  children: null,
};

NotificationImage.displayName = "NotificationCard.Image";
NotificationImage.propTypes = propTypes;
NotificationImage.defaultProps = defaultProps;

export default NotificationImage;
