import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import { css } from "styled-components";
import { disabledStyle } from "../helpers.styles";

const itemStyles = css`
  ${({ isDisabled }) => {
    return `
      padding: 2px 0 2px ${stylers.spacer(5)};
      ${isDisabled ? disabledStyle : ""};

      input {
        margin-right: ${tokens.space}
      }
    `;
  }}
`;

export default itemStyles;
