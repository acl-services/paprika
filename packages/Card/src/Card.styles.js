import styled from "styled-components";
import tokens from "@paprika/tokens";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

// Sizes

const sizeStyles = {
  [ShirtSizes.SMALL]: `
    width: 300px;
    height: 130px;
  `,
  [ShirtSizes.MEDIUM]: `
  width: 300px;
  height: 320px;
  `,
  [ShirtSizes.LARGE]: `
  width: 300px;
  height: 500px;
  `,
};

// Modifiers

const fullWidthStyles = `
  display: flex;
  width: 100%;
`;

const autoHeightStyles = `
  display: flex;
  height: auto;
`;

// States

const activeStyles = `
  box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
  border-color: ${tokens.highlight.active.noBorder.borderColor};
`;

export const CardWrapper = styled.div`
  background: ${tokens.color.white};
  border: ${tokens.border.color};
  border-radius: ${tokens.card.borderRadius};
  box-shadow: ${tokens.shadow};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  ${props => `
    ${sizeStyles[props.size]}
    ${props.isActive && activeStyles}
    ${props.isFullWidth && fullWidthStyles}
    ${props.isAutoHeight && autoHeightStyles}
    `}
`;
