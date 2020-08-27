import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import * as types from "./types";
import iconButtonStyles from "./IconButton.styles";
import Button from "./Button";

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
  kind: types.DEFAULT,
  size: types.MEDIUM,
};

const IconButton = React.forwardRef((props, ref) => {
  const buttonProps = {
    children: null,
    icon: props.children,
    isFullWidth: false,
  };

  return <Button css={iconButtonStyles} {...props} {...buttonProps} ref={ref} />;
});

IconButton.types = {
  kind: constants.kind,
  size: constants.defaultSize,
};
IconButton.displayName = "IconButton";
IconButton.propTypes = IconPropTypes;
IconButton.defaultProps = IconDefaultProps;

export default IconButton;
