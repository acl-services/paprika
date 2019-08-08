import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const activeStyles = css`
  &::after {
    border-bottom: ${tokens.spaceSm} solid ${props => props.borderColor || tokens.color.green};
    bottom: -${tokens.spaceSm};
    content: "";
    height: ${tokens.spaceSm};
    left: 0;
    position: absolute;
    width: 100%;
  }
`;

const disabledStyles = css`
  color: ${tokens.color.blackDisabled};
  cursor: not-allowed;
`;

export const tabStyles = css`
  ${stylers.fontSize()};
  background-color: ${tokens.color.white};
  border: 0;
  border-bottom: ${tokens.spaceSm} solid transparent;
  border-radius: ${tokens.border.radius};
  color: ${tokens.color.black};
  display: inline-block;
  margin: 0 0 0 ${stylers.spacer(4)};
  padding: ${stylers.spacer(2)} ${tokens.spaceSm} ${tokens.space} ${tokens.spaceSm};
  position: relative;
  transition: border-color 0.3s ease;

  ${({ isDisabled }) => (isDisabled ? disabledStyles : null)}
  ${({ isSelected }) => (isSelected ? activeStyles : null)}
  
  &:first-child {
    margin-left: 0;
  }

  &:focus {
    ${stylers.z(1)}
  }

  &:hover {
    border-color: ${tokens.color.creme};
  }

  &.tab-link {
    color: ${tokens.color.black};
    text-decoration: none;
  }
`;
