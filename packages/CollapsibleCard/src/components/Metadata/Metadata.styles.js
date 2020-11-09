import styled from "styled-components";
import tokens from "@paprika/tokens";
import { fontSize } from "@paprika/stylers/lib/helpers";

export const Metadata = styled.div`
  ${fontSize(-2)};
  color: ${tokens.color.blackLighten20};
  line-height: 1;
  margin-top: ${tokens.space};
`;
