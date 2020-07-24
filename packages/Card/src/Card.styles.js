import styled from "styled-components";
import tokens from "@paprika/tokens";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

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
  [ShirtSizes.SMALL]: `
    width: 240px;
    height: 117px;
  `,
  [ShirtSizes.MEDIUM]: `
  width: 240px;
  height: 284px;
  `,
  [ShirtSizes.LARGE]: `
  width: 300px;
  height: 500px;
  `,
  auto: `
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
