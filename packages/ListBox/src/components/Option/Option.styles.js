import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import * as types from "../../types";

const blueSelected = tokens.color.blueLighten50;

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

const stateStyles = ({ isSelected, hasPreventDefaultOnSelect, hasVirtualization }) => css`
  &:hover {
    ${hasPreventDefaultOnSelect ? "background: transparent;" : ""};
    background: ${isSelected ? blueSelected : tokens.color.blackLighten70};
  }

  &:focus {
    border-bottom-color: transparent;
    border-radius: ${tokens.border.radius};
    ${hasPreventDefaultOnSelect ? stylers.focusRing.subtle() : stylers.focusRing()}
    ${hasVirtualization ? "box-shadow: inset 0 0 0 2px #99cbfc;" : ""}
  }
`;

export const Option = styled.li(
  ({ size, isDisabled, isSelected }) => css`
    border: 2px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: ${tokens.spaceSm};
    padding: ${tokens.spaceSm};
    ${fontSize[size]}

    &:hover {
      ${isDisabled ? "cursor: not-allowed;" : ""};
    }

    ${isSelected ? `background: ${blueSelected};` : ""}
    ${isDisabled ? disabledStyles : stateStyles}
  `
);
