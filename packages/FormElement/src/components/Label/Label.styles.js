import { css } from "styled-components";

import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const ruleStyles = css`
  color: ${tokens.textColor.subtle};
  font-weight: normal;
  padding-left: ${tokens.spaceSm};
`;

const labelStyles = css`
  ${stylers.lineHeight(-1)}
  color: ${tokens.textColor.default};
  display: flex;
  font-weight: bold;
  margin: 0 0 ${tokens.spaceSm} 0;

  ${({ isInline }) => isInline && `padding-right: ${stylers.spacer(1)};`}

  ${({ isVisuallyHidden }) => isVisuallyHidden && stylers.visuallyHidden}

  label {
    margin-right: ${tokens.spaceSm};
  }
`;

export default labelStyles;
