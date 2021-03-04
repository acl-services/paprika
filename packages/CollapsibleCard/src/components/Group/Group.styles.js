import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import getBorderRadius from "../../helper.styles";

export const Group = styled.div(
  () => css`
    border: 1px solid ${tokens.color.blackLighten60};
    border-radius: ${getBorderRadius(null, false, false)};
    box-shadow: ${tokens.card.shadow};
  `
);
