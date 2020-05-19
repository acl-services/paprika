import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const avatarColorStyles = {
  black: `
  color: ${tokens.color.white};
  background: ${tokens.color.black};
`,
  blue: `
  color: ${tokens.color.white};
  background: ${tokens.color.blue};
`,
};

export const avatarSizeStyles = {
  small: `
    border-radius: 10px;
    height: 30px ;
    width: 30px;
    ${stylers.fontSize(2)} 
  `,

  medium: `
    border-radius: 12px
    height: 40px ;
    width: 40px;
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

  ${({ color }) => avatarColorStyles[color]};
  ${({ size }) => avatarSizeStyles[size]};
`;
