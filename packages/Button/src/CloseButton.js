import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "@paprika/icon/lib/Times";
import closeButtonStyles from "./CloseButton.styles";
import IconButton from "./IconButton";

const propTypes = {
  a11yText: PropTypes.string,
  isDark: PropTypes.bool,
};

const defaultProps = {
  a11yText: null,
  isDark: false,
};

const CloseButton = React.forwardRef((props, ref) => {
  const buttonProps = {
    a11yText: props.a11yText || "close", // TODO: use L10n
    isDark: props.isDark,
    kind: "minor",
  };

  return (
    <IconButton css={closeButtonStyles} {...props} {...buttonProps} ref={ref}>
      <CloseIcon />
    </IconButton>
  );
});

CloseButton.displayName = "CloseButton";
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;

export default CloseButton;
