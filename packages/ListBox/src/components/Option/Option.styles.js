import styled, { css } from "styled-components";
import PaprikaAddIcon from "@paprika/icon/lib/Add";
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
  &:hover {
    ${hasPreventDefaultOnSelect ? "background: transparent;" : ""};
    background: ${isSelected ? blueSelected : tokens.color.blackLighten70};
  }

  &:focus {
    border-bottom-color: transparent;
    ${hasPreventDefaultOnSelect ? stylers.focusRing.subtle(true) : stylers.focusRing(true)}
  }
`;

export const Option = styled.li(
  ({ isDisabled, isSelected }) => css`
    align-items: center;
    cursor: pointer;
    display: flex;
    max-height: ${stylers.spacer(6)};
    min-height: ${stylers.spacer(4)};
    padding-inline-start: ${tokens.spaceLg};
    ${stylers.fontSize(-1)}

    &:hover {
      ${isDisabled ? "cursor: not-allowed;" : ""};
    }

    ${isSelected ? `background: ${blueSelected};` : ""}
    ${isDisabled ? disabledStyles : stateStyles}
  `
);

export const PlusIcon = styled(PaprikaAddIcon)`
  color: ${tokens.color.blackLighten20};
  font-size: 20px;
  padding-inline-end: ${tokens.space};
`;
