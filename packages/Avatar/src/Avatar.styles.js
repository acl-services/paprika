import { spacer } from "@paprika/stylers/lib/helpers";
import styled from "styled-components";
import stylers from "@paprika/stylers";

const smallSize = `${spacer(4)}`;
const mediumSize = `${spacer(6)}`;

export const avatarSizeStyles = {
  small: `
    border-radius: ${spacer(0.5)};
    height: ${smallSize};
    width: ${smallSize};
    ${stylers.fontSize(2)} 
  `,

  medium: `
    border-radius: ${spacer(1)}
    height: ${mediumSize};
    width: ${mediumSize};
    ${stylers.fontSize(3)} 
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

  ${({ $backgroundColor, $color, size }) => {
    const sizeValue = avatarSizeStyles[size];
    return `
      background-color: ${$backgroundColor};
      color: ${$color};
      ${sizeValue};
    `;
  }}
`;
