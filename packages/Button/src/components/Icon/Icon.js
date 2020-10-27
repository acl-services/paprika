import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import * as sc from "./IconButton.styles";

const Icon = React.forwardRef((props, ref) => {
  const buttonProps = {
    children: null,
    icon: props.children,
    isFullWidth: false,
  };

  return <sc.IconButton {...props} {...buttonProps} ref={ref} />;
});

Icon.types = {
  kind: constants.kind,
  size: constants.defaultSize,
};

const IconPropTypes = {
  /** Body content of the button (an icon). */
  children: PropTypes.node.isRequired,

  /** The visual style of the button. */
  kind: PropTypes.oneOf([
    Icon.types.kind.DEFAULT,
    Icon.types.kind.PRIMARY,
    Icon.types.kind.SECONDARY,
    Icon.types.kind.DESTRUCTIVE,
    Icon.types.kind.FLAT,
    Icon.types.kind.MINOR,
    Icon.types.kind.LINK,
  ]),

  /** Size of the button (font size, min-height, padding, etc). */
  size: PropTypes.oneOf([Icon.types.size.SMALL, Icon.types.size.MEDIUM, Icon.types.size.LARGE]),
};

const IconDefaultProps = {
  kind: Icon.types.kind.DEFAULT,
  size: Icon.types.size.MEDIUM,
};

Icon.displayName = "Button.Icon";
Icon.propTypes = IconPropTypes;
Icon.defaultProps = IconDefaultProps;

export default Icon;
