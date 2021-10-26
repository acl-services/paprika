import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const heading = {
  HEADING_LEVEL_1: css`
    font-size: 40px;
    line-height: 48px;
  `,

  HEADING_LEVEL_2: css`
    font-size: 28px;
    line-height: 32px;
  `,

  HEADING_LEVEL_3: css`
    font-size: 22px;
    line-height: 26px;
  `,

  HEADING_LEVEL_4: css`
    font-size: 18px;
    line-height: 24px;
  `,
};

const underline = level => {
  let result = `border-bottom: 1px solid ${tokens.border.color};`;
  if (level === 1) {
    result += `padding-bottom: ${tokens.space};`;
  } else if (level > 1 && level < 5) {
    result += `padding-bottom: ${tokens.spaceSm};`;
  } else {
    result += `padding-bottom: 2px;`;
  }
  return result;
};

export const Heading = {
  Heading: ({ safeDisplayLevel, safeLevel, isHidden, hasUnderline, hasDivider, isLight }) => css`
    align-items: center;
    color: inherit;
    font-weight: ${isLight ? "400" : "700"};
    letter-spacing: 0;
    margin: ${stylers.spacer(2)} 0;
    
    ${heading[`HEADING_LEVEL_${safeDisplayLevel || safeLevel}`]}

    ${isHidden ? stylers.visuallyHidden : ""}
    ${hasUnderline ? underline(safeDisplayLevel || safeLevel) : ""}
    ${hasDivider ? "display: flex;" : ""}

    &:focus {
      outline: none;
    }
  `,
};
