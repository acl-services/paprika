import { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const textStyles = css`
  color: ${tokens.color.black};
  ${stylers.fontSize(-2)};
  margin: 0px;
`;

export default textStyles;
