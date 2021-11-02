import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import IconButton from "../Icon";

const darkStyles = css`
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${stylers.alpha(tokens.color.white, 0.2)};
  }

  &:active {
    background-color: ${stylers.alpha(tokens.color.white, 0.3)};
    transition: none;
  }

  [data-pka-anchor="button.icon"] {
    color: ${tokens.color.white};
  }
`;

export const CloseButton = styled(IconButton)(
  ({ isDark }) => css`
    ${isDark ? darkStyles : ""}
  `
);
