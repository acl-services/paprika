import React from "react";
import PropTypes from "prop-types";
import { RefOf } from "@paprika/helpers/lib/customPropTypes";
import Button from "@paprika/button";
import * as sc from "./Header.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  hasCloseButton: PropTypes.bool,
  kind: PropTypes.oneOf(["default", "primary"]),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  onClose: PropTypes.func,
  refHeading: RefOf(),
};

const defaultProps = {
  hasCloseButton: true,
  level: 3,
  kind: "default",
  onClose: () => {},
  refHeading: null,
};

const Header = React.forwardRef((props, ref) => {
  const { children, level, hasCloseButton, kind, onClose, refHeading, ...moreProps } = props;

  return (
    <sc.Header ref={ref} kind={kind} {...moreProps}>
      <sc.Heading level={level} displayLevel={3} isLight ref={refHeading}>
        {children}
      </sc.Heading>
      {hasCloseButton && (
        <sc.CloseButtonWrapper>
          <Button.Close
            data-pka-anchor="takeover.header.close-button"
            onClick={onClose}
            isDark={kind === "primary" || null}
            size="medium"
          />
        </sc.CloseButtonWrapper>
      )}
    </sc.Header>
  );
});

Header.displayName = "Takeover.Header";
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
