import { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const headerStyles = css`
  background: ${tokens.color.white};
  border-radius: 6px 6px 0 0;
  color: ${tokens.color.black};
  min-height: 15px;
  padding: ${stylers.spacer(1)};
  position: relative;
  top: 0;

  &,
  * {
    box-sizing: border-box;
  }
`;

export default headerStyles;
