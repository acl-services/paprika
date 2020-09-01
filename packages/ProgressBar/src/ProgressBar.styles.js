import styled, { keyframes, css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const ProgressBar = styled.div`
  height: 100%;
  text-align: center;
  width: 100%;
`;

const progress = keyframes`
  0% { background-position: left bottom; }
  100% { background-position: right bottom; }
`;

const animation = css`
  animation: ${progress} 0.5s infinite linear;
  background-image: linear-gradient(${tokens.color.purple}, ${tokens.color.purpleLighten20}, ${tokens.color.purple});
  background-size: 50% 100%;
`;

export const Bar = styled.div`
  background-color: ${tokens.color.blackLighten80};
  border: 1px solid ${tokens.color.blackLighten30};
  border-radius: ${tokens.border.radius};
  height: ${stylers.spacer(2)};
  width: 100%;
`;

export const BarFiller = styled.div(
  ({ completed }) => css`
    ${animation}
    height: ${stylers.spacer(2)};
    width: ${completed}%;
  `
);

export const Body = styled.p`
  ${stylers.fontSize()};
`;

export const BarAria = styled.div`
  ${stylers.visuallyHidden}
`;
