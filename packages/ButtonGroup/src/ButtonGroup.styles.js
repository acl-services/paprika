import tokens from "@paprika/tokens";
import styled from "styled-components";
import ButtonItem from "./components/ButtonItem";

const fullWithStyles = `
  display: flex;
  width: 100%;
`;

export const Button = styled(ButtonItem)`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ButtonGroup = styled.div`
  display: inline-flex;

  ${Button} {
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

  ${({ isFullWidth }) => (isFullWidth ? fullWithStyles : "")}
`;
