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
  line-height: ${Math.round(leadingBase * (leadingScaleRatio ** scale) * 10) /
    10};
`;

//
// Spacing
//

export const spacer = numSpaces => `${Number.parseInt(tokens.space, 10) * numSpaces}px`;
