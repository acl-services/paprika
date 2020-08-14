import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { toInt } from "@paprika/stylers/lib/helpers";

export const ruleStyles = css`
  color: ${tokens.textColor.subtle};
  font-weight: normal;
`;

const labelStyles = css`
  color: ${tokens.textColor.default};
  display: inline-block;
  font-size: inherit;
  font-weight: bold;
  ${({ hasInstructionsShowing }) =>
    `margin: 0 ${stylers.spacer(4)} ${
      hasInstructionsShowing ? toInt(tokens.space) + toInt(tokens.spaceSm) : toInt(tokens.space) * 2
    }px 0;`}
  padding: 0;
  position: relative;

  ${stylers.lineHeight(-1)}
  ${({ isVisuallyHidden }) => isVisuallyHidden && stylers.visuallyHidden}
`;

export default labelStyles;
