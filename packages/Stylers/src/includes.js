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
  margin: 0;
  padding: 0;
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

  .is-disabled &, &[disabled] {
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

export const selectArrow = (color = tokens.color.black) => `
  background: url("data:image/svg+xml;charset=utf8,%3Csvg color='%23#{str-slice(inspect(${color}), 2)}' width='18' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='currentColor' d='M18.286 12.571q0 0.464-0.339 0.804l-8 8q-0.339 0.339-0.804 0.339t-0.804-0.339l-8-8q-0.339-0.339-0.339-0.804t0.339-0.804 0.804-0.339h16q0.464 0 0.804 0.339t0.339 0.804z'%3E%3C/path%3E%3C/svg%3E");
`;

export const formDisabled = content => `{
  &.is-disabled,
  &[disabled] {
    background-color: ${tokens.color.white};
    border-color: ${tokens.color.blackLighten70};
    color: ${tokens.color.blackLighten60};
    cursor: not-allowed;

    ${content}
  }
}`;
