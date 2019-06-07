import React from "react";
import PropTypes from "prop-types";
import { dialogStyles, dialogContentStyles } from "./Dialog.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
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
  header: null,
  offsetY: 0,
  isInline: false,
  onClose: () => {},
};

const Dialog = React.forwardRef((props, ref) => {
  const {
    children,
    handleAnimationEnd,
    header,
    isInline,
    onClose,
    refHeader,
    refSidePanelContent,
    width,
    offsetY,
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
      ref={ref}
      offsetY={props.offsetY}
      {...moreProps}
    >
      {header ? React.cloneElement(header, { ...header.props, ref: refHeader, onClose }) : null}
      <div css={dialogContentStyles} tabIndex="-1" ref={refSidePanelContent}>
        {children}
      </div>
    </div>
  );
});

export default Dialog;

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
