import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const indicatorSize = stylers.spacer(3);
const topPadding = tokens.space;
const activeDotSize = tokens.space;

const lineStyles = css`
  ${stylers.z(1)}

  border-left: 2px solid ${tokens.border.color};
  content: "";
  height: calc(100% - ${indicatorSize} + ${topPadding});
  left: 50%;
  position: absolute;
  top: ${indicatorSize};
  transform: translateX(-50%);
`;

const activeLineStyles = css`
  ${lineStyles}
  ${stylers.z(2)}

  border-color: ${tokens.color.blue};
  height: calc((100% - ${indicatorSize} + ${topPadding}) / 2);
`;

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

export const Indicator = styled.div(
  ({ isLast, isComplete, isActive }) => css`
    &,
    * {
      box-sizing: border-box;
    }

    display: inline-block;
    line-height: 1;
    position: relative;

    &:before {
      ${!isLast && lineStyles}
      ${isComplete && `border-color: ${tokens.color.black}`}
    }

    &:after {
      ${isActive && !isLast && activeLineStyles}
    }
  `
);

export const IndicatorDot = styled.span(
  ({ isActive, isComplete }) => css`
    ${stylers.fontSize()}
    ${stylers.z(2)}

  align-items: center;
    background-color: ${tokens.color.white};
    border: 2px solid ${tokens.color.blackLighten40};
    border-radius: 100%;
    display: flex;
    height: ${indicatorSize};
    justify-content: center;
    position: relative;
    width: ${indicatorSize};

    ${isComplete && !isActive && doneStyles}
    ${isActive && activeStyles}
  `
);
