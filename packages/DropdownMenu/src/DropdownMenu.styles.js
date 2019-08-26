import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const contentStyles = css`
  margin-left: -${tokens.spaceLg};
  margin-right: -${tokens.spaceLg};

  [role="menuitem"] {
    ${stylers.lineHeight(-1)}
  }
`;
