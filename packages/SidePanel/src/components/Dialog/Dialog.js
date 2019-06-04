import React from "react";
import PropTypes from "prop-types";
import { dialogStyles } from "./Dialog.styles";

const propTypes = {
  handleAnimationEnd: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  isInline: PropTypes.bool.isRequired,
  header: PropTypes.node,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  header: null,
};

const Dialog = React.forwardRef((props, ref) => {
  const { header, children, handleAnimationEnd, width, isInline, ...moreProps } = props;
  return (
    <div
      role="dialog"
      aria-modal="true"
      ref={ref}
      onAnimationEnd={handleAnimationEnd}
      width={width}
      isInline={isInline}
      {...moreProps}
      css={dialogStyles}
    >
      {header}
      {children}
    </div>
  );
});

export default Dialog;

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
