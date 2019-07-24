import tokens from "@paprika/tokens";

//
// Layout
//

export const boxSizingStyle = `
  box-sizing: border-box;
`;

export const inlineBlockStyle = `
  ${boxSizingStyle}
  display: inline-block;
`;

export const alignMiddle = `
  align-items: center;
  display: flex;
  justify-content: center;
`;

//
// Typography
//

export const truncateText = `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const noTruncateText = `
  overflow: visible;
  text-overflow: clip;
  white-space: normal;
`;

//
// Accessibility
//

export const visuallyHidden = `
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px !important;
  overflow: hidden;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
`;

// Forms

export const disabledPlaceholder = `
color: ${tokens.color.blackLighten60};
`;

export const placeholder = `
  color: ${tokens.placeholder.color};
  font-style: ${tokens.placeholder.fontStyle};

  &[disabled] {
    ${disabledPlaceholder};
  }
`;

export const placeholders = `
  &::placeholder {
    ${placeholder};
  }

  &::-webkit-input-placeholder {
    ${placeholder};
  }

  // opacity: 1 is added to fix firefox placeholder text color issue
  // https://stackoverflow.com/q/19621306/196038
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
