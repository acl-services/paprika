import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { toInt } from "@paprika/stylers/lib/helpers";

export const Instructions = styled.div`
  ${stylers.lineHeight(-1)}
  color: ${tokens.color.blackLighten20};
  margin: 0 0 ${toInt(tokens.space) * 2}px 0;
`;
