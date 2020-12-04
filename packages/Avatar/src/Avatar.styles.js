import { spacer } from "@paprika/stylers/lib/helpers";
import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import { getAvatarColors } from "./helpers";

const roundStyles = {
  small: `
    border-radius: 50%;
    height: ${spacer(2.5)};
    width: ${spacer(2.5)};
    ${stylers.fontSize(-3)};
  `,
  medium: `
    border-radius: 50%;
    height: ${spacer(3)};
    width: ${spacer(3)};
    ${stylers.fontSize(-2)};
  `,
  large: `
    border-radius: 50%;
    height: ${spacer(4)};
    width: ${spacer(4)};
    ${stylers.fontSize(-1)};
  `,
};

const squareStyles = {
  small: `
    border-radius: ${tokens.card.borderRadius};
    height: ${spacer(4)};
    width: ${spacer(4)};
    ${stylers.fontSize(2)};
  `,

  medium: `
    border-radius: ${tokens.card.borderRadius};
    height: ${spacer(5)};
    width: ${spacer(5)};
    ${stylers.fontSize(3)};
  `,
};

export const Avatar = styled.div`
  align-items: center;
  display: inline-flex;
  font-weight: bold;
  justify-content: center;

  &,
  * {
    box-sizing: border-box;
  }

  ${({ $backgroundColor, $color, isRound, size, children }) => {
    const sizeValue = isRound ? roundStyles[size] : squareStyles[size];

    const color =
      typeof children !== "string"
        ? { backgroundColor: tokens.color.blackLighten60, fontColor: tokens.color.blackLighten20 }
        : getAvatarColors(children);
    const backgroundColor = $backgroundColor ?? color.backgroundColor;
    const fontColor = $color ?? color.fontColor;
    return `
      background-color: ${backgroundColor};
      color: ${fontColor};
      ${sizeValue};
    `;
  }}
`;
