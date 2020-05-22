import styled from "styled-components";
import tokens from "@paprika/tokens";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

// Common

const commonStyles = styled.div`
  background: ${tokens.color.white};
  border: 1px solid #f0f0f0;
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

const disabledStyles = `
  box-shadow: none;
  color: ${tokens.color.blackDisabled};
  cursor: not-allowed;
  text-decoration: none;
  text-shadow: none;

  &:focus {
    box-shadow: none;
    text-shadow: none;
    transform: none;
  }

  &, &:hover, &:focus {
    background: ${tokens.color.blackLighten70};
    border-color: ${tokens.color.blackLighten60};
    color: ${tokens.color.blackLighten40};
    text-decoration: none;
  }
`;

const activeStyles = `
  box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
  border-color: ${tokens.highlight.active.noBorder.borderColor};
`;

export const cardStyles = styled(commonStyles)`
  ${props => sizeStyles[props.size]}
  ${props => (props.isActive ? activeStyles : "")}
  ${props => (props.isFullWidth ? fullWidthStyles : "")}
  ${props => (props.isAutoHeight ? autoHeightStyles : "")}
  ${props => (props.isDisabled ? disabledStyles : "")}
`;
