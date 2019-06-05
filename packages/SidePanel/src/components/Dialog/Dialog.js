import React from "react";
import PropTypes from "prop-types";
import { dialogStyles } from "./Dialog.styles";

const propTypes = {
  handleAnimationEnd: PropTypes.func.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  header: PropTypes.node,
  children: PropTypes.node.isRequired,
  offsetY: PropTypes.number,
  refHeader: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

const defaultProps = {
  header: null,
  offsetY: 0,
};

const Dialog = React.forwardRef((props, ref) => {
  const { header, refHeader, children, handleAnimationEnd, width, ...moreProps } = props;

  return (
    <div
      aria-modal="true"
      css={dialogStyles}
      offsetY={props.offsetY}
      onAnimationEnd={handleAnimationEnd}
      ref={ref}
      role="dialog"
      width={width}
      {...moreProps}
    >
      {header ? React.cloneElement(header, { ...header.props, ref: refHeader }) : null}
      {children}
    </div>
  );
});

export default Dialog;

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
