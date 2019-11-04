import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fontSize, spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens/lib/tokens";
import Button from "@paprika/button";

const propTypes = {
  children: PropTypes.node.isRequired,
  hasCloseButton: PropTypes.bool,
  kind: PropTypes.oneOf(["default", "primary"]),
  onClose: PropTypes.func,
};

const defaultProps = {
  hasCloseButton: true,
  kind: "default",
  onClose: () => {},
};

const kind = {
  default: `background: ${tokens.color.white}; color: ${tokens.color.black};`,
  primary: `background: ${tokens.color.purple}; color: ${tokens.color.white};`,
};

const Wrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid ${tokens.border.color};
  box-shadow: ${tokens.shadow};
  box-sizing: border-box;
  display: flex;
  height: ${spacer(6)};
  justify-content: space-between;
  min-height: ${spacer(6)};
  padding: 0 ${spacer(2)};
  width: 100%;

  &:focus {
    outline: 0;
  }

  .heading--level-1,
  .heading--level-2,
  .heading--level-3,
  .heading--level-4,
  .heading--level-5 {
    ${fontSize()};
    font-weight: 400;
    margin: 0;
  }

  ${props => kind[props.kind]}
`;

const StyledCloseButton = styled(Button.Close)`
  .button__icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Header = React.forwardRef(({ children, hasCloseButton, kind, onClose, ...moreProps }, ref) => (
  <Wrapper ref={ref} kind={kind} {...moreProps}>
    <div tabIndex="-1">{children}</div>
    <div>
      {hasCloseButton && (
        <StyledCloseButton
          data-pka-anchor="takeover.header.close-button"
          onClick={onClose}
          isDark={kind === "primary" || undefined}
          size="small"
        />
      )}
    </div>
  </Wrapper>
));

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.displayName = "Takeover.Header";

export default Header;
