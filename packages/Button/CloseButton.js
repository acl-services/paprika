import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "@paprika/icon/Times";
import closeButtonStyles from "./CloseButton.styles";
import Button from "./Button";

const propTypes = {
  isDark: PropTypes.bool,
};

const defaultProps = {
  isDark: false,
};

const CloseButton = React.forwardRef((props, ref) => {
  const buttonProps = {
    icon: <CloseIcon />,
    isDark: props.isDark,
    isSquare: true,
    kind: "minor",
  };

  return <Button css={closeButtonStyles} {...props} {...buttonProps} ref={ref} />;
});

CloseButton.displayName = "CloseButton";
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;

export default CloseButton;
