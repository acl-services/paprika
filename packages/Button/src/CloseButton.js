import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "@paprika/icon/lib/Times";
import * as constants from "@paprika/constants/lib/Constants";
import closeButtonStyles from "./CloseButton.styles";
import IconButton from "./IconButton";
import * as types from "./types";

const propTypes = {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText: PropTypes.string,

  /** If the close button will be rendered on a dark background and will use inverted colours. */
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
    kind: types.MINOR,
  };

  return (
    <IconButton css={closeButtonStyles} {...props} {...buttonProps} ref={ref}>
      <CloseIcon />
    </IconButton>
  );
});

CloseButton.types = {
  kind: constants.kind,
};
CloseButton.displayName = "CloseButton";
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;

export default CloseButton;
