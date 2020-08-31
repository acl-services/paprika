import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

// Sizes

const sizeStyles = {
  [ShirtSizes.SMALL]: css`
    height: 117px;
    width: 240px;
  `,
  [ShirtSizes.MEDIUM]: css`
    height: 284px;
    width: 240px;
  `,
  [ShirtSizes.LARGE]: css`
    height: 500px;
    width: 300px;
  `,
  auto: css`
    height: auto;
    width: auto;
  `,
};

// Modifiers

const fullWidthStyles = `
  display: flex;
  width: 100%;
`;

// States

const activeStyles = `
  box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
  border-color: ${tokens.highlight.active.noBorder.borderColor};
`;

export const cardStyles = styled.div(
  ({ size, isActive, isFullWidth }) => css`
    background: ${tokens.color.white};
    border: ${tokens.border.color};
    border-radius: ${tokens.card.borderRadius};
    box-shadow: ${tokens.shadow};
    box-sizing: border-box;
    display: inline-block;
    text-decoration: none;
    ${sizeStyles[size]};
    ${isActive && activeStyles};
    ${isFullWidth && fullWidthStyles};
  `
);
