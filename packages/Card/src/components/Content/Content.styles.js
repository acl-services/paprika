import styled from "styled-components";
import tokens from "@paprika/tokens";

export const Content = styled.div`
  height: 100%;
  padding: ${tokens.spaceLg};
  width: 100%;

  &,
  * {
    box-sizing: border-box;
  }
`;
