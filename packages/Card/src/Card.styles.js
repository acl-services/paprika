import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import * as types from "./types";

// Sizes

const sizeStyles = {
  [types.SMALL]: css`
    height: 117px;
    width: 240px;
  `,
  [types.MEDIUM]: css`
    height: 284px;
    width: 240px;
  `,
  [types.LARGE]: css`
    height: 500px;
    width: 300px;
  `,
  [types.AUTO]: css`
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
