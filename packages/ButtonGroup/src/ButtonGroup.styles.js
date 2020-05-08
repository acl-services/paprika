import tokens from "@paprika/tokens";
import styled, { css } from "styled-components";
import ButtonItem from "./components/ButtonItem";

const fullWithStyles = css`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;

  [data-pka-anchor="button-group.button"] {
    flex-basis: 100%;
  }
`;

export const Button = styled(ButtonItem)``;

export const ButtonGroup = styled.div`
  display: inline-flex;
  flex-wrap: wrap;

  ${({ isFullWidth }) => (isFullWidth ? fullWithStyles : "")}

  [data-pka-anchor='button-group.button'] {
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
`;
