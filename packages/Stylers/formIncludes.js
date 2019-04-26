import tokens from "@paprika/tokens";

export const disabledFormStyles = `
  background-color: ${tokens.color.white};
  border-color: ${tokens.color.blackLighten70};
  color: ${tokens.color.blackLighten60};
  cursor: not-allowed;
`;

export const readOnlyFormStyles = `
  background-color: ${tokens.color.blackLighten70};
  box-shadow: none;
  color: ${tokens.color.black};
  cursor: text;

  &,
  &:focus {
    border-color: ${tokens.color.blackLighten60};
  }
`;

export const errorFormStyles = `
  border-color: ${tokens.color.orange};
`;
