import { css } from "styled-components";
import tokens from "@paprika/tokens";

const dividerStyles = css`
  background-color: ${tokens.border.color};
  display: inline-block;
  height: 24px;
  margin-left: ${tokens.space};
  margin-right: ${tokens.space};
  width: 1px;
`;

export default dividerStyles;
