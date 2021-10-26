import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import { theme } from "@paprika/themes";

export const Heading = styled.div(theme("Heading", () => css``));

export const Divider = styled.span`
  border-bottom: 2px solid ${tokens.color.blackLighten70};
  flex-grow: 1;
  margin-left: ${tokens.space};
`;
