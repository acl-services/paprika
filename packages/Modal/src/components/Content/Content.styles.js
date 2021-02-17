import styled from "styled-components";
import stylers from "@paprika/stylers";
import { spacer } from "@paprika/stylers/lib/helpers";

export const ContentWrapper = styled.div`
  overflow-y: auto;

  &:focus {
    ${stylers.focusRing.subtle(true)};
  }
`;

export const Content = styled.div`
  padding: ${spacer(2)};
`;
