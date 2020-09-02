import styled from "styled-components";
import tokens from "@paprika/tokens";
import * as types from "./types";

// Common

const commonStyles = styled.div`
  background: ${tokens.color.white};
  border: ${tokens.border.color};
  border-radius: ${tokens.card.borderRadius};
  box-shadow: ${tokens.shadow};
  box-sizing: border-box;
  display: inline-block;
  text-decoration: none;
`;

// Sizes

const sizeStyles = {
  [types.SMALL]: `
    width: 240px;
    height: 117px;
  `,
  [types.MEDIUM]: `
  width: 240px;
  height: 284px;
  `,
  [types.LARGE]: `
  width: 300px;
  height: 500px;
  `,
  [types.AUTO]: `
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

export const cardStyles = styled(commonStyles)`
  ${props => {
    const size = sizeStyles[props.size];
    const active = props.isActive && activeStyles;
    const fullWidth = props.isFullWidth && fullWidthStyles;

    return `
      ${size};
      ${active};
      ${fullWidth};`;
  }}
`;
