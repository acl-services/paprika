import styled from "styled-components";
import PaprikaInput from "@paprika/input";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const Input = styled(PaprikaInput)`
  input[data-pka-anchor="input"] {
    border: none;
    border-bottom: 1px solid ${tokens.color.black};
    border-radius: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    &:focus {
      ${stylers.focusRing()}
      border-bottom-color: transparent;
      border-radius: ${tokens.border.radius};
    }
  }
`;

export const Wrapper = styled.div`
  height: ${stylers.spacer(4)};
  padding: 0 ${stylers.spacer(3)} 0 ${tokens.spaceSm};
  position: relative;
`;

export const Trigger = styled.div`
  max-width: 280px;
  min-width: 80px;
  overflow: hidden;
  padding: 0 ${tokens.spaceLg};
`;
