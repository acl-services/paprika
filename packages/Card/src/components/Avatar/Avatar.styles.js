import { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const avatarColorStyles = {
  black: `
  color: ${tokens.color.white};
  background: ${tokens.color.black};
`,
  blue: `
  color: ${tokens.color.white};
  background: ${tokens.color.blue};
`,
};

const avatarStyles = css`
  align-items: center;
  border-radius: 12px;
  display: inline-flex;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  width: 40px;
  ${stylers.fontSize(3)}

  &,
  * {
    box-sizing: border-box;
  }

  ${({ color }) => avatarColorStyles[color]};
`;

export default avatarStyles;
