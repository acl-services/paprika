import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const ProgressBar = styled.div`
  text-align: center;
  width: 100%;
`;

const completeStyles = css`
  animation: none;
  background-color: ${tokens.color.green};
  transition: none;
`;

export const BarFiller = styled.div(
  ({ completed }) => css`
    background-color: ${tokens.color.purple};
    transform: scaleX(${completed / 100});
    transform-origin: center left;
    transition: transform 0.2s ease-in-out;
    width: 100%;

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
