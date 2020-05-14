import { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const titleStyles = css`
  color: ${tokens.color.black};
  ${stylers.fontSize(-2)}
`;

export default titleStyles;
