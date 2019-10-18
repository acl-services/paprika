import { css } from "styled-components";
import stylers from "@paprika/stylers";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import tokens from "@paprika/tokens";

const integize = token => Number.parseInt(token, 10);

const sizeMap = {
  [ShirtSizes.SMALL]: 2,
  [ShirtSizes.MEDIUM]: 2.5,
  [ShirtSizes.LARGE]: 3,
};

const getSpacing = size => stylers.spacer(sizeMap[size]);
const getSpacingInt = size => integize(getSpacing(size));

const size = ({ size }) => getSpacing(size);
const fontSizeInt = size => (getSpacingInt(size) / integize(tokens.space) - 3) * 2;
const fontSizeValue = ({ size }) => `${stylers.fontSizeValue(fontSizeInt(size))}px`;

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
  ${stylers.boxSizingStyles};
  font-size: ${fontSizeValue};

  line-height: ${({ hasChildren }) => (hasChildren ? stylers.lineHeightValue(-1) : "0")};
  position: relative;

  input[type="checkbox"] {
    ${stylers.visuallyHidden};

    & + label {
      cursor: pointer;
      display: inline-block;
      margin: 0;
      min-height: ${size};
      padding: ${labelPadding};
      position: relative;
    }

    & + label::before,
    & + label > .checkbox-icon {
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

    & + label:hover {
      &:before {
        border: 2px solid ${tokens.color.black};
      }
    }

    & + label > .checkbox-icon {
      color: ${tokens.color.white};
      font-size: ${fontSizeValue};
      height: ${size};
      left: ${checkBoxIconLeft};
      opacity: 0;
      pointer-events: none;
      transform: translateX(-50%);
      transition: opacity 0.15s ease-out;
      z-index: 2;
    }

    &:checked,
    &:indeterminate {
      & + label::before {
        background: ${tokens.color.black};
        border: none;
      }
    }

    &:checked + label > [data-pka-anchor="checkbox.icon.check"] {
      opacity: 1;
    }

    &:indeterminate + label > [data-pka-anchor="checkbox.icon.check"] {
      opacity: 0;
    }

    &:indeterminate + label > [data-pka-anchor="checkbox.icon.indeterminate"] {
      opacity: 1;
    }

    &:disabled {
      & + label,
      & ~ .checkbox-icon {
        opacity: 0.5;
        transition: none;
      }
      &:checked + label::before,
      &:indeterminate + label::before {
        background-color: ${tokens.color.blackLighten40};
      }
    }
  }
`;

export default checkboxStyles;
