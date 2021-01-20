import styled, { css } from "styled-components";
import RawButton from "@paprika/raw-button";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import types from "../../types";

const { PRIMARY, SECONDARY } = types.kind;
const { MEDIUM, LARGE } = types.size;

const kindColor = {
  [PRIMARY]: tokens.color.blue,
  [SECONDARY]: tokens.color.purple,
};

const fontSize = {
  [MEDIUM]: stylers.fontSize(-1),
  [LARGE]: stylers.fontSize(),
};

const activeStyles = ({ isVertical, kind }) => css`
  color: ${tokens.textColor.link};
  &,
  &:focus,
  &:hover {
    border-color: ${kindColor[kind]};
  }

  ${isVertical &&
    css`
      background-color: ${tokens.color.blackLighten70};
    `}
`;

const disabledStyles = css`
  &&& {
    border-bottom-color: transparent;
  }
  color: ${tokens.color.blackDisabled};
  cursor: not-allowed;
`;

function getHeightValue(height) {
  if (!height) return "auto";
  // eslint-disable-next-line no-restricted-globals
  return isNaN(height) ? height : `${height}px`;
}

const horizontalStyles = ({ tabHeight }) => css`
  align-items: center;
  border-bottom: ${tokens.spaceSm} solid transparent;
  border-radius: ${tokens.border.radius} ${tokens.border.radius} 0 0;
  display: inline-flex;
  height: ${getHeightValue(tabHeight)};
  margin-right: ${tokens.space};
  padding: ${stylers.spacer(2)} ${tokens.space} ${tokens.space} ${tokens.space};

  &:last-child {
    margin-right: 0;
  }
`;

const verticalStyles = ({ hasTruncation }) => css`
  border-left: ${tokens.spaceSm} solid transparent;
  padding: ${tokens.spaceLg};

  ${hasTruncation
    ? css`
        display: block;
        ${stylers.truncateText};
      `
    : css`
        display: flex;
      `}

  &:hover {
    background-color: ${tokens.color.blackLighten70};
  }
`;

const baseStyles = ({ isDisabled, isSelected, isVertical, size }) => css`
  background-color: ${tokens.color.white};
  border: 0;
  box-sizing: border-box;
  color: ${tokens.color.black};
  margin: 0;
  position: relative;
  transition: border-color 0.3s ease, background-color 0.3s ease;
  ${fontSize[size]}
  ${stylers.lineHeight(-2)}
  ${isVertical ? verticalStyles : horizontalStyles}

  &:hover, &:focus {
    border-color: ${tokens.border.color};
  }

  &:focus {
    ${stylers.z(1)}
  }

  ${isDisabled ? disabledStyles : null}
  ${isSelected ? activeStyles : null}
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
