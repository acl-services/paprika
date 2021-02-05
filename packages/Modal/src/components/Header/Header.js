import React from "react";
import PropTypes from "prop-types";
import { RefOf } from "@paprika/helpers";
import * as constants from "@paprika/constants/lib/Constants";
import Button from "@paprika/button";
import * as sc from "./Header.styles";
import { ModalContext } from "../../Modal";

const propTypes = {
  children: PropTypes.node.isRequired,
  hasCloseButton: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  refHeading: RefOf(),

  /** If the header should truncate text so that only appears on one line */
  isSingleLine: PropTypes.bool,
};

const defaultProps = {
  hasCloseButton: true,
  level: 3,
  refHeading: null,
  isSingleLine: false,
};

const Header = React.forwardRef((props, ref) => {
  const { children, level, hasCloseButton, refHeading, isSingleLine, ...moreProps } = props;
  const { a11yText, updateAriaLabel, onClose } = React.useContext(ModalContext);

  React.useEffect(() => {
    updateAriaLabel(a11yText || children);
  }, [a11yText, children, updateAriaLabel]);

  return (
    <sc.Header ref={ref} {...moreProps} onClose={onClose}>
      <sc.HeaderHeading
        level={level}
        displayLevel={3}
        isLight
        ref={refHeading}
        isSingleLine={isSingleLine}
        hasCloseButton={hasCloseButton}
      >
        {children}
      </sc.HeaderHeading>
      {hasCloseButton && (
        <Button.Close
          data-qa-anchor="paprika.modal.header.close-button"
          data-pka-anchor="modal.header.close-button"
          isSemantic={false}
          onClick={onClose}
          size={constants.size.MEDIUM}
        />
      )}
    </sc.Header>
  );
});

Header.displayName = "Modal.Header";
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
