import React from "react";
import PropTypes from "prop-types";
import { zValue } from "@paprika/stylers/lib/helpers";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import Overlay from "@paprika/overlay";
import FocusLock from "./components/FocusLock";
import Header from "./components/Header/Header";
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
};

const defaultProps = {
  a11yText: null,
  onClose: () => {},
  onAfterClose: () => {},
  onAfterOpen: () => {},
  zIndex: zValue(5),
};

const TakeoverOverlay = Overlay;
delete TakeoverOverlay.propTypes.isOpen;

export default function Takeover(props) {
  const { a11yText, isOpen, onClose, onAfterClose, onAfterOpen, zIndex, ...moreProps } = props;

  const {
    "Takeover.Content": contentExtracted,
    "Takeover.FocusLock": focusLockExtracted,
    "Takeover.Header": headerExtracted,
    Overlay: overlayExtracted,
    children,
  } = extractChildren(moreProps.children, ["Takeover.Content", "Takeover.FocusLock", "Takeover.Header", "Overlay"]);

  const focusLockProps = focusLockExtracted ? focusLockExtracted.props : {};
  const focusLockOptions = {
    as: sc.FocusLock,
    ...(focusLockProps || {}),
  };

  const takeoverOverlay = overlayExtracted || <TakeoverOverlay />;
  const overlayProps = {
    "data-pka-anchor": "takeover.overlay",
    hasBackdrop: false,
    focusLockOptions,
    ...takeoverOverlay.props,
    isOpen,
    onAfterClose,
    onAfterOpen,
    onClose,
    zIndex,
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

  return React.cloneElement(takeoverOverlay, overlayProps, state => (
    <sc.Wrapper
      state={state}
      {...moreProps}
      aria-label={getAriaLabel()}
      aria-modal
      data-pka-anchor="takeover"
      role="dialog"
      zIndex={zIndex}
    >
      {headerExtracted && <sc.Header {...headerExtracted.props} onClose={onClose} />}
      {contentExtracted && (
        <sc.ContentWrapper role="region" tabIndex="0">
          {contentExtracted}
        </sc.ContentWrapper>
      )}
      {children}
    </sc.Wrapper>
  ));
}

Takeover.displayName = "Takeover";
Takeover.propTypes = propTypes;
Takeover.defaultProps = defaultProps;

Takeover.Header = Header;
Takeover.Content = Content;
Takeover.FocusLock = FocusLock;
Takeover.Overlay = TakeoverOverlay;
