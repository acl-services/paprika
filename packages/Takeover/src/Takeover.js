import React from "react";
import PropTypes from "prop-types";
import Overlay from "@paprika/overlay";
import { zValue } from "@paprika/stylers/lib/helpers";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import FocusLock from "./components/FocusLock";
import Header from "./components/Header";
import Content from "./components/Content";
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
    "Takeover.FocusLock": focusLockExtracted,
    "Takeover.Overlay": overlayExtracted,
    "Takeover.Header": headerExtracted,
    "Takeover.Content": contentExtracted,
    children,
  } = extractChildren(moreProps.children, [
    "Takeover.Overlay",
    "Takeover.Header",
    "Takeover.Content",
    "Takeover.FocusLock",
  ]);

  const focusLockProps = focusLockExtracted ? focusLockExtracted.props : {};
  const focusLockOptions = {
    as: sc.FocusLock,
    ...(focusLockProps || {}),
  };

  const takeoverOverlay = overlayExtracted || <TakeoverOverlay />;
  const overlayProps = {
    ...takeoverOverlay.props,
    "data-pka-anchor": "takeover.overlay",
    focusLockOptions,
    hasBackdrop: false,
    isOpen,
    onAfterClose,
    onAfterOpen,
    onClose,
    zIndex,
  };

  const ariaLabel = a11yText || (headerExtracted ? headerExtracted.props.children : null);

  return React.cloneElement(takeoverOverlay, overlayProps, state => (
    <sc.Wrapper state={state} role="dialog" aria-label={ariaLabel} aria-modal="true" data-pka-anchor="takeover">
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
