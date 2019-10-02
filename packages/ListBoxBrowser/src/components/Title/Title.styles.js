import { css } from "styled-components";
import tokens from "@paprika/tokens/lib/tokens";
import { spacer } from "@paprika/stylers/lib/helpers";

export const title = css`
  background: ${tokens.backgroundColor.level0};
  border-bottom: 1px solid ${tokens.border.color};
  border-top-left-radius: ${tokens.border.radius};
  border-top-right-radius: ${tokens.border.radius};
  flex-basis: 50%;
  flex-grow: 1;
  font-size: 14px;
  min-height: 20px;
  padding: ${spacer(1)} ${spacer(1)} ${spacer(1)} 12px;
`;

export const flex = css`
  align-items: flex-start;
  display: flex;
  justify-content: center;
`;
