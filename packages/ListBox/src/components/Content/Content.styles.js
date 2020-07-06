import styled from "styled-components";
import tokens from "@paprika/tokens";

export const ContentWrapper = styled.div`
  :focus {
    outline: 2px ${tokens.color.blackLighten30} dotted;
    z-index: 1;
  }
`;
