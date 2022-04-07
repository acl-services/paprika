import React from "react";
import PropTypes from "prop-types";
import { zValue } from "@paprika/stylers/lib/helpers";
import { extractChildren } from "@paprika/helpers";
import OriginalOverlay from "@paprika/overlay";
import Overlay from "./components/Overlay";
import FocusLock from "./components/FocusLock";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Content from "./components/Content/Content";
import * as sc from "./Takeover.styles";

const propTypes = {
  /* Description of the Takeover dialog for assistive technology */
  a11yText: PropTypes.string,

  /** The content for the Takeover */
  children: PropTypes.node.isRequired,

  /** Control the visibility of the Takeover */
  isOpen: PropTypes.bool.isRequired,

  /** Callback once the Takeover has been closed event */
  onAfterClose: PropTypes.func,

  /** Callback once the Takeover has been opened event */
  onAfterOpen: PropTypes.func,

  /** Callback triggered when the takeover needs to be close */
  onClose: PropTypes.func,

  /** The z-index of the Takeover content */
  zIndex: PropTypes.number,

  /** Set Takeover to full width without any margins and max-width */
  isFullWidth: PropTypes.boolean,
};

const defaultProps = {
  a11yText: null,
  onClose: () => {},
  onAfterClose: () => {},
  onAfterOpen: () => {},
  zIndex: zValue(5),
  isFullWidth: false,
};

export default function Takeover(props) {
  const { a11yText, isOpen, onClose, onAfterClose, onAfterOpen, zIndex, isFullWidth, ...moreProps } = props;

  const {
    "Takeover.Content": contentExtracted,
    "Takeover.FocusLock": focusLockExtracted,
    "Takeover.Header": headerExtracted,
    "Takeover.Footer": footerExtracted,
    "Takeover.Overlay": overlayExtracted,
    children,
  } = extractChildren(moreProps.children, [
    "Takeover.Content",
    "Takeover.FocusLock",
    "Takeover.Header",
    "Takeover.Footer",
    "Takeover.Overlay",
  ]);

  const focusLockProps = focusLockExtracted ? focusLockExtracted.props : {};
  const focusLockOptions = {
    as: sc.FocusLock,
    ...(focusLockProps || {}),
  };

  const overlayProps = {
    "data-pka-anchor": "takeover.overlay",
    hasBackdrop: true,
    focusLockOptions,
    ...(overlayExtracted && overlayExtracted.props),
    isOpen,
    onAfterClose,
    onAfterOpen,
    onClose,
    zIndex,
    isBackdropClickDisabled: true,
  };

  function getAriaLabel() {
    if (a11yText) return a11yText;
    if (!headerExtracted || typeof headerExtracted.props.children !== "string") {
      console.error(
        "Accessibility is important 😇\nThe Takeover requires either an a11yText prop or a Takeover.Header with a string for children."
      );
      return null;
    }

    return headerExtracted.props.children;
  }

  return (
    <OriginalOverlay {...overlayProps}>
      {state => (
        <sc.Takeover
          state={state}
          isFullWidth={isFullWidth}
          {...moreProps}
          aria-label={getAriaLabel()}
          aria-modal
          data-pka-anchor="takeover"
          role="dialog"
          zIndex={zIndex}
        >
          {headerExtracted && <sc.Header {...headerExtracted.props} onClose={onClose} />}
          {contentExtracted && (
            <sc.Content role="region" tabIndex="0">
              {contentExtracted}
            </sc.Content>
          )}
          {children}
          {footerExtracted}
        </sc.Takeover>
      )}
    </OriginalOverlay>
  );
}

Takeover.displayName = "Takeover";
Takeover.propTypes = propTypes;
Takeover.defaultProps = defaultProps;

Takeover.Header = Header;
Takeover.Footer = Footer;
Takeover.Content = Content;
Takeover.FocusLock = FocusLock;
Takeover.Overlay = Overlay;
