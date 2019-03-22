import tokens from "@paprika/tokens";

//
// Typography
//

const fontScaleRatio = 1.125; // 8:9 - Major second

// prettier-ignore
export const fontSize = (scale = 0) => `
  font-size: ${Math.round(
    Number.parseInt(tokens.fontSize.default, 10) * (fontScaleRatio ** scale)
  )}px;
`;

const leadingBase = 1.4;
const leadingScaleRatio = 1.125;

// prettier-ignore
export const lineHeight = (scale = 0) => `
  line-height: ${Math.round(leadingBase * (leadingScaleRatio ** scale) * 100) /
    100};
`;

//
// Layout
//

export const spacer = numSpaces => `${Number.parseInt(tokens.space, 10) * numSpaces}px`;

export const z = level => {
  const validLevels = ["auto", "initial", "inherit", "-1", "0", "1", "2", "3", "4", "5", "6", "7"];

  return validLevels.includes(level) ? `z-index: ${level};` : `z-index: 1;`;
};
