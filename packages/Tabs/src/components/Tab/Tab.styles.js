import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const tabStyles = () => `
  ${stylers.fontSize()};
  background-color: ${tokens.color.white};
  border: 0;
  border-bottom: ${tokens.spaceSm} solid transparent;
  border-radius: 0;
  color: ${tokens.color.black};
  display: inline-block;
  margin: 0 0 0 ${stylers.spacer(4)};
  padding: ${stylers.spacer(2)} 0 ${tokens.space} 0;
  position: relative;
  transition: border-color 0.3s ease;

  &:first-child {
    margin-left: 0;
  }

  &:focus {
    border-color: transparent;
    z-index: ${stylers.z(1)};
  }

  &:hover {
    border-color: ${tokens.color.creme};
  }

  &.tab--is-active,
  &.tab--is-active:focus {
    border-bottom: ${tokens.spaceSm} solid ${tokens.color.green};
  }

  &.tab--is-disabled {
    border-bottom: 0;
    color: ${tokens.color.blackDisabled};
    cursor: not-allowed;
  }

  &.tab-link {
    color: ${tokens.color.black};
    text-decoration: none;
  }
`;

export default tabStyles;
