import { css } from "styled-components";
import tokens from "@paprika/tokens";

export const toggleStyles = css`
  ${props => `
  display: ${props.isCollapsed ? "inline" : "block"};

  [data-pka-anchor="button"] {
    font-size: inherit;
    line-height: inherit;
    margin: 0 -${tokens.spaceSm};
    margin-top: ${props.isCollapsed ? "0" : tokens.spaceLg};
    min-height: 0;
    padding: 0 ${tokens.spaceSm};
    vertical-align: baseline;
  }
  `}
`;
