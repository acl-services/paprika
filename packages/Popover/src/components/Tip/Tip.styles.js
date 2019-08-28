import styled from "styled-components";
import stylers from "@paprika/stylers";
import { consts } from "../../Popover.styles";

export const TipStyled = styled.div`
  display: block;
  height: ${stylers.spacer(2)};
  line-height: ${stylers.spacer(2)};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  position: fixed;
  transform: rotate(${props => props.rotate || "0"}deg);
  transition: opacity ${consts.transition} ease, visibility ${consts.transition} ease;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  width: ${stylers.spacer(2)};
  z-index: ${props => props.zIndex};
`;
