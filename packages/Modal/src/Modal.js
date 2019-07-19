/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import uuid from "uuid/v4";
import stylers from "@paprika/stylers";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import { contentStyles, modalStyles, frameStyles, overlayStyles } from "./Modal.styles";

const propTypes = {
  /** Aria title of dialog for accessibility. */
  ariaLabel: PropTypes.string.isRequired,

  /** Content for the Modal. */
  children: PropTypes.node.isRequired,

  /** Custom classes for the root element of the Modal. */
  className: PropTypes.string,

  /** If the Modal includes an overlay for content below it. */
  hasOverlay: PropTypes.bool,

  /** Controls the visibility of the Modal. */
  isOpen: PropTypes.bool,

  /** Function to call when "esc" key is pressed. */
  onEscKey: PropTypes.func,

  /** Function to call when overlay is clicked. */
  onOverlayClick: PropTypes.func,

  /** Exposes a reference to the Modal's portal element. */
  portalRef: PropTypes.func,

  /** Makes the content of the modal scrollable, but as a side effect prevents any content (e.g. MultiSelects) from
  overflowing. If you need this on, you may want to consider using a different component instead of this one. */
  isScrollable: PropTypes.bool,

  /** Width of the Modal. */
  width: PropTypes.oneOf(ShirtSizes.DEFAULT),

  /** Optional override of z-index. */
  zIndex: PropTypes.number,
};

const defaultProps = {
  className: "",
  hasOverlay: true,
  isOpen: false,
  isScrollable: false,
  onEscKey: () => {},
  onOverlayClick: () => {},
  portalRef: () => {},
  width: "medium",
  zIndex: null,
};

let modalRoot;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalContainer = null;
    this.ariaId = uuid();

    // TODO: make this optional
    if (!modalRoot) {
      modalRoot = document.createElement("div");
      document.body.appendChild(modalRoot);
    }

    this.el = document.createElement("div");
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
    modalRoot.appendChild(this.el);
  }

  componentDidUpdate() {
    this.renderModal();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    modalRoot.removeChild(this.el);
  }

  setRef = node => {
    this.portalRef = node;
    this.props.portalRef(node);
  };

  handleKeyDown = event => {
    if (event.key === "Escape") this.props.onEscKey();
  };

  renderOverlay() {
    const { hasOverlay, onOverlayClick } = this.props;

    if (!hasOverlay) return null;

    return <div css={overlayStyles} onClick={onOverlayClick} onKeyDown={onOverlayClick} tabIndex="-1" />;
  }

  renderModal() {
    const { ariaLabel, children, className, isOpen, isScrollable, width, zIndex } = this.props;
    const rootClasses = classNames(className, { "modal--is-open": isOpen });
    return (
      <div
        className={rootClasses}
        css={modalStyles}
        isOpen={isOpen}
        width={width}
        onKeyDown={this.handleKeyDown}
        ref={this.setRef}
        zIndex={zIndex}
      >
        {this.renderOverlay()}
        <div css={frameStyles} width={width}>
          <section
            css={contentStyles}
            isOpen={isOpen}
            isScrollable={isScrollable}
            role="dialog"
            aria-labelledby={this.ariaId}
          >
            <span css={stylers.visuallyHidden} id={this.ariaId}>
              {ariaLabel}
            </span>
            {children}
          </section>
        </div>
      </div>
    );
  }

  render() {
    return ReactDOM.createPortal(this.renderModal(), this.el);
  }
}

Modal.displayName = "Modal";
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
