import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import iconButtonStyles from "./IconButton.styles";
import Button from "./Button";

// eslint-disable-next-line no-use-before-define
IconButton.types = {
  kind: constants.kind,
  size: constants.defaultSize,
};
IconButton.propTypes = IconPropTypes; // eslint-disable-line no-use-before-define
IconButton.defaultProps = IconDefaultProps; // eslint-disable-line no-use-before-define

const IconPropTypes = {
  /** Body content of the button (an icon). */
  children: PropTypes.node.isRequired,

  /** The visual style of the button. */
  kind: PropTypes.oneOf([
    IconButton.types.kind.DEFAULT, // eslint-disable-line no-use-before-define
    IconButton.types.kind.SECONDARY, // eslint-disable-line no-use-before-define
    IconButton.types.kind.DESTRUCTIVE, // eslint-disable-line no-use-before-define
    IconButton.types.kind.FLAT, // eslint-disable-line no-use-before-define
    IconButton.types.kind.MINOR, // eslint-disable-line no-use-before-define
    IconButton.types.kind.LINK, // eslint-disable-line no-use-before-define
  ]),

  /** Size of the button (font size, min-height, padding, etc). */
  size: PropTypes.oneOf([IconButton.types.size.SMALL, IconButton.types.size.MEDIUM, IconButton.types.size.LARGE]), // eslint-disable-line no-use-before-define
};

const IconDefaultProps = {
  kind: IconButton.types.kind.DEFAULT, // eslint-disable-line no-use-before-define
  size: IconButton.types.size.MEDIUM, // eslint-disable-line no-use-before-define
};

const IconButton = React.forwardRef((props, ref) => {
  const buttonProps = {
    children: null,
    icon: props.children,
    isFullWidth: false,
  };

  return <Button css={iconButtonStyles} {...props} {...buttonProps} ref={ref} />;
});

IconButton.displayName = "IconButton";

export default IconButton;
