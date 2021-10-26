import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

const counterSizeStyles = {
  small: `
    font-size: 12px;
    line-height: 15px;
    padding: 2px;
    min-width: ${tokens.counter.small};
  `,

  medium: `
    font-size: 14px; // This is an exception that is missing from the font-scale
    line-height: ${tokens.counter.small};
    min-width: ${tokens.counter.medium};
    padding: 1 2px;
  `,
};

const counterColorStyles = {
  grey: `
    background: ${tokens.color.blackLighten80};
    border-radius: ${tokens.border.radius};
    border: 1px solid ${tokens.border.color};
    color: ${tokens.textColor.subtle};
  `,

  red: `
    border-radius: 50px;
    color: ${tokens.color.white};
    padding: 0 ${tokens.spaceSm};
    background: ${tokens.color.orangeDarken10};
    border: 1px solid ${tokens.color.orangeDarken10};
  `,

  blue: `
    border-radius: 50px;
    color: ${tokens.color.white};
    padding: 0 ${tokens.spaceSm};
    background: ${tokens.color.blue};
    border: 1px solid ${tokens.color.blue};
  `,
};

const indicatorStyles = css`
  ::after {
    background-color: ${tokens.color.orange};
    border: 1px solid ${tokens.color.white};
    border-radius: 100%;
    content: "";
    height: ${tokens.space};
    position: absolute;
    right: -5px;
    top: -5px;
    width: ${tokens.space};
  }
`;

export const Counter = styled.span(
  ({ hasIndicator, color, size }) => css`
    display: inline-flex;
    font-weight: bold;
    justify-content: center;
    height: 20px;
    position: relative;
    top: -0.1em;

    &,
    * {
      box-sizing: border-box;
    }

    ${hasIndicator && indicatorStyles};
    ${counterColorStyles[color]};
    ${counterSizeStyles[size]};
  `
);
