import styled from "styled-components";
import tokens from "@paprika/tokens";

const Footer = styled.div`
  align-items: center;
  background-color: ${tokens.modal.footer.backgroundColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: ${tokens.spaceLg};

  & > * {
    margin: ${tokens.spaceSm};
  }
`;

Footer.displayName = "Modal.Footer";

export default Footer;
