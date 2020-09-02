import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import Button from "./Button";
import * as sc from "./IconButton.styles";

const IconButton = React.forwardRef((props, ref) => {
  const buttonProps = {
    children: null,
    icon: props.children,
    isFullWidth: false,
  };

  return <sc.IconButton {...props} {...buttonProps} ref={ref} />;
});

IconButton.types = {
  kind: constants.kind,
  size: constants.defaultSize,
};

const IconPropTypes = {
  /** Body content of the button (an icon). */
  children: PropTypes.node.isRequired,

  /** The visual style of the button. */
  kind: PropTypes.oneOf([
    IconButton.types.kind.DEFAULT,
    IconButton.types.kind.PRIMARY,
    IconButton.types.kind.SECONDARY,
    IconButton.types.kind.DESTRUCTIVE,
    IconButton.types.kind.FLAT,
    IconButton.types.kind.MINOR,
    IconButton.types.kind.LINK,
  ]),

  /** Size of the button (font size, min-height, padding, etc). */
  size: PropTypes.oneOf([IconButton.types.size.SMALL, IconButton.types.size.MEDIUM, IconButton.types.size.LARGE]),
};

const IconDefaultProps = {
  kind: IconButton.types.kind.DEFAULT,
  size: IconButton.types.size.MEDIUM,
};

IconButton.displayName = "IconButton";
IconButton.propTypes = IconPropTypes;
IconButton.defaultProps = IconDefaultProps;

export default IconButton;
