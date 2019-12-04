import styled from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens";

const Footer = styled.div`
  padding: ${spacer(1.5)};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  background-color: ${tokens.modal.footer.backgroundColor};

  & > * {
    margin: ${spacer(0.5)};
  }
`;

Footer.displayName = "Modal.Footer";

export default Footer;
