import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const focusStyle = tokens.highlight.active.withBorder.boxShadow;

const kindStyles = () => ({
  primary: `
    border-bottom: ${tokens.spaceSm} solid ${tokens.color.green}
  `,

  secondary: `
    border-bottom: ${tokens.spaceSm} solid ${tokens.color.purple}
  `,
});

const activeStyles = props => css`
  &::after {
    ${kindStyles()[props.kind]}
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

const compactStyles = css`
  margin: 0 0 0 ${stylers.spacer(2)};
`;

export const tabStyles = css`
  ${stylers.fontSize()};
  align-items: center;
  background-color: ${tokens.color.white};
  border: 0;
  border-bottom: ${tokens.spaceSm} solid transparent;
  color: ${tokens.color.black};
  display: flex;
  height: ${props => (props.height ? `${props.height}px` : "auto")};
  margin: 0 0 0 ${stylers.spacer(4)};
  padding: ${stylers.spacer(2)} ${tokens.spaceSm} ${tokens.space} ${tokens.spaceSm};
  position: relative;
  transition: border-color 0.3s ease;

  ${({ isDisabled }) => (isDisabled ? disabledStyles : null)}
  ${({ isSelected }) => (isSelected ? activeStyles : null)}
  ${({ isCompact }) => (isCompact ? compactStyles : null)}
  
  &:first-child {
    margin-left: 0;
  }

  &:focus {
    border-radius: ${tokens.border.radius};
    ${stylers.z(1)}
  }

  &:hover {
    border-color: ${tokens.color.creme};
  }

  &.tab-link {
    color: ${tokens.color.black};
    text-decoration: none;

    &:focus {
      box-shadow: ${focusStyle};
      outline: none;
    }
  }
`;
