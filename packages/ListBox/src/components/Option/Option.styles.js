import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import * as types from "../../types";

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

export const Option = styled.li(
  ({ size, isDisabled, hasPreventDefaultOnSelect, isSelected, isActive, listBoxHasFocus }) => css`
    border: 2px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: ${tokens.spaceSm};
    padding: ${tokens.spaceSm};

    ${fontSize[size]}

    &:hover {
      ${isDisabled ? "background: transparent; cursor: not-allowed;" : ""};
      ${hasPreventDefaultOnSelect ? "background: transparent;" : ""};

      background: ${isSelected ? blueSelected : tokens.color.blackLighten70};
    }

    ${isActive && listBoxHasFocus && hasPreventDefaultOnSelect ? `border-color: ${tokens.color.blackLighten60}` : ""};
    ${isActive && listBoxHasFocus ? activeStyles : ""}
    ${hasPreventDefaultOnSelect}
    ${isSelected ? `background: ${blueSelected};` : ""}
    ${isDisabled ? disabledStyles : ""}
  `
);
