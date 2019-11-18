import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const defaultHeadingStyles = `
  align-items: center;
  color: inherit;
  display: flex;
  font-weight: 700;
  letter-spacing: 0;
  ${stylers.lineHeight(-1)};
  margin: ${stylers.spacer(2)} 0;

  &:focus {
    outline: none;
  }
`;

const heading = {
  HEADING_LEVEL_1: `
    ${stylers.fontSize(7)}
    ${stylers.lineHeight(-2)}
    font-weight: 400;`,

  HEADING_LEVEL_2: `
    ${stylers.fontSize(5)}
    ${stylers.lineHeight(-2)}`,

  HEADING_LEVEL_3: `
     ${stylers.fontSize(3)}`,

  HEADING_LEVEL_4: `
     ${stylers.fontSize(1)}`,

  HEADING_LEVEL_5: `
    ${stylers.fontSize()}
    margin: ${tokens.space} 0;`,

  HEADING_LEVEL_6: `
    ${stylers.fontSize(-1)}
    margin: ${tokens.space} 0;
  }`,
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

export const dividerStyles = `
  border-bottom: 2px solid ${tokens.color.blackLighten70};
  flex: 1;
  margin-left: ${tokens.space};
`;

export const headingStyles = props => `
  ${defaultHeadingStyles}
  ${heading[`HEADING_LEVEL_${props.safeDisplayLevel || props.safeLevel}`]}
  ${props.isHidden ? stylers.visuallyHidden : ""}
  ${props.hasUnderline ? underline(props.safeDisplayLevel || props.safeLevel) : ""}
  ${props.isLight ? "font-weight: 400;" : ""}
`;
