import tokens from "@paprika/tokens";
import styled, { css } from "styled-components";

const buttonSelector = "[data-pka-anchor='button-group.button']";

const fullWithStyles = css`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;

  ${buttonSelector} {
    flex-basis: 100%;
  }
`;

export const ButtonGroup = styled.div(
  ({ isFullWidth }) => css`
    display: inline-flex;
    flex-wrap: wrap;
    ${isFullWidth && fullWithStyles}

    ${buttonSelector} {
      border-radius: 0;

      &:first-child {
        border-radius: ${tokens.button.borderRadius} 0 0 ${tokens.button.borderRadius};
      }

      &:last-child {
        border-radius: 0 ${tokens.button.borderRadius} ${tokens.button.borderRadius} 0;
      }

      &:not(:last-child) {
        margin-right: -1px;
      }
    }
  `
);
