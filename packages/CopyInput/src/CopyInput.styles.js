import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

export const CopyInput = styled.div(
  () => css`
    display: flex;
    [data-pka-anchor="heading"] {
      margin-bottom: 0;
    }

    input.form-input__input {
      border-radius: ${tokens.border.radius} 0 0 ${tokens.border.radius};
    }

    button {
      border-radius: 0 ${tokens.border.radius} ${tokens.border.radius} 0;
    }
  `
);
