import { css } from "styled-components";
import { spacer, toInt, fontSizeValue, lineHeightValue } from "@paprika/stylers/lib/helpers";
import { boxSizingStyles, visuallyHidden } from "@paprika/stylers/lib/includes";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import tokens from "@paprika/tokens";

const labelSizeMap = {
  [ShirtSizes.SMALL]: -1,
  [ShirtSizes.MEDIUM]: 0,
  [ShirtSizes.LARGE]: 0,
};

const iconSizeMap = {
  [ShirtSizes.SMALL]: -3,
  [ShirtSizes.MEDIUM]: -1,
  [ShirtSizes.LARGE]: 0,
};

const checkboxSizeMap = {
  [ShirtSizes.SMALL]: 2,
  [ShirtSizes.MEDIUM]: 2.5,
  [ShirtSizes.LARGE]: 3,
};

const labelTopOffsetMap = {
  [ShirtSizes.SMALL]: 0,
  [ShirtSizes.MEDIUM]: 1,
  [ShirtSizes.LARGE]: 3,
};

const getSpacing = size => spacer(checkboxSizeMap[size]);
const checkBoxSize = ({ size }) => getSpacing(size);
const checkBoxHalfSize = ({ size }) => `${toInt(getSpacing(size)) / 2}px`;

const labelSizeValue = ({ size }) => `${fontSizeValue(labelSizeMap[size])}px`;
const iconSizeValue = ({ size }) => `${fontSizeValue(iconSizeMap[size])}px`;

const labelPadding = ({ hasLabel, size }) => {
  const top = `${labelTopOffsetMap[size]}px`;
  const left = hasLabel ? `${toInt(getSpacing(size)) + toInt(tokens.space)}px` : getSpacing(size);
  return `${top} 0 0 ${left}`;
};

const checkboxStyles = css`
  ${boxSizingStyles};
  font-size: ${labelSizeValue};
  line-height: ${({ hasLabel }) => (hasLabel ? lineHeightValue(-1) : "0")};
  position: relative;

  input[type="checkbox"] {
    ${visuallyHidden};

    &:focus + label::before {
      box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
      border-color: ${tokens.highlight.active.noBorder.borderColor};
    }

    & + label {
      cursor: pointer;
      display: inline-block;
      margin: 0;
      min-height: ${checkBoxSize};
      padding: ${labelPadding};
      position: relative;
    }

    & + label::before,
    & + label > .checkbox-icon {
      position: absolute;
      top: 0;
    }

    & + label::before {
      background: ${tokens.color.white};
      border: 2px solid ${tokens.border.color};
      border-radius: ${tokens.border.radius};
      content: "";
      height: ${checkBoxSize};
      left: 0;
      width: ${checkBoxSize};
      z-index: 1;
    }

    & + label:hover::before {
      border: 2px solid ${tokens.color.black};
    }

    & + label > .checkbox-icon {
      color: ${tokens.color.white};
      font-size: ${iconSizeValue};
      height: ${checkBoxSize};
      left: ${checkBoxHalfSize};
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
      & + label:hover::before {
        background: ${tokens.color.blackLighten30};
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
        pointer-events: none;
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
