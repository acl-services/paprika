import { css } from "styled-components";

export const overlayCSS = css`
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  position: fixed;
  display: block;
  top: 0;

  ${props => {
    return `
      opacity: ${props.opacity};
      background: ${props.background};
    `;
  }};
`;
