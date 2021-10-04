import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import { css } from "styled-components";
import { disabledStyles } from "../helpers.styles";

const itemStyles = css`
  ${({ isDisabled }) => `
      padding: ${tokens.spaceSm} 6px ${tokens.spaceSm} ${stylers.spacer(7)};
      
      ${isDisabled ? disabledStyles : ""};

      label {
        ${stylers.lineHeight(-1)}
        align-items: flex-start;
        display: flex;
      }

      [data-pka-anchor="checkbox"] {
        margin: 2px ${tokens.space} 0 0;
      }
    `}
`;

export default itemStyles;
