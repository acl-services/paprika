import React from "react";
// @ts-expect-error: need to fix stylers library
import { fontSize, spacer } from "@paprika/stylers/lib/helpers";
import styled from "styled-components";
// @ts-expect-error: need to fix tokens library
import tokens from "@paprika/tokens";
import { getAvatarColors } from "./helpers";

type StylesForSizes = {
  [key: string]: string;
};

const roundStyles: StylesForSizes = {
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

const roundStringStyles: StylesForSizes = {
  small: fontSize(-4),
  medium: "font-size: 12px;",
  large: fontSize(-1),
};

const roundIconStyles: StylesForSizes = {
  small: fontSize(-2),
  medium: fontSize(-1),
  large: fontSize(2),
};

const squareStyles: StylesForSizes = {
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

const squareStringStyles: StylesForSizes = {
  medium: fontSize(0),
  large: fontSize(2),
};

const squareIconStyles: StylesForSizes = {
  medium: fontSize(2),
  large: fontSize(4),
};

function getSizeCss(size: string, isRound: boolean, isChildString: boolean) {
  let sizeValue;

  if (isRound) {
    sizeValue = roundStyles[size].concat(isChildString ? roundStringStyles[size] : roundIconStyles[size]);
  } else {
    sizeValue = squareStyles[size].concat(isChildString ? squareStringStyles[size] : squareIconStyles[size]);
  }

  return sizeValue;
}

interface AvatarProps {
  $backgroundColor?: string | null;
  $color: string;
  isChildString: boolean;
  isRound: boolean;
  size: string;
  children: React.ReactNode;
  [x: string]: any;
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

  ${({ $backgroundColor, $color, isChildString, isRound, size, children }: AvatarProps) => {
    const color = isChildString
      ? getAvatarColors(children)
      : { backgroundColor: tokens.color.blackLighten60, fontColor: tokens.color.blackLighten20 };
    const backgroundColor = $backgroundColor || color.backgroundColor;
    const fontColor = $color || color.fontColor;
    const sizeValue = getSizeCss(size, isRound, isChildString);

    return `
      background-color: ${backgroundColor};
      color: ${fontColor};
      ${sizeValue};
    `;
  }}
`;
