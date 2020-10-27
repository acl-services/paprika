import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "@paprika/icon/lib/Times";
import * as constants from "@paprika/constants/lib/Constants";
import * as types from "../../types";
import * as sc from "./CloseButton.styles";

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

const Close = React.forwardRef((props, ref) => {
  const buttonProps = {
    a11yText: props.a11yText || "close", // TODO: use L10n
    isDark: props.isDark,
    kind: types.MINOR,
  };

  return (
    <sc.CloseButton {...props} {...buttonProps} ref={ref}>
      <CloseIcon />
    </sc.CloseButton>
  );
});

Close.types = {
  kind: constants.kind,
};
Close.displayName = "Button.Close";
Close.propTypes = propTypes;
Close.defaultProps = defaultProps;

export default Close;
