import React from "react";
import PropTypes from "prop-types";
import { dialogStyles, dialogContentStyles } from "./Dialog.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  handleAnimationEnd: PropTypes.func.isRequired,
  header: PropTypes.node,
  isInline: PropTypes.bool,
  offsetY: PropTypes.number,
  onClose: PropTypes.func,
  refHeader: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  refSidePanelContent: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const defaultProps = {
  footer: null,
  header: null,
  isInline: false,
  offsetY: 0,
  onClose: () => {},
};

function Dialog(props) {
  const refSidePanel = React.useRef(null);

  const {
    children,
    footer,
    handleAnimationEnd,
    header,
    isInline,
    offsetY,
    onClose,
    refHeader,
    refSidePanelContent,
    width,
    ...moreProps
  } = props;

  return (
    <div
      tabIndex="-1"
      aria-modal="true"
      css={dialogStyles}
      onAnimationEnd={handleAnimationEnd}
      role="dialog"
      width={width}
      isInline={isInline}
      offsetY={props.offsetY}
      ref={refSidePanel}
      {...moreProps}
    >
      {header ? React.cloneElement(header, { ...header.props, ref: refHeader, onClose }) : null}
      <div
        css={dialogContentStyles}
        isSticky={footer ? footer.props.isSticky : null}
        footerHeight={footer ? footer.props.height : null}
        tabIndex="-1"
        ref={refSidePanelContent}
      >
        {children}
      </div>
      {footer ? React.cloneElement(footer, { refSidePanel, width, ...footer.props }) : null}
    </div>
  );
}

export default Dialog;

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
