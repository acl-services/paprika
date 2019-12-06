import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import * as styled from "./Modal.styles";

const propTypes = {
  /** The content for the Modal. */
  children: PropTypes.node.isRequired,

  /** Control the visibility of the modal */
  isOpen: PropTypes.bool.isRequired,

  /** Callback triggered when the modal needs to be close */
  onClose: PropTypes.func,

  /** Callback once the modal has been opened event */
  onAfterOpen: PropTypes.func,

  /** Callback once the modal has been closed event */
  onAfterClose: PropTypes.func,

  /* Control the size (max-width) of the modal */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),

  a11yText: PropTypes.string,
};

const defaultProps = {
  onAfterClose: () => {},
  onClose: () => {},
  onAfterOpen: () => {},
  size: ShirtSizes.MEDIUM,
  a11yText: null,
};

const Modal = props => {
  const { isOpen, onClose, onAfterClose, onAfterOpen, size, a11yText, ...moreProps } = props;

  const {
    "Modal.Overlay": overlayExtracted,
    "Modal.Header": headerExtracted,
    "Modal.Content": contentExtracted,
    "Modal.Footer": footerExtracted,
    children,
  } = extractChildren(moreProps.children, ["Modal.Overlay", "Modal.Header", "Modal.Content", "Modal.Footer"]);

  const overlayProps = overlayExtracted ? overlayExtracted.props : {};

  const ariaLabel = a11yText || (headerExtracted ? headerExtracted.props.children : null);

  return (
    <styled.Overlay
      isOpen={isOpen}
      onClose={onClose}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      {...overlayProps}
    >
      {state => (
        <styled.Wrapper size={size}>
          <styled.Dialog state={state} role="dialog" aria-modal="true" aria-label={ariaLabel} data-pka-anchor="modal">
            {headerExtracted && <styled.Header {...headerExtracted.props} onClose={onClose} />}
            <styled.ContentWrapper role="region" tabIndex="0">
              {contentExtracted}
              {children}
            </styled.ContentWrapper>
            {footerExtracted && <styled.Footer {...footerExtracted.props} />}
          </styled.Dialog>
        </styled.Wrapper>
      )}
    </styled.Overlay>
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
