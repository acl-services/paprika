import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { css } from "styled-components";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

const computeModalWidth = width => {
  switch (width) {
    case ShirtSizes.SMALL:
      return "450px";
    case ShirtSizes.MEDIUM:
      return "450px";
    case ShirtSizes.LARGE:
    default:
      return "900px";
  }
};

const modalOpenStyles = css`
  opacity: 1;
  transition: opacity 0.2s;
  visibility: visible;
`;

export const modalStyles = css`
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  visibility: hidden;
  z-index: ${props => props.zIndex || stylers.z(6)};
  ${props => props.isOpen && modalOpenStyles}
`;

export const frameStyles = css`
  border-radius: ${tokens.card.borderRadius};
  left: 50%;
  max-width: ${props => computeModalWidth(props.width)};
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - (${stylers.spacer(6)}));
`;

export const overlayStyles = css`
  background-color: ${tokens.modal.backdrop.backgroundColor};
  bottom: 0;
  left: 0;
  pointer-events: auto;
  position: fixed;
  right: 0;
  top: 0;
`;

export const contentStyles = css`
  background-color: ${tokens.color.white};
  border-radius: ${tokens.card.borderRadius};
  box-shadow: ${tokens.modal.shadow};
  max-height: calc(100vh - (${stylers.spacer(6)}));
  position: relative;
  transform: scale(0.8);
  transition: transform 0.3s ease-out;

  ${props =>
    props.isOpen &&
    css`
      transform: scale(1);
    `}

  ${props =>
    props.isScrollable &&
    css`
      overflow-y: auto;
    `}
`;
