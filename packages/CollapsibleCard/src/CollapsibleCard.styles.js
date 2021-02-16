import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

export const CollapsibleCard = styled.div(
  ({ isEditing, isRow, isLastRow }) => css`
    background-color: ${tokens.color.white};
    
    ${isEditing &&
      css`
        background-color: ${tokens.color.yellowLighten30};
        box-shadow: 0 0 0 1px rgba(145, 106, 31, 1), 0 1px 3px 0 rgba(145, 106, 31, 1);
      `}
      
    ${isRow &&
      css`
        border-top-left-radius: ${tokens.card.borderRadius};
        border-top-right-radius: ${tokens.card.borderRadius};
        box-shadow: inset 0px -1px 0px ${tokens.color.blackLighten60};
      `}
    ${isLastRow &&
      css`
        border-radius: ${tokens.card.borderRadius};
      `}
    ${!isRow &&
      !isLastRow &&
      css`
        border-radius: ${tokens.card.borderRadius};
        box-shadow: ${tokens.card.shadow};
      `}
  `
);
