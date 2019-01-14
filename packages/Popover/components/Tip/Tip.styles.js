import styled from "styled-components";
import stylers from "@acl-ui/stylers";
import { consts } from "../../Popover.styles";

export const TipStyled = styled.div`
  position: fixed;
  width: ${stylers.spacer(2)};
  height: ${stylers.spacer(2)};
  transition: opacity ${consts.transition} ease, visibility ${consts.transition} ease;
  transform: rotate(${props => props.rotate || "0"}deg);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  z-index: ${props => props.zIndex};
`;
