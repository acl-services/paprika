import tokens from "@paprika/tokens";

//
// Typography
//

const fontScaleRatio = 1.125; // 8:9 - Major second

const fontSizeValue = (scale = 0) => Math.round(Number.parseInt(tokens.fontSize.default, 10) * fontScaleRatio ** scale);

export const fontSize = (scale = 0) => `
  font-size: ${fontSizeValue(scale)}px;
`;

const leadingBase = 1.4;
const leadingScaleRatio = 1.125;

export const lineHeightValue = (scale = 0) => Math.round(leadingBase * leadingScaleRatio ** scale * 100) / 100;

export const lineHeight = (scale = 0) => `
  line-height: ${lineHeightValue(scale)};
`;

//
// Layout
//

export const spacer = numSpaces => `${Number.parseInt(tokens.space, 10) * numSpaces}px`;

function zIsValid(level) {
  return /^-1$|^[0-7]$|^inherit$|^initial$|^auto$/.test(level);
}

export const z = level => {
  return zIsValid(level) ? `z-index: ${level};` : `z-index: 1;`;
};

export const zValue = level => {
  return zIsValid(level) ? level : 1;
};

//
// Color
//

export function rgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null;

  return [Number.parseInt(result[1], 16), Number.parseInt(result[2], 16), Number.parseInt(result[3], 16)];
}

export function alpha(colorValue, alphaValue = 1) {
  return `rgba(${rgb(colorValue)}, ${alphaValue})`;
}
