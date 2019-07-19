import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const accordionStyles = css`
  &,
  * {
    box-sizing: border-box;
  }
`;

export const itemStyles = css`
  color: ${tokens.textColor.subtle};
  display: flex;

  [data-pka-anchor="indicator"] {
    margin: ${tokens.space} ${tokens.spaceLg} 0 0;
  }
`;

export const activeItemStyles = css`
  display: flex;
  justify-content: space-between;
`;

export const activeLabelStyles = css`
  ${stylers.truncateText}
  
  color: ${tokens.color.blue};
`;

export const activeStatusStyles = css`
  ${stylers.fontSize(-1)}

  font-style: italic;
  font-weight: normal;
`;
