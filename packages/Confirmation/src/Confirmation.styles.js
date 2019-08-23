import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const confirmStyles = css`
  padding: 0 ${tokens.spaceSm} ${tokens.space} ${tokens.spaceSm};
`;

export const confirmBodyStyles = css`
    ${stylers.lineHeight()}
    padding: ${tokens.spaceSm} 0 0 0;
`;

export const confirmFooterStyles = css`
  margin-top: ${stylers.spacer(2)};

  [role="button"] + [role="button"] {
    margin-left: ${tokens.space};
  }
`;
