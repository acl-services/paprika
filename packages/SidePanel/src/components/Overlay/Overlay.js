import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import { visuallyHidden } from "@paprika/stylers/lib/includes";
import { zValue } from "@paprika/stylers/lib/helpers";
import * as sc from "./Overlay.styles";

const propTypes = {
  /**
   * Will accept the click event on outside of the sidepanel when losing focus
   * @boolean
   */
  hasOutsideClick: PropTypes.bool,
  onClose: PropTypes.func,
  /** Control the z position of the sidepanel overlay */
  zIndex: PropTypes.number,
};

const defaultProps = {
  hasOutsideClick: true,
  onClose: null,
  zIndex: zValue(6),
};

export default function Overlay(props) {
  const I18n = useI18n();

  const { onClose, hasOutsideClick, ...moreProps } = props;
  const handleClick = () => {
    if (hasOutsideClick) {
      onClose();
    }
  };

  const vh = visuallyHidden;

  return (
    <sc.Overlay {...moreProps} onClick={handleClick}>
      <span css={vh}>{I18n.t("close")}</span>
    </sc.Overlay>
  );
}

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
Overlay.displayName = "SidePanel.Overlay";
