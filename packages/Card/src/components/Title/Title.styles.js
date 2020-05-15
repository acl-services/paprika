import { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const titleStyles = css`
  color: ${tokens.color.black};
  ${stylers.fontSize(0)};
  margin: 0px;
  padding: 0px;
`;

export default titleStyles;
