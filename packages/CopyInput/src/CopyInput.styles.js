import styled from "styled-components";
import tokens from "@paprika/tokens";
import Input from "@paprika/input";

export const CopyInput = styled.div`
  display: flex;

  input[data-pka-anchor="input"] {
    border-radius: ${tokens.border.radius} 0 0 ${tokens.border.radius};
  }

  button {
    border-radius: 0 ${tokens.border.radius} ${tokens.border.radius} 0;
  }
`;

export const Value = styled.div`
  margin: auto ${tokens.spaceSm} auto 0;
`;

export const HiddenInput = styled(Input)`
  display: none;
`;
