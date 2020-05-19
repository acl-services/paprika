import { css } from "styled-components";
// import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const contentStyles = css`
  &,
  * {
    box-sizing: border-box;
    padding: ${tokens.space};
  }
`;

export default contentStyles;
