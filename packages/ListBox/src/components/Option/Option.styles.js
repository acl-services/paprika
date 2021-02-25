import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import * as types from "../../types";

const blueSelected = tokens.color.blueLighten50;

const activeStyles = css`
  ${stylers.focusRing()}
`;

const disabledStyles = css`
  background: transparent;
  border: 0;
  color: ${tokens.color.blackLighten60};
  outline: none;

  &:focus {
    ${stylers.focusRing.subtle()}
    border-bottom-color: transparent;
    border-radius: ${tokens.border.radius};
  }
`;

const fontSize = {
  [types.SMALL]: css`
    ${stylers.fontSize(-2)}
  `,
  [types.MEDIUM]: css`
    ${stylers.fontSize(-1)}
  `,
  [types.LARGE]: css`
    ${stylers.fontSize()}
  `,
};

const stateStyles = ({ isSelected, hasPreventDefaultOnSelect }) => css`
  &:hover {
    ${hasPreventDefaultOnSelect ? "background: transparent;" : ""};
    background: ${isSelected ? blueSelected : tokens.color.blackLighten70};
  }

  &:focus {
    ${stylers.focusRing()}
    border-bottom-color: transparent;
    border-radius: ${tokens.border.radius};
  }
`;

export const Option = styled.li(
  ({ size, isDisabled, hasPreventDefaultOnSelect, isSelected, isActive, listBoxHasFocus }) => css`
    border: 2px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: ${tokens.spaceSm};
    padding: ${tokens.spaceSm};
    ${fontSize[size]}

    &:hover {
      ${isDisabled ? "cursor: not-allowed;" : ""};
    } 
  
    ${isActive && listBoxHasFocus && hasPreventDefaultOnSelect ? `border-color: ${tokens.color.blackLighten60}` : ""};
    ${isActive && listBoxHasFocus ? activeStyles : ""}
    ${hasPreventDefaultOnSelect}
    ${isSelected ? `background: ${blueSelected};` : ""}
    ${isDisabled ? disabledStyles : stateStyles}
  `
);
