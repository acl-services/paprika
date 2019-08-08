import { css } from "styled-components";
import tokens from "@paprika/tokens";

const contentStyles = css`
  background: ${tokens.color.white};
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.popover.borderRadius};
  box-shadow: ${tokens.popover.shadow};
  min-width: 150px;
  overflow-wrap: break-word;
  padding: 0;
  text-align: left;

  ${({ isOpen }) => (isOpen === false ? "opacity: 0;" : "")}
`;

export default contentStyles;
