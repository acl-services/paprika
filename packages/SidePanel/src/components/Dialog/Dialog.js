import React from "react";
import PropTypes from "prop-types";
import { dialogStyles, dialogContentStyles } from "./Dialog.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  header: PropTypes.node,
  kind: PropTypes.oneOf(["default", "child"]),
  isCompact: PropTypes.bool,
  isInline: PropTypes.bool,
  offsetY: PropTypes.number,
  onAnimationEnd: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  refHeader: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  refSidePanelContent: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const defaultProps = {
  footer: null,
  header: null,
  kind: "default",
  isCompact: false,
  isInline: false,
  offsetY: 0,
  onClose: () => {},
};

function Dialog(props) {
  const refSidePanel = React.useRef(null);

  const {
    children,
    footer,
    onAnimationEnd,
    header,
    kind,
    isCompact,
    isInline,
    offsetY,
    onClose,
    refHeader,
    refSidePanelContent,
    width,
    isOpen,
    ...moreProps
  } = props;

  return (
    <div
      aria-modal={isInline ? null : "true"}
      css={dialogStyles}
      kind={kind}
      isInline={isInline}
      isOpen={isOpen}
      offsetY={props.offsetY}
      onAnimationEnd={onAnimationEnd}
      ref={refSidePanel}
      role="dialog"
      tabIndex="-1"
      width={width}
      {...moreProps}
    >
      {header ? React.cloneElement(header, { ref: refHeader, isCompact, onClose }) : null}
      <div
        data-pka-anchor="sidepanel.content"
        css={dialogContentStyles}
        isCompact={isCompact}
        isOpen={isOpen}
        isSticky={footer ? footer.props.isSticky : undefined}
        footerHeight={footer ? footer.props.height : undefined}
        kind={kind}
        tabIndex="-1"
        ref={refSidePanelContent}
      >
        {children}
      </div>
      {footer ? React.cloneElement(footer, { refSidePanel, isCompact, width }) : null}
    </div>
  );
}

export default Dialog;

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
