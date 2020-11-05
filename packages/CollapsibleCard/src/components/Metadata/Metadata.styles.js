import styled from "styled-components";
import tokens from "@paprika/tokens";
import { fontSize, lineHeight } from "@paprika/stylers/lib/helpers";

export const Metadata = styled.div`
  ${fontSize(-2)};
  ${lineHeight(-1)}
  color: ${tokens.color.blackLighten20};
  margin-top: ${tokens.spaceSm};
`;
