import { css } from "styled-components";

export const groupCSS = css`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  position: fixed;
  right: 0;
  visibility: hidden;
  width: 100%;
  z-index: ${props => props.zIndex};

  ${props => {
    return `
      top: ${props.offsetY}px;
    `;
  }}

  > div[role="dialog"] {
    visibility: visible;
  }
`;
