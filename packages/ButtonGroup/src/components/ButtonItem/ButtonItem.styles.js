import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Check from "@paprika/icon/lib/Check";
import Times from "@paprika/icon/lib/Times";
import Button from "@paprika/button";

const activeStyles = `
  background-color: ${tokens.color.blueLighten40};
  ${stylers.z(2)}
  
  &:hover {
    background-color: ${tokens.color.blueLighten30};
    border-color: ${tokens.color.blue};
  }
`;

export const CheckIcon = styled(Check)``;
export const TimesIcon = styled(Times)``;

export const ButtonItem = styled(Button)`
  ${TimesIcon} {
    margin-right: ${tokens.spaceSm};
  }

  ${CheckIcon} {
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
