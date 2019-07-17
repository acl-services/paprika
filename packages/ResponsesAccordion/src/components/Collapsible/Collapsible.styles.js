import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const collapsibleStyles = css`
  border-bottom: 1px solid ${tokens.border.color};

  [role="button"] {
    margin-left: -${tokens.spaceSm};
    padding: ${tokens.space} ${tokens.spaceSm};
    width: calc(100% + ${tokens.spaceSm});
  }
`;

export const incompleteStyles = css`
  border-bottom: 1px solid ${tokens.border.color};
  flex-grow: 1;
  height: ${stylers.spacer(5)};
  line-height: ${stylers.spacer(5)};
`;
