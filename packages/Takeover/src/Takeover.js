import React from "react";
import PropTypes from "prop-types";
import Overlay from "@paprika/overlay";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import FocusLock from "./components/FocusLock";
import * as styled from "./Takeover.styles";

const propTypes = {
  /** The content for the Takeover. */
  children: PropTypes.node.isRequired,

  /** Control the visibility of the takeover */
  isOpen: PropTypes.bool.isRequired,

  /** Callback triggered when the takeover needs to be close */
  onClose: PropTypes.func,

  /** Callback once the takeover has been opened event */
  onAfterOpen: PropTypes.func,

  /** Callback once the takeover has been closed event */
  onAfterClose: PropTypes.func,
};

const defaultProps = {
  onAfterClose: () => {},
  onClose: () => {},
  onAfterOpen: () => {},
};

const Takeover = props => {
  const { isOpen, onClose, onAfterClose, onAfterOpen, ...moreProps } = props;

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
  const overlayProps = overlayExtracted ? overlayExtracted.props : {};

  const focusLockOptions = {
    as: styled.FocusLock,
    ...(focusLockProps || {}),
  };

  return (
    <Overlay
      hasBackdrop={false}
      isOpen={isOpen}
      onClose={onClose}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      {...overlayProps}
      focusLockOptions={focusLockOptions}
    >
      {state => (
        <styled.Wrapper state={state} role="dialog" data-pka-anchor="takeover">
          {headerExtracted && <styled.Header {...headerExtracted.props} onClose={onClose} />}
          {contentExtracted && (
            <styled.ContentWrapper role="region" tabIndex="0">
              {contentExtracted}
            </styled.ContentWrapper>
          )}
          {children}
        </styled.Wrapper>
      )}
    </Overlay>
  );
};

Takeover.FocusLock = FocusLock;
Takeover.propTypes = propTypes;
Takeover.defaultProps = defaultProps;

export default Takeover;
