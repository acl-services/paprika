import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Dialog.styles";

const propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  getPushContentElement: PropTypes.func,
  groupOffsetY: PropTypes.number,
  header: PropTypes.node,
  kind: PropTypes.oneOf(["default", "child"]),
  isCompact: PropTypes.bool,
  isInline: PropTypes.bool,
  offsetY: PropTypes.number,
  onAnimationEnd: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  refHeader: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  refSidePanelContent: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  isSlideFromLeft: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const defaultProps = {
  a11yText: null,
  footer: null,
  getPushContentElement: () => {},
  groupOffsetY: 0,
  header: null,
  kind: "default",
  isCompact: false,
  isInline: false,
  offsetY: 0,
  onClose: () => {},
  isSlideFromLeft: false,
};

function Dialog(props) {
  const refSidePanel = React.useRef(null);

  const {
    a11yText,
    children,
    footer,
    getPushContentElement,
    groupOffsetY,
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
    isSlideFromLeft,
    ...moreProps
  } = props;

  const isFooterSticky = footer && footer.props.isSticky;

  const dialogMain = (
    <React.Fragment>
      {header ? React.cloneElement(header, { ref: refHeader, isCompact, onClose, getPushContentElement }) : null}
      <sc.DialogContent
        data-pka-anchor="sidepanel.content"
        hasPushedElement={!!getPushContentElement}
        isCompact={isCompact}
        isOpen={isOpen}
        kind={kind}
        ref={refSidePanelContent}
        role="region"
        tabIndex="0"
      >
        {children}
      </sc.DialogContent>
    </React.Fragment>
  );

  const dialogFooter = footer ? React.cloneElement(footer, { refSidePanel, isCompact }) : null;

  return (
    <sc.Dialog
      aria-modal={isInline ? null : "true"}
      aria-label={a11yText}
      hasPushedElement={!!getPushContentElement}
      groupOffsetY={groupOffsetY}
      kind={kind}
      isCompact={isCompact}
      isInline={isInline}
      isOpen={isOpen}
      offsetY={offsetY}
      onAnimationEnd={onAnimationEnd}
      ref={refSidePanel}
      role="dialog"
      tabIndex="-1"
      isSlideFromLeft={isSlideFromLeft}
      width={width}
      {...moreProps}
    >
      {isFooterSticky ? (
        <sc.MainWrapper>
          <sc.DialogMain>{dialogMain}</sc.DialogMain>
          {dialogFooter}
        </sc.MainWrapper>
      ) : (
        <React.Fragment>
          {dialogMain}
          {dialogFooter}
        </React.Fragment>
      )}
    </sc.Dialog>
  );
}

export default Dialog;

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
