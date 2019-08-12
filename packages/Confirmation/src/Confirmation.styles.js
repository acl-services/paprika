import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const confirmStyles = css`
  padding: ${stylers.spacer(2)};
`;

export const confirmHeaderStyles = css`
  ${stylers.fontSize()};
  font-weight: bold;
`;

export const confirmDescriptionStyles = css`
    ${stylers.lineHeight()}
    margin: ${tokens.space} 0;
`;

export const confirmFooterStyles = css`
  margin-top: ${stylers.spacer(2)};

  span[role="button"] {
    margin-right: ${tokens.space};
  }
`;
