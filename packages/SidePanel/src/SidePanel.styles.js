import { css, keyframes } from "styled-components";

const slideIn = () => keyframes`
    from {
      opacity: 0;
      transform: translateX(-500);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
`;

export const container = css`
  box-sizing: border-box;
  border: 1px solid red;
  position: absolute;
  height: 100%;

  ${props => {
    return `
      animation: ${slideIn} ease 0.5;
      right: ${props.offsetRigth}px;
      width: ${props.width};
      height: calc(100vh-${props.offsetY});
    `;
  }}
`;
