import styled from "styled-components";
import PaprikaSelect from "@paprika/select";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const Select = styled(PaprikaSelect)`
  &[data-pka-anchor="select"] {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

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
  padding: 0 ${stylers.spacer(3)} 0 ${tokens.spaceSm};
  position: relative;
`;

export const Trigger = styled.div`
  margin-right: 1px;
  padding: 0 ${tokens.spaceSm};
`;
