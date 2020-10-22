import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const HeaderFlex = styled.div`
  align-items: flex-end;
  display: flex;
  margin-bottom: ${stylers.spacer(2)};
  [data-pka-anchor="heading"] {
    margin-bottom: 0;
  }
  a {
    margin-left: ${tokens.spaceLg};
  }
`;
