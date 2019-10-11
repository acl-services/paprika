import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import iconButtonStyles from "./IconButton.styles";
import Button from "./Button";

const IconPropTypes = {
  /** Body content of the button (an icon). */
  children: PropTypes.node.isRequired,

  /** The visual style of the button. */
  kind: PropTypes.oneOf(Button.Kinds),

  /** Size of the button (font size, min-height, padding, etc). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const IconDefaultProps = {
  kind: Button.Kinds.DEFAULT,
  size: ShirtSizes.MEDIUM,
};

const IconButton = React.forwardRef((props, ref) => {
  const buttonProps = {
    children: null,
    icon: props.children,
    isFullWidth: false,
  };

  return <Button css={iconButtonStyles} {...props} {...buttonProps} ref={ref} />;
});

IconButton.Kinds = Button.Kinds;
IconButton.displayName = "IconButton";
IconButton.propTypes = IconPropTypes;
IconButton.defaultProps = IconDefaultProps;

export default IconButton;
