import { css } from "styled-components";

import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const iconStyles = css`
  margin: 2px ${tokens.spaceSm} 0 0;
`;

const errorMessageStyles = css`
  ${stylers.lineHeight(-1)}
  color: ${tokens.color.orangeDarken10};
  margin: ${tokens.spaceSm} 0 0 0;
`;

export default errorMessageStyles;
