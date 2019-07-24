import { css } from "styled-components";
import tokens from "@paprika/tokens";

const dividerStyles = css`
  border-top: 1px solid ${tokens.border.color};
  display: block;
  margin: ${tokens.space} 0;
`;

export default dividerStyles;
