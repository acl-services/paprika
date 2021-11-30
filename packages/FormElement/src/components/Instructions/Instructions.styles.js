import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const Instructions = styled.div`
  ${stylers.lineHeight(-1)}
  color: ${tokens.color.blackLighten20};
  margin: 0 0 ${tokens.spaceSm} 0;
`;
