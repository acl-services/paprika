import styled from "styled-components";
import tokens from "@paprika/tokens";

export const DialogActionsWrapper = styled.div`
  > button:not(:first-child) {
    margin-left: ${tokens.space};
  }
`;
