import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const avatarColorStyles = {
  black: `
  background: ${tokens.color.black};
`,
  blue: `
  background: ${tokens.color.blue};
`,
  green: `
  background: ${tokens.color.green};
  `,
  orange: `
  background: ${tokens.color.orange};
  `,
  pink: `
  background: ${tokens.color.chartColor07};
  `,
  red: `
  background: ${tokens.color.chartColor01};
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
  color: ${tokens.color.white};
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
