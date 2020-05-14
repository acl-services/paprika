import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Selected from "@paprika/icon/lib/Check";
import Unselected from "@paprika/icon/lib/Times";
import Button from "@paprika/button";

const activeStyles = css`
  ${stylers.z(1)}
  box-shadow: none;

  &,
  &:hover {
    background-color: ${tokens.color.blueLighten40};
    &:not([disabled], [aria-disabled="true"]) {
      background-color: ${tokens.color.blueLighten50};
    }
  }
`;

const iconStyles = css`
  color: ${tokens.textColor.icon};
  margin-right: ${tokens.spaceSm};
  position: relative;
  top: 0.15em;
`;

export const SelectedIcon = styled(Selected)``;

export const UnselectedIcon = styled(Unselected)``;

export const ButtonItem = styled(Button)`
  ${stylers.truncateText}
  display: block;

  &:focus {
    ${stylers.z(3)}
  }

  &:hover {
    ${stylers.z(2)}
  }

  ${({ isActive }) => (isActive ? activeStyles : "")}

  ${UnselectedIcon}, ${SelectedIcon} {
    ${iconStyles}
  }
  &[disabled], &[aria-disabled="true"] {
    ${UnselectedIcon}, ${SelectedIcon} {
      opacity: 0.5;
    }
  }
`;
