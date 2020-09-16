import styled from "styled-components";
import tokens from "@paprika/tokens";

export const Child = styled.div`
  margin: ${tokens.spaceSm};
`;

export const Footer = styled.div`
  align-items: center;
  background-color: ${tokens.modal.footer.backgroundColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: ${tokens.spaceLg};
`;
