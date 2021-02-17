import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

export const Group = styled.div(
  () => css`
    background-color: ${tokens.color.white};
    border: 1px solid ${tokens.color.blackLighten60};
    border-radius: ${tokens.card.borderRadius};
    box-shadow: ${tokens.card.shadow};
  `
);
