import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const darkStyles = css`
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${stylers.alpha(tokens.color.white, 0.2)};

    [data-pka-anchor="button.icon"] {
      color: ${tokens.color.white};
    }
  }

  &:active {
    background-color: ${stylers.alpha(tokens.color.white, 0.3)};
    transition: none;

    [data-pka-anchor="button.icon"] {
      color: ${tokens.color.white};
      transition: none;
    }
  }

  [data-pka-anchor="button.icon"] {
    color: ${tokens.color.blackLighten50};
    transition: color 0.2s ease-out;
  }
`;

const closeButtonStyles = css`
  [data-pka-anchor="button.icon"] {
    color: ${tokens.textColor.icon};
  }

  ${({ isDark }) => (isDark ? darkStyles : "")}
`;

export default closeButtonStyles;
