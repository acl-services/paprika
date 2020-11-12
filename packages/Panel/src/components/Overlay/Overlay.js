import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import * as sc from "./Overlay.styles";

const propTypes = {
  /** Will call an onClose handler when clicked on (outside of the Panel) */
  hasOutsideClick: PropTypes.bool,

  /** Callback for click event */
  onClose: PropTypes.func,

  /** The z-index of the Panel Overlay */
  zIndex: PropTypes.number,
};

const defaultProps = {
  hasOutsideClick: true,
  onClose: null,
  zIndex: null,
};

export default function Overlay(props) {
  const { onClose, hasOutsideClick, ...moreProps } = props;
  const I18n = useI18n();

  const handleClick = () => {
    if (hasOutsideClick) {
      onClose();
    }
  };

  const overlayProps = {
    a11yText: I18n.t("close"),
    ...moreProps,
    children: "",
    "data-pka-anchor": "side-panel.overlay",
    onClick: handleClick,
  };

  return <sc.Overlay {...overlayProps} />;
}

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
Overlay.displayName = "Panel.Overlay";
