import styled from "styled-components";
import tokens from "@paprika/tokens";

export const CopyInput = styled.div`
  display: flex;

  input[data-pka-anchor="input"] {
    border-radius: ${tokens.border.radius} 0 0 ${tokens.border.radius};
  }

  button {
    border-radius: 0 ${tokens.border.radius} ${tokens.border.radius} 0;
  }
`;
