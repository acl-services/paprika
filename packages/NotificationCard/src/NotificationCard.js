import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import NotificationImage from "./components/Image";
import NotificationHeader from "./components/Header";
import NotificationBody from "./components/Body";
import NotificationFooter from "./components/Footer";

import * as sc from "./NotificationCard.styles";

function NotificationCard(props) {
  const { children, maxWidth, ...moreProps } = props;

  const { "NotificationCard.Image": extractedImage } = extractChildren(children, ["NotificationCard.Image"]);

  return (
    <sc.NotificationCardWrapper maxWidth={maxWidth} {...moreProps}>
      {extractedImage}
      <sc.NotificationMessageWrapper>
        {React.Children.map(children, child => {
          if (extractedImage && child.type === extractedImage.type) return null;
          return child;
        })}
      </sc.NotificationMessageWrapper>
    </sc.NotificationCardWrapper>
  );
}

const propTypes = {
  children: PropTypes.node,

  /** Dictates the maximum width of the component */
  maxWidth: PropTypes.string,
};

const defaultProps = {
  children: null,
  maxWidth: null,
};

NotificationCard.displayName = "NotificationCard";
NotificationCard.propTypes = propTypes;
NotificationCard.defaultProps = defaultProps;
NotificationCard.types = {
  align: {
    TOP: constants.align.TOP,
    CENTER: constants.align.CENTER,
  },
};

NotificationCard.Image = NotificationImage;
NotificationCard.Header = NotificationHeader;
NotificationCard.Body = NotificationBody;
NotificationCard.Footer = NotificationFooter;

export default NotificationCard;
