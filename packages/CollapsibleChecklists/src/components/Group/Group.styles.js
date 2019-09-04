import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { disabledStyles } from "../helpers.styles";

const groupStyles = css`
  ${({ isDisabled }) => {
    return `
      [data-pka-anchor="collapsible.heading"] {
        align-items: flex-start;
        background-color: ${tokens.color.cremeLighten5};
        border-bottom: 1px solid ${tokens.color.blackLighten60};
        display: flex;
        padding: ${tokens.spaceSm} ${tokens.spaceSm} ${tokens.spaceSm} ${tokens.space};

        ${isDisabled ? disabledStyles : ""};

        .collapsible__label {
          flex-shrink: 0;
        }

        label {
          ${stylers.lineHeight(-1)}
          align-items: flex-start;
          display: flex;
          margin-top: 2px;
        }

        input[type="checkbox"] {
          margin: 4px ${tokens.space} 0 ${tokens.spaceSm}
        }
      }
    `;
  }}
`;

export default groupStyles;
