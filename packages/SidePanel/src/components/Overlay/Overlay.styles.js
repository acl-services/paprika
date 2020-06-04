import tokens from "@paprika/tokens/lib/tokens";
import styled from "styled-components";
import RawButton from "@paprika/raw-button";

const commonStyles = styled(RawButton)`
  background-color: ${tokens.overlay.backdrop.backgroundColor};
  box-sizing: content-box;
  display: block;
  height: 100%;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Overlay = styled(commonStyles)`
  ${props => {
    const zIndex = props.zIndex ? `z-index: ${props.zIndex}` : null;

    return `
    ${zIndex};
  `;
  }}
`;
