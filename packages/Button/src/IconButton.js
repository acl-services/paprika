import React from "react";
import PropTypes from "prop-types";
import * as types from "./types";
import iconButtonStyles from "./IconButton.styles";
import Button from "./Button";

const IconPropTypes = {
  /** Body content of the button (an icon). */
  children: PropTypes.node.isRequired,

  /** The visual style of the button. */
  kind: PropTypes.oneOf(types.ALL),

  /** Size of the button (font size, min-height, padding, etc). */
  size: PropTypes.oneOf(types.DEFAULTS),
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

IconButton.types = types;
IconButton.displayName = "IconButton";
IconButton.propTypes = IconPropTypes;
IconButton.defaultProps = IconDefaultProps;

export default IconButton;
