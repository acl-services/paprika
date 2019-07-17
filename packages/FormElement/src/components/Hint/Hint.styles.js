import { css } from "styled-components";

import tokens from "@paprika/tokens";

export const iconStyles = css`
  color: ${tokens.textColor.icon};
  height: ${tokens.spaceLg};
  width: ${tokens.spaceLg};
`;

const hintStyles = css`
  align-self: center;
  display: block;
  height: ${tokens.spaceLg};
  width: ${tokens.spaceLg};
`;

export default hintStyles;
