import { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const integize = token => Number.parseInt(token, 10);

const sizeMap = {
  small: 2,
  medium: 4,
  large: 6,
};

const getSpacing = size => stylers.spacer(sizeMap[size]);
const getSpacingInt = size => integize(getSpacing(size));
const size = ({ size }) => getSpacing(size);
const iconFontSize = size => (getSpacingInt(size) / integize(tokens.space) - 3.5) * 2; // needs better calculations for sizes
const iconSize = size => `${stylers.fontSizeValue(iconFontSize(size))}px`;
const topOffset = size => (getSpacingInt(size) - integize(stylers.fontSizeValue()) * stylers.lineHeightValue(-1)) / 2;
const isCheckboxBigger = size => topOffset(size) > 0;
const labelPadding = ({ hasChildren, size }) => {
  const top = isCheckboxBigger(size) ? `${topOffset(size)}px` : 0;
  const left = hasChildren ? `${getSpacingInt(size) + integize(tokens.space)}px` : getSpacing(size);
  return `${top} 0 ${top} ${left}`;
};
const checkerTop = size => (isCheckboxBigger ? "-1px" : `${Math.abs(topOffset(size) / 2)}px`);
const checkBoxIconLeft = ({ size }) => `${getSpacingInt(size) / 2}px`;

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
      background: ${tokens.color.white};
      border: 2px solid ${tokens.border.color};
      border-radius: ${tokens.border.radius};
      content: "";
      height: ${size};
      left: 0;
      width: ${size};
      z-index: 1;
    }

    & + label > [data-pka-anchor="checkbox.icon"] {
      color: ${tokens.color.blue};
      font-size: ${iconSize};
      height: ${size};
      left: ${checkBoxIconLeft};
      opacity: 0;
      pointer-events: none;
      transform: translateX(-50%);
      transition: opacity 0.15s ease-out;
      z-index: 2;
    }

    &:checked{
      & + label::before {
        background: ${tokens.color.black};
        border: none;
      }
    }

    &:checked + label > [data-pka-anchor="checkbox.icon"] {
      color: ${tokens.color.white};
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

  &:hover{
    input[type="checkbox"] {
      & + label::before {
        border: 2px solid ${tokens.color.black};
      }
    }
  }
`;

export default checkboxStyles;
