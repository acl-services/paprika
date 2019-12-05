import styled from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens";

const Footer = styled.div`
  align-items: center;
  background-color: ${tokens.modal.footer.backgroundColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: ${spacer(1.5)};

  & > * {
    margin: ${spacer(0.5)};
  }
`;

Footer.displayName = "Modal.Footer";

export default Footer;
