import React from "react";
import PropTypes from "prop-types";
import { RefOf } from "@paprika/helpers";
import Button from "@paprika/button";
import * as types from "../../types";
import * as sc from "./Header.styles";

const Header = React.forwardRef((props, ref) => {
  const { children, level, hasCloseButton, kind, onClose, refHeading, tools, ...moreProps } = props;
  const isString = typeof children === "string";
  return (
    <sc.Header ref={ref} kind={kind} {...moreProps}>
      <sc.Heading level={level} displayLevel={3} isLight ref={refHeading} title={isString ? children : null}>
        {children}
      </sc.Heading>
      <sc.HeaderRightContainer>
        {tools && <sc.ToolContainer data-pka-anchor="takeover.header.tools">{tools}</sc.ToolContainer>}
        {hasCloseButton && (
          <sc.CloseButton>
            <Button.Close
              data-pka-anchor="takeover.header.close-button"
              onClick={onClose}
              isDark={kind === "primary" || null}
              size="medium"
            />
          </sc.CloseButton>
        )}
      </sc.HeaderRightContainer>
    </sc.Header>
  );
});

Header.types = {
  kind: { DEFAULT: types.DEFAULT, PRIMARY: types.PRIMARY },
};

const propTypes = {
  children: PropTypes.node.isRequired,
  hasCloseButton: PropTypes.bool,
  kind: PropTypes.oneOf([Header.types.kind.DEFAULT, Header.types.kind.PRIMARY]),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  onClose: PropTypes.func,
  refHeading: RefOf(),
  /** Add node object to the right side of heading next to the close button */
  tools: PropTypes.node,
};

const defaultProps = {
  hasCloseButton: true,
  level: 2,
  kind: Header.types.kind.DEFAULT,
  onClose: () => {},
  refHeading: null,
  tools: null,
};

Header.displayName = "Takeover.Header";
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
