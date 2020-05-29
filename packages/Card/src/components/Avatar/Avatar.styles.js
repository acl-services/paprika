import { spacer } from "@paprika/stylers/lib/helpers";
import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const smallSize = `${spacer(4)}`;
const mediumSize = `${spacer(5)}`;

export const avatarSizeStyles = {
  small: `
    border-radius: 10px;
    height: ${smallSize};
    width: ${smallSize};
    ${stylers.fontSize(2)} 
  `,

  medium: `
    border-radius: 12px;
    height: ${mediumSize};
    width: ${mediumSize};
    ${stylers.fontSize(3)} 
  `,
};

export const Avatar = styled.div`
  align-items: center;
  color: ${tokens.color.white};
  display: inline-flex;
  font-weight: bold;
  justify-content: center;

  &,
  * {
    box-sizing: border-box;
  }

  ${({ size }) => avatarSizeStyles[size]};
`;
