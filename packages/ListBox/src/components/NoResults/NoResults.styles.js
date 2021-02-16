import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const NoResults = styled.div`
  margin-top: -${tokens.spaceSm};
  padding: ${tokens.space};
`;

export const NoResultsAria = styled.div`
  ${stylers.visuallyHidden}
`;
