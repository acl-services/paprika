import tokens from "@paprika/tokens/lib/tokens";
import styled, { css } from "styled-components";
import RawButton from "@paprika/raw-button";

export const Overlay = styled(RawButton)(
  ({ zIndex }) => css`
    background-color: ${tokens.overlay.backdrop.backgroundColor};
    box-sizing: content-box;
    display: block;
    height: 100%;
    position: fixed;
    top: 0;
    width: 100%;
    ${zIndex ? `z-index: ${zIndex}` : null};
  `
);
