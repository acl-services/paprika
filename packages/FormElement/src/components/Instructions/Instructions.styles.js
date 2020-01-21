import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const InstructionsStyled = styled.div`
  ${stylers.lineHeight(-1)}
  color: ${tokens.color.blackLighten20};
  margin: ${tokens.spaceSm} 0 0 0;
`;
