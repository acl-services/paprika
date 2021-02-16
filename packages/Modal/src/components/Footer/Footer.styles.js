import styled from "styled-components";
import tokens from "@paprika/tokens";

export const Footer = styled.div`
  align-items: center;
  background-color: ${tokens.modal.footer.backgroundColor};
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: ${tokens.spaceLg};

  > * {
    margin: ${tokens.spaceSm};
  }
`;
