import { css } from "styled-components";
import tokens from "@paprika/tokens/lib/tokens";
import { spacer } from "@paprika/stylers/lib/helpers";

export const container = css`
  padding: ${tokens.space};
`;

export const optionStyles = css`
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.border.radius};
  box-sizing: border-box;
  font-size: 14px;
  margin-bottom: ${spacer(1)};
  margin-top: ${tokens.space};
  padding: ${tokens.spaceSm};
  width: 100%;
`;

export const divider = css`
  background: ${tokens.backgroundColor.level0};
  border-bottom: 1px solid ${tokens.border.color};
  border-top: 1px solid ${tokens.border.color};
  box-sizing: border-box;
  padding: ${spacer(1)} ${spacer(1)} ${spacer(1)} 12px;
  width: 100%;
`;
