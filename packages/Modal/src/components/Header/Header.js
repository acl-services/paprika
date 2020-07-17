import React from "react";
import PropTypes from "prop-types";
import { RefOf } from "@paprika/helpers/lib/customPropTypes";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import * as sc from "./Header.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  hasCloseButton: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  onClose: PropTypes.func,
  refHeading: RefOf(),
};

const defaultProps = {
  hasCloseButton: true,
  level: 3,
  onClose: () => {},
  refHeading: null,
};

const Header = React.forwardRef((props, ref) => {
  const { children, level, hasCloseButton, onClose, refHeading, ...moreProps } = props;

  return (
    <sc.Header ref={ref} {...moreProps}>
      <Heading level={level} displayLevel={3} isLight ref={refHeading}>
        {children}
      </Heading>
      {hasCloseButton && (
        <Button.Close data-pka-anchor="modal.header.close-button" isSemantic={false} onClick={onClose} size="medium" />
      )}
    </sc.Header>
  );
});

Header.displayName = "Modal.Header";
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
