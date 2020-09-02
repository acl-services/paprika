import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const defaultHeadingStyles = css`
  align-items: center;
  color: inherit;
  font-weight: 700;
  letter-spacing: 0;
  ${stylers.lineHeight(-1)};
  margin: ${stylers.spacer(2)} 0;

  &:focus {
    outline: none;
  }
`;

const heading = {
  HEADING_LEVEL_1: css`
    ${stylers.fontSize(7)}
    ${stylers.lineHeight(-2)}
    font-weight: 400;
  `,

  HEADING_LEVEL_2: css`
    ${stylers.fontSize(5)}
    ${stylers.lineHeight(-2)}
  `,

  HEADING_LEVEL_3: css`
    ${stylers.fontSize(3)}
  `,

  HEADING_LEVEL_4: css`
    ${stylers.fontSize(1)}
  `,

  HEADING_LEVEL_5: css`
    ${stylers.fontSize()}
    margin: ${tokens.space} 0;`,

  HEADING_LEVEL_6: css`
    ${stylers.fontSize(-1)}
    margin: ${tokens.space} 0;
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

export const Divider = styled.span`
  border-bottom: 2px solid ${tokens.color.blackLighten70};
  flex-grow: 1;
  margin-left: ${tokens.space};
`;

export const Heading = styled.div(
  ({ safeDisplayLevel, safeLevel, isHidden, hasUnderline, hasDivider, isLight }) => css`
  ${defaultHeadingStyles}
  ${heading[`HEADING_LEVEL_${safeDisplayLevel || safeLevel}`]}
  ${isHidden ? stylers.visuallyHidden : ""}
  ${hasUnderline ? underline(safeDisplayLevel || safeLevel) : ""}
  ${hasDivider ? "display: flex;" : ""}
  ${isLight ? "font-weight: 400;" : ""}
`
);
