import { fontSize } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens/lib/tokens";
import { css } from "styled-components";

const kind = {
  default: `background: ${tokens.color.white}; color: ${tokens.color.black};`,
  primary: `background: ${tokens.color.purple}; color: ${tokens.color.white};`,
};

const space = Number.parseInt(tokens.space, 10);
export const headerCSS = css`
  border-bottom: 1px solid ${tokens.border.color};
  box-sizing: border-box;
  color: ;
  display: flex;
  justify-content: space-between;
  padding: 12px ${space}px; // creates a 48px height
  width: 100%;
  align-items: center;

  .heading--level-1,
  .heading--level-2,
  .heading--level-3,
  .heading--level-4,
  .heading--level-5 {
    ${fontSize()};
    font-weight: 400;
    margin: 0;
  }

  ${props => {
    return `
      ${kind[props.kind]};
    `;
  }}
`;
