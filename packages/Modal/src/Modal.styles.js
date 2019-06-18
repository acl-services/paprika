import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

const computeModalWidth = width => {
  switch(width) {
    case ShirtSizes.SMALL:
      return "450px";
    case ShirtSizes.MEDIUM:
      return "450px";
    case ShirtSizes.LARGE:
    default:
      return "900px";
  }
}

export const modalStyles = props => `
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  opacity: 0;
  visibility: hidden;
  z-index: ${props.zIndex || stylers.z(6)};

  ${props.isOpen && `
    opacity: 1;
    transition: opacity 0.2s;
    visibility: visible;
  `}
`;

export const frameStyles = props => `
  border-radius: ${tokens.card.borderRadius};
  left: 50%;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - (${stylers.spacer(6)}));
  max-width: ${computeModalWidth(props.width)};
`;

export const overlayStyles = props => `
  background-color: ${tokens.modal.backdrop.backgroundColor};
  bottom: 0;
  left: 0;
  pointer-events: auto;
  position: fixed;
  right: 0;
  top: 0;
`;

export const contentStyles = props => `
  background-color: ${tokens.color.white};
  border-radius: ${tokens.card.borderRadius};
  box-shadow: ${tokens.modal.shadow};
  max-height: calc(100vh - (${stylers.spacer(6)}));
  position: relative;
  transform: scale(0.8);
  transition: transform 0.3s ease-out;

  ${props.isOpen && `
    transform: scale(1);
  `}

  ${props.isScrollable && `
    overflow-y: auto;
  `}
`;

export const ariaLabelStyles = props => `
  ${stylers.visuallyHidden};
`;
