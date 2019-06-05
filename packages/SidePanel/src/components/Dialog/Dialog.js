import React from "react";
import PropTypes from "prop-types";
import { dialogStyles } from "./Dialog.styles";

const propTypes = {
  handleAnimationEnd: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  isInline: PropTypes.bool.isRequired,
  header: PropTypes.node,
  children: PropTypes.node.isRequired,
  offsetY: PropTypes.number,
};

const defaultProps = {
  header: null,
  offsetY: 0,
};

const Dialog = React.forwardRef((props, ref) => {
  const { header, children, handleAnimationEnd, width, isInline, ...moreProps } = props;

  return (
    <div
      aria-modal="true"
      css={dialogStyles}
      isInline={isInline}
      offsetY={props.offsetY}
      onAnimationEnd={handleAnimationEnd}
      ref={ref}
      role="dialog"
      width={width}
      {...moreProps}
    >
      {header}
      {children}
    </div>
  );
});

export default Dialog;

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
