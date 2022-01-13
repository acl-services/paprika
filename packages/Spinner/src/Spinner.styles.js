/* eslint-disable no-undef */
import styled, { css, keyframes } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
}
`;

export const SpinnerVisual = styled.div`
  animation: ${spin} 1.2s infinite linear;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-style: solid;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

export const Caption = styled.div`
  ${stylers.lineHeight(-2)}
  ${stylers.truncateText}
  color: ${tokens.color.blackLighten20};
  fontWeight: normal;
  margin: ${tokens.space} auto 0 auto;
  overflow: hidden;
  text-align: center;
`;

export const AriaAlert = styled.div`
  ${stylers.visuallyHidden}
`;

const SpinnerVisualStyles = {
  small: css`
    borderwidth: 3px;
    height: ${stylers.spacer(3)};
    width: ${stylers.spacer(3)};
  `,
  medium: css`
    border-width: 5px;
    height: ${stylers.spacer(6)};
    width: ${stylers.spacer(6)};
  `,
  large: css`
    border-width: 8px;
    height: ${stylers.spacer(9)};
    width: ${stylers.spacer(9)};
  `,
};

const CaptionStyles = {
  small: css`
    ${stylers.fontSize(-3)};
    max-width: 210px;
  `,
  medium: css`
    ${stylers.fontSize(-1)};
    max-width: 240px;
  `,
  large: css`
    ${stylers.fontSize()};
    max-width: 270px;
  `,
};

export const Spinner = styled.div(
  ({ size, isDark }) => css`
    ${SpinnerVisual} {
      border-left-color: ${isDark ? tokens.color.white : tokens.color.purple};
      ${SpinnerVisualStyles[size]}
    }
    ${Caption} {
      ${CaptionStyles[size]}
    }
  `
);
