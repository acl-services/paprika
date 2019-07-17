import { css } from "styled-components";

import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const ruleStyles = css`
  color: ${tokens.textColor.subtle};
  font-weight: normal;
  padding-left: ${tokens.spaceSm};
`;

const labelStyles = css`
  color: ${tokens.textColor.default};
  display: block;
  font-weight: bold;
  line-height: 1.3;
  margin: 0 0 ${tokens.spaceSm} 0;

  ${({ isInline }) =>
    isInline &&
    `
  margin-right: ${stylers.spacer()};`}
`;

export default labelStyles;
