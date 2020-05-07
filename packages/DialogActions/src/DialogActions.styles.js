import styled from "styled-components";
import tokens from "@paprika/tokens";

export const DialogActions = styled.div`
  > button:not(:first-child) {
    margin-left: ${tokens.space};
  }
`;
