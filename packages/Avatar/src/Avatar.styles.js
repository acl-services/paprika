import { fontSize, spacer } from "@paprika/stylers/lib/helpers";
import styled from "styled-components";
import tokens from "@paprika/tokens";
import { getAvatarColors } from "./helpers";

const roundStyles = {
  small: `
    border-radius: 50%;
    height: ${spacer(2.5)};
    width: ${spacer(2.5)};
  `,
  medium: `
    border-radius: 50%;
    height: ${spacer(3)};
    width: ${spacer(3)};
  `,
  large: `
    border-radius: 50%;
    height: ${spacer(4)};
    width: ${spacer(4)};
  `,
};

const roundStringStyles = {
  small: fontSize(-5),
  medium: fontSize(-3),
  large: fontSize(-1),
};

const roundIconStyles = {
  small: fontSize(-2),
  medium: fontSize(-1),
  large: fontSize(2),
};

const squareStyles = {
  medium: `
    border-radius: ${tokens.button.borderRadius};
    height: ${spacer(4)};
    width: ${spacer(4)};
  `,

  large: `
    border-radius: ${tokens.card.borderRadius};
    height: ${spacer(5)};
    width: ${spacer(5)};
  `,
};

const squareStringStyles = {
  medium: fontSize(0),
  large: fontSize(2),
};

const squareIconStyles = {
  medium: fontSize(2),
  large: fontSize(4),
};

function getSizeCss(size, isRound, isChildString) {
  let sizeValue;

  if (isRound) {
    sizeValue = roundStyles[size].concat(isChildString ? roundStringStyles[size] : roundIconStyles[size]);
  } else {
    sizeValue = squareStyles[size].concat(isChildString ? squareStringStyles[size] : squareIconStyles[size]);
  }

  return sizeValue;
}

export const Avatar = styled.div`
  align-items: center;
  display: inline-flex;
  font-weight: bold;
  justify-content: center;
  overflow: hidden;

  &,
  * {
    box-sizing: border-box;
  }

  ${({ $backgroundColor, $color, isChildString, isRound, size, children }) => {
    const color = isChildString
      ? getAvatarColors(children)
      : { backgroundColor: tokens.color.blackLighten60, fontColor: tokens.color.blackLighten20 };
    const backgroundColor = $backgroundColor ?? color.backgroundColor;
    const fontColor = $color ?? color.fontColor;
    const sizeValue = getSizeCss(size, isRound, isChildString);

    return `
      background-color: ${backgroundColor};
      color: ${fontColor};
      ${sizeValue};
    `;
  }}
`;
