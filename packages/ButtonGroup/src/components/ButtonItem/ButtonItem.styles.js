import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Selected from "@paprika/icon/lib/Check";
import Unselected from "@paprika/icon/lib/Times";
import Button from "@paprika/button";

const activeStyles = `
  background-color: ${tokens.color.blueLighten40};
  ${stylers.z(2)}
  
  &:hover {
    background-color: ${tokens.color.blueLighten30};
    border-color: ${tokens.color.blue};
  }
`;

export const SelectedIcon = styled(Selected)``;
export const UnselectedIcon = styled(Unselected)``;

export const Item = styled(Button)`
  ${UnselectedIcon}, ${SelectedIcon} {
    margin-right: ${tokens.spaceSm};
  }

  &:focus {
    ${stylers.z(3)}
  }

  &:hover {
    ${stylers.z(1)}
  }

  ${({ isActive }) => (isActive ? activeStyles : "")}
`;
