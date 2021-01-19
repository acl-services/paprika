import styled, { css } from "styled-components";
import RawButton from "@paprika/raw-button";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { PRIMARY, SECONDARY } from "../../types";

const kindColor = {
  [PRIMARY]: tokens.color.blue,
  [SECONDARY]: tokens.color.purple,
};

const horizontalBar = css`
  bottom: -${tokens.spaceSm};
  height: ${tokens.spaceSm};
  left: 0;
  width: 100%;
`;

const verticalBar = css`
  height: 100%;
  left: -${tokens.spaceSm};
  top: 0;
  width: ${tokens.spaceSm};
`;

const activeStyles = ({ kind, isVertical }) => css`
  color: ${tokens.textColor.link};
  ${isVertical &&
    css`
      background-color: ${tokens.color.blackLighten70};
    `}

  &::after {
    background-color: ${kindColor[kind]};
    content: "";
    position: absolute;
    ${isVertical ? verticalBar : horizontalBar}
  }
`;

const disabledStyles = css`
  &&& {
    border-bottom-color: transparent;
  }
  color: ${tokens.color.blackDisabled};
  cursor: not-allowed;
`;

const horizontalStyles = css`
  border-bottom: ${tokens.spaceSm} solid transparent;
  display: inline-flex;
  margin-right: ${tokens.space};
  padding: ${stylers.spacer(2)} ${tokens.space} ${tokens.space} ${tokens.space};
  ${stylers.fontSize()}

  &:last-child {
    margin-right: 0;
  }

  &:focus {
    border-radius: ${tokens.border.radius} ${tokens.border.radius} 0 0;
  }
`;

const verticalStyles = ({ hasTruncation }) => css`
  border-left: ${tokens.spaceSm} solid transparent;
  padding: ${tokens.spaceLg};
  ${stylers.lineHeight(-2)}
  ${hasTruncation
    ? css`
        display: block;
        ${stylers.truncateText}
      `
    : css`
        display: flex;
      `}
`;

const baseStyles = ({ isDisabled, isSelected, isVertical }) => css`
  align-items: center;
  background-color: ${tokens.color.white};
  border: 0;
  color: ${tokens.color.black};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  margin: 0; 
  position: relative;
  transition: border-color 0.3s ease;
  ${isVertical ? verticalStyles : horizontalStyles}
  ${isDisabled ? disabledStyles : null}
  ${isSelected ? activeStyles : null}

  &:focus {
    border-color: ${tokens.border.color};
    ${stylers.z(1)}
  }

  &:hover {
    border-color: ${tokens.border.color};
  }
`;

export const Tab = styled(RawButton)(baseStyles);

export const Link = styled.a(
  ({ hasInsetFocusStyle }) => css`
  ${baseStyles}
  color: ${tokens.color.black};
  text-decoration: none;

  &:focus {
    box-shadow: ${
      hasInsetFocusStyle
        ? tokens.highlight.active.withBorder.insetBoxShadow
        : tokens.highlight.active.withBorder.boxShadow
    };
    outline: none;
  }
`
);
