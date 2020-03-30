import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

const blueSelected = tokens.color.blueLighten50;

const activeStyles = css`
  border: 2px solid Highlight;
  border-radius: 3px;
`;

const disabledStyles = css`
  background: transparent;
  border: 0;
  color: ${tokens.color.blackLighten60};
`;

const fontSize = {
  [ShirtSizes.SMALL]: `
  ${stylers.fontSize(-2)}
`,
  [ShirtSizes.MEDIUM]: `
  ${stylers.fontSize(-1)}
`,
  [ShirtSizes.LARGE]: `
  ${stylers.fontSize()}
`,
};

export const OptionStyled = styled.li`
  border: 2px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: ${tokens.spaceSm};
  padding: ${tokens.spaceSm};

  ${props => fontSize[props.size]}

  &:hover {
    ${props => {
      const hoveredDisabledStyles = props.isDisabled ? "background: transparent; cursor: not-allowed;" : "";
      const hasPreventDefaultOnSelectStyles = props.hasPreventDefaultOnSelect ? "background: transparent;" : "";

      return `
        background: ${props.isSelected ? blueSelected : tokens.color.blackLighten70};
        ${hoveredDisabledStyles}
        ${hasPreventDefaultOnSelectStyles}
      `;
    }}
  }

  ${props => {
    const hasPreventDefaultOnSelect =
      props.isActive && props.listBoxHasFocus && props.hasPreventDefaultOnSelect
        ? `border-color: ${tokens.color.blackLighten60}`
        : "";

    return `
      ${props.isActive && props.listBoxHasFocus ? activeStyles : ""}
      ${hasPreventDefaultOnSelect}
      ${props.isSelected ? `background: ${blueSelected};` : ""}
      ${props.isDisabled ? disabledStyles : ""}
    `;
  }}
`;
