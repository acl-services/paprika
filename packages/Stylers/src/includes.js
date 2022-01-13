import { css } from "styled-components";
import tokens from "@paprika/tokens";

/* Layout */

export const boxSizingStyles = css`
  &,
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export const alignMiddle = css`
  align-items: center;
  display: flex;
  justify-content: center;
`;

/* Typography */

export const truncateText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const noTruncateText = css`
  overflow: visible;
  text-overflow: clip;
  white-space: normal;
`;

/* Accessibility */

export const visuallyHidden = css`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px !important;
  overflow: hidden;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap;
  width: 1px !important;
`;

/* Focus Indicators */

export const focusRing = (inset = false) =>
  inset === true
    ? css`
        box-shadow: ${tokens.highlight.active.withBorder.insetBoxShadow};
        outline: none;
      `
    : css`
        box-shadow: ${tokens.highlight.active.withBorder.boxShadow};
        outline: none;
      `;

focusRing.bordered = (inset = false) =>
  inset === true
    ? css`
        border-color: ${tokens.highlight.active.noBorder.borderColor};
        box-shadow: ${tokens.highlight.active.noBorder.insetBoxShadow};
        outline: none;
      `
    : css`
        border-color: ${tokens.highlight.active.noBorder.borderColor};
        box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
        outline: none;
      `;

focusRing.subtle = (inset = false) =>
  inset === true
    ? css`
        outline: ${tokens.highlight.active.nonInteractive.outline};
        outline-offset: -2px;
      `
    : css`
        outline: ${tokens.highlight.active.nonInteractive.outline};
      `;

/* Forms */

export const disabledPlaceholder = css`
  color: ${tokens.color.blackLighten60};
`;

export const placeholder = css`
  color: ${tokens.placeholder.color};
  font-style: ${tokens.placeholder.fontStyle};

  &[disabled] {
    ${disabledPlaceholder};
  }
`;

export const placeholders = css`
  &::placeholder {
    ${placeholder};
  }

  &::-webkit-input-placeholder {
    ${placeholder};
  }

  /* opacity: 1 is added to fix firefox placeholder text color issue */
  /* https://stackoverflow.com/q/19621306/196038 */
  &::-moz-placeholder {
    ${placeholder};
    opacity: 1;
  }

  &:-ms-input-placeholder {
    ${placeholder};
  }

  &:-moz-placeholder {
    ${placeholder};
    opacity: 1;
  }

  &[disabled]::placeholder {
    ${disabledPlaceholder};
  }

  &[disabled]::-webkit-input-placeholder {
    ${disabledPlaceholder};
  }

  &[disabled]::-moz-placeholder {
    ${disabledPlaceholder};
    opacity: 1;
  }

  &[disabled]:-ms-input-placeholder {
    ${disabledPlaceholder};
  }

  &[disabled]:-moz-placeholder {
    ${disabledPlaceholder};
    opacity: 1;
  }
`;
