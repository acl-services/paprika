import { css } from "styled-components";

export const GroupCSS = css`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  position: fixed;
  right: 0;
  ${props => {
    console.log(props.offsetY);
    return `
      top: ${props.offsetY}px;
    `;
  }}
`;
