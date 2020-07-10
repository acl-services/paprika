import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const containerStyles = styled.div`
  display: inline-block;
  position: relative;

  label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  input[type="file"] {
    ${stylers.visuallyHidden};
    height: 100%;
    position: absolute;
    width: 100%;
    &:focus + label {
      box-shadow: ${tokens.highlight.active.withBorder.boxShadow};
    }

    &:focus + div span[data-pka-anchor="button"] {
      ${stylers.focusRing.bordered()};
    }
  }
`;
