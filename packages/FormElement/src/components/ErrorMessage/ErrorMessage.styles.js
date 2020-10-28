import { css } from "styled-components";

import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const iconStyles = css`
  margin-right: ${tokens.spaceSm};
  margin-top: ${tokens.spaceSm};
`;

const errorMessageStyles = css`
  ${stylers.lineHeight(-1)}
  color: ${tokens.color.orangeDarken10};
  margin: ${tokens.spaceSm} 0 0 0;
`;

export default errorMessageStyles;
