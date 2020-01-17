import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const DescriptionStyled = styled.div`
  ${stylers.lineHeight(-1)}
  color: ${tokens.color.blackLighten20};
  margin: ${tokens.spaceSm} 0 0 0;
`;
