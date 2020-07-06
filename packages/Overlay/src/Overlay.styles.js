import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

const openedCss = css`
  opacity: 1;
`;

const closedCss = css`
  opacity: 0;
`;

const states = {
  entering: openedCss,
  entered: openedCss,
  exiting: closedCss,
  exited: closedCss,
};

export const BackdropWrapper = styled.div`
  background-color: ${tokens.overlay.backdrop.backgroundColor};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: all ${tokens.overlay.animationDuration}ms ease;
  ${({ state }) => states[state]};
`;

export const OverlayWrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  ${({ zIndex }) => (zIndex ? `z-index: ${zIndex}` : null)}
`;
