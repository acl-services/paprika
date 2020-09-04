import React from "react";
import PropTypes from "prop-types";
import * as types from "../../types";
import * as sc from "./Dialog.styles";

function Dialog(props) {
  const [isAnimating, setIsAnimating] = React.useState(false);
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
  const isHeaderSticky = header && header.props.isSticky;

  const dialogMain = (
    <React.Fragment>
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

  React.useEffect(() => {
    setIsAnimating(true);
  }, [isOpen]);

  const dialogFooter = footer ? React.cloneElement(footer, { refSidePanel, isCompact }) : null;
  const dialogHeader = header
    ? React.cloneElement(header, { ref: refHeader, isCompact, onClose, getPushContentElement })
    : null;

  const handleAnimationEnd = () => {
    setIsAnimating(false);
    onAnimationEnd();
  };

  const renderDialogContent = () =>
    isFooterSticky || isHeaderSticky ? (
      <sc.Main>
        {isHeaderSticky && dialogHeader}
        <sc.DialogMain>
          {!isHeaderSticky && dialogHeader}
          {dialogMain}
          {!isFooterSticky && dialogFooter}
        </sc.DialogMain>
        {isFooterSticky && dialogFooter}
      </sc.Main>
    ) : (
      <>
        {dialogHeader}
        {dialogMain}
        {dialogFooter}
      </>
    );

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
      isAnimating={isAnimating}
      onAnimationEnd={handleAnimationEnd}
      ref={refSidePanel}
      role="dialog"
      tabIndex="-1"
      isSlideFromLeft={isSlideFromLeft}
      width={width}
      {...moreProps}
    >
      {renderDialogContent()}
    </sc.Dialog>
  );
}

Dialog.types = {
  kind: { DEFAULT: types.sidePanelKinds.DEFAULT, PRIMARY: types.sidePanelKinds.PRIMARY },
};

const propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  getPushContentElement: PropTypes.func,
  groupOffsetY: PropTypes.number,
  header: PropTypes.node,
  kind: PropTypes.oneOf([Dialog.types.kind.DEFAULT, Dialog.types.kind.CHILD]),
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
  kind: Dialog.types.kind.DEFAULT,
  isCompact: false,
  isInline: false,
  offsetY: 0,
  onClose: () => {},
  isSlideFromLeft: false,
};

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;
