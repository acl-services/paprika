import tokens from "@paprika/tokens/lib/tokens";
import styled from "styled-components";
import RawButton from "@paprika/raw-button";

export const Overlay = styled(RawButton)`
  background-color: ${tokens.overlay.backdrop.backgroundColor};
  box-sizing: content-box;
  display: block;
  height: 100%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${props => props.zIndex};
`;
