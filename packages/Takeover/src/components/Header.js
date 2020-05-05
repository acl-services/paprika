import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import * as sc from "./Header.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  hasCloseButton: PropTypes.bool,
  kind: PropTypes.oneOf(["default", "primary"]),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  onClose: PropTypes.func,
};

const defaultProps = {
  hasCloseButton: true,
  level: 3,
  kind: "default",
  onClose: () => {},
};

const Header = React.forwardRef((props, ref) => {
  const { children, level, hasCloseButton, kind, onClose, ...moreProps } = props;

  return (
    <sc.Wrapper ref={ref} kind={kind} {...moreProps}>
      <sc.Heading tabIndex="-1" level={level} displayLevel={3} isLight>
        {children}
      </sc.Heading>
      <sc.CloseButtonWrapper>
        {hasCloseButton && (
          <Button.Close
            data-pka-anchor="takeover.header.close-button"
            onClick={onClose}
            isDark={kind === "primary" || undefined}
            size="medium"
          />
        )}
      </sc.CloseButtonWrapper>
    </sc.Wrapper>
  );
});

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.displayName = "Takeover.Header";

export default Header;
