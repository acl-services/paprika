import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

export const CollapsibleCard = styled.div(
  () => css`
    background-color: ${tokens.color.white};
    border-radius: ${tokens.card.borderRadius};
    box-shadow: ${tokens.card.shadow};
  `
);
