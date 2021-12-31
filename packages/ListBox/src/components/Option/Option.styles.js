import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

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

const stateStyles = ({ isSelected, hasPreventDefaultOnSelect }) => css`
  border-radius: 0;
  margin: 0 -1rem;
  padding: 0 1rem;

  &:hover {
    ${hasPreventDefaultOnSelect ? "background: transparent;" : ""};
    background: ${isSelected ? blueSelected : tokens.color.blackLighten70};
  }

  &:focus {
    border-bottom-color: transparent;
    ${hasPreventDefaultOnSelect ? stylers.focusRing.subtle() : stylers.focusRing()}
  }
`;

export const Option = styled.li(
  ({ isDisabled, isSelected }) => css`
    align-items: center;
    border: 2px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    margin-bottom: ${tokens.spaceSm};
    max-height: ${stylers.spacer(6)};
    min-height: ${stylers.spacer(4)};
    ${stylers.fontSize(-1)}

    &:hover {
      ${isDisabled ? "cursor: not-allowed;" : ""};
    }

    ${isSelected ? `background: ${blueSelected};` : ""}
    ${isDisabled ? disabledStyles : stateStyles}
  `
);
