import styled from "styled-components";
import stylers from "@paprika/stylers";
import { consts } from "../../Popover.styles";

export const ContentStyled = styled.div`
  ${stylers.resetStyles};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  position: fixed;
  transition: opacity ${consts.transition} ease, visibility ${consts.transition} ease;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  z-index: ${props => props.zIndex};

  &:focus {
    outline: none;
  }
`;
