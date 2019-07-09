import { css } from "styled-components";

import tokens from "@paprika/tokens";

export const hoveredItemStyles = css`
  background-color: ${tokens.color.blackLighten70};
  font-weight: bold;
`;

export const selectedItemStyles = css`
  background-color: #cde5fc;
  font-weight: bold;
`;

export const visuallyHiddenStyles = css`
  height: 0;
  overflow: hidden;
  width: 0;
`;
