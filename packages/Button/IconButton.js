import React from "react";
import iconButtonStyles from "./IconButton.styles";
import Button from ".";

const IconButton = React.forwardRef((props, ref) => {
  const buttonProps = {
    isFullWidth: false,
    children: null,
  };

  return <Button css={iconButtonStyles} {...props} {...buttonProps} ref={ref} />;
});

IconButton.displayName = "IconButton";

export default IconButton;
