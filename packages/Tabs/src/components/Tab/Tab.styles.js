import styled, { css } from "styled-components";
import RawButton from "@paprika/raw-button";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const focusStyle = tokens.highlight.active.withBorder.boxShadow;

const kindStyles = () => ({
  primary: css`
    border-bottom: ${tokens.spaceSm} solid ${tokens.color.blue};
  `,

  secondary: css`
    border-bottom: ${tokens.spaceSm} solid ${tokens.color.purple};
  `,
});

const activeStyles = ({ kind }) => css`
  color: ${tokens.textColor.link};
  
  &::after {
    ${kindStyles()[kind]}
    bottom: -${tokens.spaceSm};
    content: "";
    height: ${tokens.spaceSm};
    left: 0;
    position: absolute;
    width: 100%;
  }
`;

const disabledStyles = css`
  &&& {
    border-bottom-color: transparent;
  }
  color: ${tokens.color.blackDisabled};
  cursor: not-allowed;
`;

export const Tab = styled(RawButton)(
  ({ isDisabled, isSelected }) => css`
    ${stylers.fontSize()};
    align-items: center;
    background-color: ${tokens.color.white};
    border: 0;
    border-bottom: ${tokens.spaceSm} solid transparent;
    color: ${tokens.color.black};
    display: inline-flex;
    height: ${({ height }) => (height ? `${height}px` : "auto")};
    margin: 0 ${tokens.space} 0 0;
    padding: ${stylers.spacer(2)} ${tokens.space} ${tokens.space} ${tokens.space};
    position: relative;
    transition: border-color 0.3s ease;
    ${isDisabled ? disabledStyles : null}
    ${isSelected ? activeStyles : null}

  &:last-child {
      margin-right: 0;
    }

    &:focus {
      border-color: ${tokens.border.color};
      border-radius: ${tokens.border.radius} ${tokens.border.radius} 0 0;
      ${stylers.z(1)}
    }

    &:hover {
      border-color: ${tokens.border.color};
    }
  `
);

export const Link = styled.a`
  ${Tab}
  color: ${tokens.color.black};
  text-decoration: none;

  &:focus {
    box-shadow: ${focusStyle};
    outline: none;
  }
`;
