import tokens from "@paprika/tokens";
import { css } from "styled-components";
import { disabledStyle } from "../helpers.styles";

const groupStyles = css`
  ${({ isDisabled }) => {
    return `
      [data-pka-anchor="collapsible.heading"] {
        align-items: center;
        background-color: ${tokens.color.cremeLighten5};
        border-bottom: 1px solid ${tokens.color.blackLighten60};
        display: flex;
        padding: ${tokens.spaceSm};

        input[type="checkbox"] {
          margin-right: ${tokens.space};
        }

        label {
          align-items: center;
          display: flex;
        }

        ${isDisabled ? disabledStyle : ""};
      }
    `;
  }}
`;

export default groupStyles;
