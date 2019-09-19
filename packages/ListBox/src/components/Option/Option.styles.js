import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const blueSelected = tokens.color.blueLighten50;

export const OptionStyled = styled.li`
  border: 2px solid transparent;
  border-radius: 3px;
  margin-bottom: ${tokens.spaceSm};
  padding: ${tokens.spaceSm};

  ${stylers.fontSize(-1)};

  &:hover {
    ${props => {
      const isSelected = props.isSelected
        ? `background: ${blueSelected}`
        : `background: ${tokens.color.blackLighten70}`;
      const isDisabled = props.isDisabled ? "background: transparent; cursor: not-allowed;" : "";
      const hasPreventDefaultOnSelect = props.hasPreventDefaultOnSelect ? "background: transparent;" : "";

      return `
        ${isSelected}
        ${isDisabled}
        ${hasPreventDefaultOnSelect}
      `;
    }}
  }

  ${props => {
    const isDisabled = props.isDisabled
      ? `color: ${tokens.color.blackLighten60}; border: 0; background: transparent;`
      : "";

    const isActived = props.isActive
      ? `
        border: 2px solid Highlight;
        border-radius: 3px;
        `
      : "";

    const hasPreventDefaultOnSelect =
      props.isActive && props.hasPreventDefaultOnSelect ? `border-color: ${tokens.color.blackLighten60}` : "";

    const isSelected = props.isSelected ? `background: ${blueSelected}` : "";

    return `
      ${isActived}
      ${hasPreventDefaultOnSelect}
      ${isSelected}
      ${isDisabled}
    `;
  }}
`;
