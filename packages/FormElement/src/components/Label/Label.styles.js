import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const ruleStyles = css`
  color: ${tokens.textColor.subtle};
  font-weight: normal;
`;

const labelStyles = css`
  color: ${tokens.textColor.default};
  display: inline-block;
  font-weight: bold;
  margin: 0 ${stylers.spacer(4)} ${tokens.spaceSm} 0;
  padding: 0;
  position: relative;

  ${stylers.lineHeight(-1)}
  ${({ isVisuallyHidden }) => isVisuallyHidden && stylers.visuallyHidden}

  label {
    margin-right: ${tokens.spaceSm};
  }
`;

export default labelStyles;
