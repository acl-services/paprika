import tokens from "@paprika/tokens/lib/tokens";
import styled from "styled-components";
import RawButton from "@paprika/raw-button";

export const OverlayWrapper = styled(RawButton)`
  ${props => `
    background-color: ${tokens.overlay.backdrop.backgroundColor};
    box-sizing: content-box;
    display: block;
    height: 100%;
    position: fixed;
    top: 0;
    width: 100%;
    ${props.zIndex ? `z-index: ${props.zIndex}` : null};
  `}
`;
