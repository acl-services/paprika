import styled from "styled-components";
import tokens from "@paprika/tokens";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

// Common

const commonStyles = styled.div`
  background: ${tokens.color.white};
  border: ${tokens.border.color};
  border-radius: ${tokens.card.borderRadius};
  box-shadow: ${tokens.shadow};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

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

export const cardStyles = styled(commonStyles)`
  ${props => sizeStyles[props.size]}
  ${props => (props.isActive ? activeStyles : "")}
  ${props => (props.isFullWidth ? fullWidthStyles : "")}
  ${props => (props.isAutoHeight ? autoHeightStyles : "")}
`;
