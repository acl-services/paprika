import { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const integize = token => Number.parseInt(token, 10);

const size = stylers.spacer(4);

const iconFontSize = (integize(size) / integize(tokens.space) - 2.5) * 2;
const iconSize = `${stylers.fontSizeValue(iconFontSize)}px`;

const topOffset = (integize(size) - integize(stylers.fontSizeValue()) * stylers.lineHeightValue(-1)) / 2;
const isCheckboxBigger = topOffset > 0;
const labelPadding = ({ hasChildren }) => {
  const top = isCheckboxBigger ? `${topOffset}px` : 0;
  const left = hasChildren ? `${integize(size) + integize(tokens.spaceSm)}px` : size;
  return `${top} 0 ${top} ${left}`;
};
const checkerTop = isCheckboxBigger ? "-1px" : `${Math.abs(topOffset / 2)}px`;

const checkboxStyles = css`
  ${stylers.boxSizingStyles}
  ${stylers.fontSize()}

  line-height: ${({ hasChildren }) => (hasChildren ? stylers.lineHeightValue(-1) : "0")};
  position: relative;

  input[type="checkbox"] {
    ${stylers.visuallyHidden}

    & + label {
      cursor: pointer;
      display: inline-block;
      margin: 0;
      min-height: ${size};
      padding: ${labelPadding};
      position: relative;
    }
  
    & + label::before,
    & + label > [data-pka-anchor="checkbox.icon"] {
      position: absolute;
      top: ${checkerTop};
    }

    & + label::before {
      content: "";
      border: 1px solid ${tokens.border.color};
      border-radius: ${tokens.border.radius};
      background: ${tokens.color.white};
      height: ${size};
      left: 0; 
      width: ${size};
      z-index: 1;
    }

    & + label > [data-pka-anchor="checkbox.icon"] {
      color: ${tokens.color.blue};
      font-size: ${iconSize};
      height: ${size};
      left: ${integize(size) / 2}px;
      opacity: 0;
      pointer-events: none;
      transform: translateX(-50%);
      transition: opacity 0.15s ease-out;
      z-index: 2;
    }

    &:checked + label > [data-pka-anchor="checkbox.icon"] {
      opacity: 1;
    }

    &:disabled {
      & + label,
      & ~ [data-pka-anchor="checkbox.icon"] {
        opacity: 0.5;
        transition: none;
      }
      & + label::before {
        background-color: ${tokens.color.blackLighten70};
      }
    }
  }
`;

export default checkboxStyles;
