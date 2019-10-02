import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

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

export const OptionStyled = styled.li`
  border: 2px solid transparent;
  border-radius: 3px;
  margin-bottom: ${tokens.spaceSm};
  padding: ${tokens.spaceSm};

  ${stylers.fontSize(-1)};

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
      props.isActive && props.hasPreventDefaultOnSelect ? `border-color: ${tokens.color.blackLighten60}` : "";

    return `
      ${props.isActive ? activeStyles : ""}
      ${hasPreventDefaultOnSelect}
      ${props.isSelected ? `background: ${blueSelected};` : ""}
      ${props.isDisabled ? disabledStyles : ""}
    `;
  }}
`;
