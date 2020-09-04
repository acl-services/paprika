import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const emptyValueStyles = css`
  font-style: italic;
`;

export const Response = styled.dl`
  ${stylers.lineHeight()}

  color: ${tokens.textColor.subtle};
  margin: ${tokens.space} 0;
  max-height: 420px;
  overflow: auto;
  padding: 0 ${tokens.space} 0 0;

  &:focus {
    ${stylers.focusRing.subtle()};
  }

  dt {
    ${stylers.fontSize(-1)}
    
    display: block;
    font-weight: bold;
    margin-bottom: ${tokens.space};
  }

  dd {
    margin: 0 0 ${stylers.spacer(3)} 0;
    padding: 0;

    &:last-child {
      margin-bottom: 0;
    }

    p {
      margin: ${tokens.space} 0;
    }
  }
`;
