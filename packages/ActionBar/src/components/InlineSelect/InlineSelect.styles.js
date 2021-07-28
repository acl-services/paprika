import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const SelectWrapper = styled.div`
  &[data-pka-anchor="select"] {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    [data-pka-anchor="select.container"] {
      height: 100%;
      width: 100%;
      position: unset;
    }

    select {
      border: none;

      &:focus {
        ${stylers.focusRing()}
      }
    }
  }
`;

export const Wrapper = styled.div`
  height: ${stylers.spacer(4)};
  overflow: hidden;
  padding-left: ${tokens.spaceSm};
  position: relative;
`;

export const Trigger = styled.div`
  margin-right: 1px;
  padding: 0 ${tokens.spaceSm};
`;
