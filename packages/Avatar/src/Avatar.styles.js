import { spacer } from "@paprika/stylers/lib/helpers";
import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import { getAvatarColors } from "./helpers";

const smallSize = `${spacer(4)}`;
const mediumSize = `${spacer(5)}`;

export const avatarSizeStyles = {
  small: `
    border-radius: 10px;
    height: ${smallSize};
    width: ${smallSize};
    ${stylers.fontSize(2)};
  `,

  medium: `
    border-radius: 12px;
    height: ${mediumSize};
    width: ${mediumSize};
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

  ${({ $backgroundColor, $color, size, children }) => {
    const sizeValue = avatarSizeStyles[size];
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
