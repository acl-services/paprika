import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const ruleStyles = css`
  color: ${tokens.textColor.subtle};
  font-weight: normal;
`;

const labelStyles = ({ isVisuallyHidden }) => css`
  color: ${tokens.textColor.default};
  display: inline-block;
  font-size: inherit;
  font-weight: bold;
  margin: 0 ${stylers.spacer(4)} ${tokens.spaceSm} 0;
  padding: 0;
  position: relative;

  ${stylers.lineHeight(-1)}
  ${isVisuallyHidden && stylers.visuallyHidden}
`;

export default labelStyles;
