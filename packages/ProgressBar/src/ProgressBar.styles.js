import styled, { keyframes, css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const gradientSize = "640px";
export const ProgressBar = styled.div`
  text-align: center;
  width: 100%;
`;

const progress = keyframes`
  0% { background-position: 0 bottom; }
  100% { background-position: ${gradientSize} bottom; }
`;

const completeStyles = css`
  animation: none;
  background-image: linear-gradient(
    90deg,
    ${tokens.color.green} 30%,
    ${tokens.color.greenLighten20} 80%,
    ${tokens.color.green} 100%
  );
  transition: none;
`;

export const BarFiller = styled.div(
  ({ completed }) => css`
    animation: ${progress} linear 2s infinite;
    background-image: linear-gradient(
      90deg,
      ${tokens.color.purple} 30%,
      ${tokens.color.purpleLighten20} 80%,
      ${tokens.color.purple} 100%
    );
    background-size: ${gradientSize} auto;
    transition: width 0.2s ease-in-out;
    width: ${completed}%;
    ${completed === 100 ? completeStyles : ""}
  `
);

const compactStyles = css`
  border: none;
  border-radius: 0;
  height: ${tokens.space};
`;

export const Bar = styled.div(
  ({ isCompact }) => css`
    background-color: ${tokens.color.blackLighten80};
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    display: flex;
    height: ${stylers.spacer(2)};
    overflow: hidden;
    ${isCompact ? compactStyles : ""}
  `
);

export const Body = styled.p`
  ${stylers.fontSize()};
`;

export const A11yText = styled.div`
  ${stylers.visuallyHidden}
`;
