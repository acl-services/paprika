import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

export const CollapsibleCard = styled.div(
  ({ isEditing }) => css`
    background-color: ${tokens.color.white};
    border-radius: ${tokens.card.borderRadius};
    box-shadow: ${tokens.card.shadow};

    ${isEditing &&
      css`
        background-color: ${tokens.color.yellowLighten30};
        box-shadow: 0 0 0 1px rgba(145, 106, 31, 1), 0 1px 3px 0 rgba(145, 106, 31, 1);
      `}
  `
);
