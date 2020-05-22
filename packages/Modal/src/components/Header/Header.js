import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import * as sc from "./Header.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  hasCloseButton: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  onClose: PropTypes.func,
};

const defaultProps = {
  hasCloseButton: true,
  level: 3,
  onClose: () => {},
};

const Header = React.forwardRef((props, ref) => {
  const { children, level, hasCloseButton, onClose, ...moreProps } = props;

  return (
    <sc.Wrapper ref={ref} {...moreProps}>
      <Heading tabIndex="-1" level={level} displayLevel={3} isLight>
        {children}
      </Heading>
      {hasCloseButton && (
        <Button.Close data-pka-anchor="modal.header.close-button" isSemantic={false} onClick={onClose} size="medium" />
      )}
    </sc.Wrapper>
  );
});

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.displayName = "Modal.Header";

export default Header;
