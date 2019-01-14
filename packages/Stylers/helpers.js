import tokens from "@acl-ui/tokens";

//
// Typography
//

const fontScaleRatio = 1.125; // 8:9 - Major second

export const fontSize = (scale = 0) => `
  font-size: ${Math.round(parseInt(tokens.fontSize.default, 10) * Math.pow(fontScaleRatio, scale))}px;
`;

const leadingBase = 1.4;
const leadingScaleRatio = 1.125;

export const lineHeight = (scale = 0) => `
  line-height: ${Math.round(leadingBase * Math.pow(leadingScaleRatio, scale) * 10) / 10};
`;

//
// Spacing
//

export const spacer = numSpaces => `${Number.parseInt(tokens.space, 10) * numSpaces}px`;
