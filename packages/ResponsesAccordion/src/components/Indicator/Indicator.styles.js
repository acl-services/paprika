import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const indicatorSize = stylers.spacer(3);
const activeDotSize = "8px";

const activeStyles = css`
  border-color: ${tokens.color.blue};

  &:before {
    background: ${tokens.color.blue};
    border-radius: 100%;
    content: "";
    height: ${activeDotSize};
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${activeDotSize};
  }
`;

const doneStyles = css`
  background-color: ${tokens.color.black};
  border-color: ${tokens.color.black};
  color: ${tokens.color.white};
`;

export const indicatorStyles = css`
  &,
  * {
    box-sizing: border-box;
  }

  display: block;
  line-height: 1;
  position: relative;
`;

export const indicatorDotStyles = css`
  ${stylers.z(2)};

  align-items: center;
  background: ${tokens.color.white};
  border: 2px solid ${tokens.color.blackLighten40};
  border-radius: 100%;
  display: flex;
  height: ${indicatorSize};
  justify-content: center;
  position: relative;
  width: ${indicatorSize};

  ${({ isActive, isComplete }) => isComplete && !isActive && doneStyles}
  ${({ isActive }) => isActive && activeStyles}
`;
