import tokens from "@paprika/tokens";
import { css } from "styled-components";
import stylers from "@paprika/stylers";

const headingStyles = css`
  background-color: ${tokens.table.header.backgroundColor};
  background-color: ${tokens.color.creme};
  border-bottom: 2px solid ${tokens.border.color};
  font-weight: bold;
  padding: ${tokens.space} ${tokens.space} ${tokens.space} ${stylers.spacer(2)};
`;

export default headingStyles;
