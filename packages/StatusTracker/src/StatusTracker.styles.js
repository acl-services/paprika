import styled from "styled-components";
import tokens from "@paprika/tokens";
import { spacer } from "@paprika/stylers/lib/helpers";

export const StatusTracker = styled.ol`
  align-items: center;
  display: inline-flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  ${({ hasExtensionLine }) =>
    hasExtensionLine &&
    `
      ::before {
        content: "";
        display: inline-block;
        flex-grow: 1;
        vertical-align: middle;
        border-style: solid;
        border-width: 1px;
        border-image: linear-gradient(45deg, ${tokens.color.white} 0%, ${tokens.color.blackLighten10} 100%) 1;
        max-width: ${spacer(3)};        
      }
    `}

  * {
    box-sizing: border-box;
  }
`;
